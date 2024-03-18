# RabbitMQ Demo with Docker Compose

This project demonstrates a simple publisher-consumer pattern using RabbitMQ as a message broker. It's implemented with Node.js and Docker Compose for easy setup and isolation.

## Features:

- Uses RabbitMQ for message queuing.
- Implements a publisher sending random numbers as messages.
- Implements a consumer receiving and logging messages.
- Docker Compose simplifies running the services.

## Requirements:

- Docker (https://docs.docker.com/engine/install/)
- Docker Compose (https://docs.docker.com/compose/install/)
- Node.js and npm (https://nodejs.org/en)

## Project Structure:

```
rabbitmq-demo/
├── publisher/
│   └── index.js
├── publisher-consumer/
│   └── index.js
└── consumer/
    └── index.js
├── docker-compose.yml
```

## Instructions:

- Clone or download this repository.
- Open the terminal in the `rabbitmq-demo` directory.
- Build the Docker images: `docker-compose build`
- Run the services (detached mode): `docker-compose up -d`
- Access RabbitMQ Management UI: http://localhost:15672 (default credentials: username: "guest", password: "guest")

## Explanation:

- `docker-compose.yml` defines the services: RabbitMQ, publisher, and consumer.
- `publisher/index.js` implements the publisher logic using `amqplib`.
- `consumer/index.js` implements the consumer logic using `amqplib`.

## Customization:

- Modify the message format in both `publisher/index.js`, `publisher-consumer/index.js` and `consumer/index.js`.
- Add error handling and logging functionalities as needed.
- Explore advanced RabbitMQ features like exchanges and routing keys.

## License:

This project is distributed under the MIT License (see LICENSE file).