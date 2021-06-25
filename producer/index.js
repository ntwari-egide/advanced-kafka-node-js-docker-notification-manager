console.log("producer is running .....");

var kafka = require('kafka-node'),
KAFKA_TOPIC = "yombi-topic-test"

Producer = kafka.Producer,
KeyedMessage = kafka.KeyedMessage
client = new kafka.KafkaClient(),
producer = new Producer(client),
km = new KeyedMessage('key','message'),
payloads = [
    {topic : KAFKA_TOPIC,message: 'Hello kafka',partition: 0}
]

producer.on('ready', () => {
    producer.send(payloads,(err,data) => {
        console.log("Message recieved: ",data);
    })
})

