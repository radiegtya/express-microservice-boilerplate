# Event Driven with RabbitMQ Example

RabbitMQ is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.
https://www.rabbitmq.com/

In this example, we're using RabbitMQ as Event Driven messaging protocols. We hope that this example can be implemented too another programming language, because RabbitMQ supports many programming language out of the box.

## Case Study

We are creating a simple Uber like app. As simple as Ordering available driver through microservices and make it as a new order, and when it valid, it will create a transaction.

### Database Design

order:

- id
- from
- to
- transactionId

driver:

- id
- name
- isAvailable

transaction:

- id
- date
- driverId


### Microservices

- order service (producer)
- driver service
- transaction service
- consumer service

### Detailed Process

Start =>
User ordering =>
GET driver by isAvailable flag =>
PUT driver isAvailable = false =>
POST a transaction with selected driverId =>
POST orders with created transactionId =>
PUT driver isAvailable = true, after 1 minute (for demo purpose) =>
Done
