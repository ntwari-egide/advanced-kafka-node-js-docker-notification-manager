console.log("producer is running .....");

var kafka = require('kafka-node'),
KAFKA_TOPIC = "new topic createds"

Producer = kafka.Producer,
KeyedMessage = kafka.KeyedMessage
client = new kafka.KafkaClient(),
producer = new Producer(client),

setInterval(()=> {
    km = new KeyedMessage('key','message'),
    payloads = [
        {
            topic : KAFKA_TOPIC,
            messages: {
                data: {
                    message: "You sent log",
                    type: "DANGER",
                    seen: false,
                    createdAt: Date.now()
                }
            },
            partition: 0}
    ]

    producer.on('ready', () => {
        producer.send(payloads,(err,data) => {
            console.log("Message data sent: ",data);
        })
    })
})

