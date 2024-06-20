const { kafka } = require('./client');
const readline = require('readline');

// readline module provides an interface for reading data from Readable streams (such as process.stdin) one line at a time
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define a function to connect to the Kafka broker

const run = async () => {
    // Create a producer
    const producer = kafka.producer();

    // Connect to the producer
    await producer.connect();
    console.log('Producer Connected');

    // Prompt the user to enter a message
    rl.setPrompt('Enter a message: ');
    rl.prompt();

    // Read the message from the user
    rl.on('line', async (message) => {
        const [TestName, Marks] = message.split(' ');

        // Send messages
        console.log('Sending messages...');
        await producer.send({
            topic: 'test-topic',
            messages: [
                {
                    partition: TestName.toLowerCase() === 'maths' ? 0 : 1,
                    key: "TestMarks",
                    value: JSON.stringify({ Marks, TestName }),
                },
            ],
        });
    }).on('close', async () => {

        // Disconnect the producer
        await producer.disconnect();
        console.log('Producer disconnected');
    }
    );
}

run().catch(console.error);