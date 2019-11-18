var express = require('express');
const NewsAPI= require('newsapi');
const newsapi = new NewsAPI('80f13eeda9c8481590f4696199a27860');


var app = express();
app.use(express.static('public'))
//endpoint 1

app.get('/', function (req, res) {
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'us'
        }).then(response => {
        //console.log("hello");
        var options=response;
        console.log(options);
 
        });
  res.sendFile('index.html', options);
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
Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'test', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );
    consumer.on('message', function (message) {
        res.send(message)
    });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

