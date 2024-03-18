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

            const queue = process.env.MESSAGE_QUEUE;

            channel.assertQueue(queue, { durable: false });

            console.log('Waiting for messages...');

            channel.consume(queue, (message) => {
                console.log('Consuming Enriched Number:', message.content.toString());
            }, { noAck: true });
        }
    });
});
