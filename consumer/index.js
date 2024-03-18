require('dotenv').config();

const amqp = require('amqplib/callback_api');

const rabbitmqHost = process.env.RABBITMQ_HOST || 'rabbitmq';

amqp.connect(`amqp://${rabbitmqHost}`, (err, conn) => {
    if (err) {
        console.error('Error connecting to RabbitMQ:', err);
        process.exit(1);
    }

    conn.createChannel((err, ch) => {
        if (err) {
            console.error('Error creating channel:', err);
        } else {
            const queue = process.env.RANDOM_NUMBER_QUEUE_NAME;
            ch.assertQueue(queue, { durable: false });

            console.log('Waiting for messages...');

            ch.consume(queue, (msg) => {
                console.log('Received message:', msg.content.toString());
            }, { noAck: true });
        }
    });
});
