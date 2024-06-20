// Import the Kafka library
const { kafka } = require('./client');

// Define a function to connect to the Kafka broker
const run = async () => {

    // Create an admin client
    const admin = kafka.admin();
    try {

        // Connect to the broker
        await admin.connect();
        console.log('Connected');

        // Create topics
        console.log('Creating topics...');
        const result = await admin.createTopics({
            topics: [{
                topic: 'test-topic',
                numPartitions: 2
            }],
            waitForLeaders: true  // Ensures that topics are created and leaders are elected
        });

        if (result) {
            console.log('Created topics successfully');
        } else {
            console.log('Topics already existed or an error occurred');
        }
    } catch (error) {
        console.error('Error in connecting or creating topics:', error);
    } finally {

        // Disconnect the admin client
        try {
            await admin.disconnect();
            console.log('Disconnected');
        } catch (error) {
            console.error('Failed to disconnect admin client:', error);
        }
    }
}

// Run the function and catch any errors
run().catch(console.error);
