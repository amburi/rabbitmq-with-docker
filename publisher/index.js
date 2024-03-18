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
            const queue = process.env.RANDOM_NUMBER_QUEUE;

            channel.assertQueue(queue, { durable: false });

            setInterval(() => {
                const message = Math.random().toString();
                console.log('Publishing Random Number:', message);
                channel.sendToQueue(queue, Buffer.from(message));
            }, 1000); // Send a message every second
        }
    });
});
