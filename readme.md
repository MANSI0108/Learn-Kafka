
# README

This is the README file for the project.

## Introduction

Welcome to the project! This README file provides an overview of the project and its purpose.

## Knowledge
  Node.JS Intermediate level
  Experience with designing distributed systems

## Tools
  Node.js: Download Node.JS
  Docker: Download Docker
  VsCode: Download VSCode

## commands

--> Start Zookeper Container and expose PORT 2181.
      
      docker run -p 2181:2181 zookeeper

--> Start Kafka Container, expose PORT 9092 and setup ENV variables.

       docker run -p 9092:9092 \
      -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
      -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
      -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
       confluentinc/cp-kafka


## Running Locally

# Run Multiple Consumers

     node consumer.js <GROUP_NAME>

# Create Producer
     node producer.js

## What is a topic in Kafka?

In Kafka, a topic is a category or feed name to which messages are published. It represents a specific stream of data that is stored and organized in Kafka. Topics can be partitioned to allow for parallel processing and scalability. Producers publish messages to a specific topic, and consumers subscribe to topics to consume those messages.

Topics in Kafka provide a way to organize and categorize data streams, making it easier to manage and process large amounts of data in a distributed system.

For more information on topics in Kafka, refer to the official Kafka documentation: [https://kafka.apache.org/documentation](https://kafka.apache.org/documentation)


## refrences 

[Apche Kafka Crash Course](https://www.youtube.com/watch?v=ZJJHm_bd9Zo)




