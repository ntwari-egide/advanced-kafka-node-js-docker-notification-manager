console.log("producer is running .....");

var kafka = require('kafka-node')


let KAFKA_TOPIC = "yombi-topic-test"

let Producer = kafka.Producer
let KeyedMessage = kafka.KeyedMessage
let client = new kafka.KafkaClient()
let producer = new Producer(client)


function sendMessageTemplate(){
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
}

setInterval(()=> {
    sendMessageTemplate()
})

