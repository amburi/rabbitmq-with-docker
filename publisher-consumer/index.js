const amqp = require('amqplib/callback_api');

const rabbitmqHost = process.env.RABBITMQ_HOST || 'rabbitmq';

amqp.connect(`amqp://${rabbitmqHost}`, (error, connection) => {
    if (error) {
        console.error('Error connecting to RabbitMQ:', error);
        process.exit(1);
    }

    connection.createChannel((error, channel) => {
        if (error) {
            console.error('Error creating channel:', error);
        } else {

            // consumer ..........................

            const randomQueue = process.env.RANDOM_NUMBER_QUEUE;

            channel.assertQueue(randomQueue, { durable: false });

            console.log('Waiting for messages...');

            channel.consume(randomQueue, (consumedMessage) => {
                console.log('Consuming Random Number:', consumedMessage.content.toString());
            }, { noAck: true });

            // publisher ..........................

            const messageQueue = process.env.MESSAGE_QUEUE;

            channel.assertQueue(messageQueue, { durable: false });

            setInterval(() => {
                const publishedMessage = 'Enriched Number: ' + Math.random().toString();
                console.log('Publishing Enriched Number:', publishedMessage);
                channel.sendToQueue(messageQueue, Buffer.from(publishedMessage));
            }, 1000); // Send a message every second

        }
    });
});
