const { ProducerStream, ConsumerGroupStream } = require("kafka-node");

require("kafka-node")

const resultProducer = new ProducerStream();
 
KAFKA_TOPIC = "yombi-topic-test"

const consumerOptions = {
  kafkaHost: 'localhost:9092',
  groupId: 'yombi',
  sessionTimeout: 15000,
  protocol: ['roundrobin'],
  asyncPush: false,
  id: 'consumer1',
  fromOffset: 'latest'
};
 
const consumerGroup = new ConsumerGroupStream(consumerOptions, 'ExampleTopic');
 
const messageTransform = new Transform({
  objectMode: true,
  decodeStrings: true,
  transform (message, encoding, callback) {
    console.log(`Received message ${message.value} transforming input`);
    callback(null, {
      topic: 'RebalanceTopic',
      messages: `You have been (${message.value}) made an example of`
    });
  }
});
 
consumerGroup.pipe(messageTransform).pipe(resultProducer);