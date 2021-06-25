console.log("consumer is running ....");

KAFKA_TOPIC = "topic yombi-topic-test-2"

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: KAFKA_TOPIC, partition: 0 }
        ],
        {
            autoCommit: false
        }
    );

    consumer.on('message', (message) => {
        console.log("Message received: ", message.value);

    })