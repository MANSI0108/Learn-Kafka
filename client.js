const { Kafka } = require('kafkajs');

exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.1.159:9092']
});



