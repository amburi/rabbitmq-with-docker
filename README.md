# RabbitMQ Demo with Docker Compose

Welcome to the RabbitMQ Demo project! This tutorial demonstrates a simple publisher-consumer pattern using RabbitMQ as a message broker. We'll use Node.js and Docker Compose to set up the project easily and manage dependencies.

## Overview

![image](https://github.com/amburi/rabbitmq-demo/assets/1125584/d7d8302a-3c67-493e-9499-e091e2b30117)

**RabbitMQ**: Acts as the message broker managing message queues and message delivery.

**Exchange**: (default) Routes messages to appropriate queues based on routing rules.

**Queues**:
- messages: Stores messages sent by the publisher.
- logs: Receives messages consumed and logged by the consumer.

**Publisher**:
- Generates random numbers as messages.
- Sends messages to the RabbitMQ server, which routes them to the messages queue.

**Consumer**:
- Subscribes to the messages queue.
- Receives messages from RabbitMQ.
- Logs the received messages to the console or a log file.

## Features:

- Uses RabbitMQ for message queuing.
- Implements a publisher sending random numbers as messages.
- Implements a consumer receiving and logging messages.
- Docker Compose simplifies running the services.

## Requirements:

Make sure you have the following installed on your system:

- Docker: Follow the installation guide [here](https://docs.docker.com/engine/install/).
- Docker Compose: Follow the installation guide [here](https://docs.docker.com/compose/install/).
- Node.js and npm: Install from [nodejs.org](https://nodejs.org/en/).

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

### Step 1: Clone the Repository

Clone or download the RabbitMQ Demo repository:

```bash
git clone <repository-url>
cd rabbitmq-demo
```

### Step 2: Build Docker Images

Build the Docker images defined in `docker-compose.yml`:

```bash
docker-compose build
```

### Step 3: Run the Services

Start the services using Docker Compose in detached mode:

```bash
docker-compose up -d
```

This command starts RabbitMQ along with the publisher and consumer services.

### Step 4: Access RabbitMQ Management UI

Open your web browser and go to [http://localhost:15672](http://localhost:15672). You can use the default credentials:
- Username: `guest`
- Password: `guest`

## Explanation:

### `docker-compose.yml`

The Docker Compose file defines three services:
- **RabbitMQ**: Message broker used for queuing messages.
- **publisher**: Sends random numbers as messages to RabbitMQ.
- **consumer**: Receives and logs messages from RabbitMQ.

### `publisher/index.js`

This file contains the logic for the publisher, which generates random numbers and sends them to RabbitMQ using the `amqplib` library.

### `consumer/index.js`

This file contains the logic for the consumer, which listens for messages from RabbitMQ and logs them to the console.

## Customization:

Feel free to customize the project:
- Modify the message format in `publisher/index.js`, `publisher-consumer/index.js`, and `consumer/index.js`.
- Add error handling and logging functionalities as needed.
- Explore advanced RabbitMQ features like exchanges and routing keys.

## License:

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.
