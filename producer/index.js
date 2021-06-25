console.log("producer is running .....");

Notification = {
    message: "",
    type: "DANGER",
    seen: false,
    createdAt: Date.now()
}

var kafka = require('kafka-node'),
KAFKA_TOPIC = "yombi-topic-test"

Producer = kafka.Producer,
KeyedMessage = kafka.KeyedMessage
client = new kafka.KafkaClient(),
producer = new Producer(client),

setInterval(()=> {
    const notification = Notification
    notification.message = "You sent a log"
    km = new KeyedMessage('key','message'),
    payloads = [
        {topic : KAFKA_TOPIC,messages: notification,partition: 0}
    ]

    producer.on('ready', () => {
        producer.send(payloads,(err,data) => {
            console.log("Message data sent: ",data);
        })
    })
})

