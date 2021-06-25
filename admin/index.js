console.log("Admin is running .........");
var kafka = require('kafka-node')

const client = new kafka.KafkaClient();
const admin = new kafka.Admin(client); 
admin.listGroups((err, res) => {
  console.log('consumerGroups', res);
});

createTopic("new topic createds")

listAllTopics()

deleteTopic("new topic createds")

function listAllTopics(){
    admin.listTopics((err, res) => {
        console.log('topics', res);
    });
}


function createTopic(topicName){
    var topics = [{
        topic: topicName,
        partitions: 1,
        replicationFactor: 2
      }];
    admin.createTopics(topics, (err, res) => {
        // result is an array of any errors if a given topic could not be created
        console.log("created topic: ",res);
    })
}


function deleteTopic(topicName){
    consumer.removeTopics([topicName], (err, res) => {
        console.log("deleted topic: ",res);
    });
}