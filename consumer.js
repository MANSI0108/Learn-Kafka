const { kafka } = require('./client');
const group = process.argv[2] || 'test-group';

// Define a function to connect to the Kafka broker
const run = async () => {

    // Create a consumer
    const consumer = kafka.consumer({ groupId: group });

    // Connect to the consumer
    await consumer.connect();
    console.log('Consumer Connected');

    // Subscribe to the topic
    await consumer.subscribe({ topics: ['test-topic'], fromBeginning: true });

    // Run the consumer
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({

                groupId: group,
                topic: topic,
                partition,
                offset: message.offset,
                value: message.value.toString(),
            });
        },
    });
}

run().catch(console.error);