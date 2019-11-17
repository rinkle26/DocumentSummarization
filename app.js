var express = require('express');
var app = express();
app.use(express.static('public'))
//endpoint 1
app.get('/', function (req, res) {
  res.sendFile('index.html');
});

//endpoint 2
app.get('/search',function(req,res){
    var kafka = require('kafka-node')
    Producer = kafka.Producer
    
    client = new kafka.KafkaClient()
    producer = new Producer(client)
    var message = req.query.searchString
    var section = req.query.category
    console.log(message)
    console.log(section)
    payloads = [
        { topic: 'test', messages: "{message:"+message+",section:"+section+"}" }
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});

producer.on('error', function (err) {})
//comsumer code
// Consumer = kafka.Consumer,
//     client = new kafka.KafkaClient(),
//     consumer = new Consumer(
//         client,
//         [
//             { topic: 'test', partition: 0 }
//         ],
//         {
//             autoCommit: false
//         }
//     );
//     consumer.on('message', function (message) {
//         res.send(message)
//     });



});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

