//express importation
const express = require('express');

//webpush importation
const webpush = require('web-push');

//fs importation
const fs = require('fs');

//keys
const publicVapidKey = 'BHTuNJPKb_QDXti0sNnTLj52uN-qsUB0l4Fxcjmr4EQiHzAyzgJpelOKlfJfZch5Oooj8MIv7ksPIWQeP4wR4s4';
const privateVapidKey = 'c_1xUM4lzY66ySZi_GtzG9Rx27tXTDJNorJWKV6D7ps';

// webpush kyes details
webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

//using express
const app = express();

//using bodyParser
app.use(require('body-parser').json());

//reading data
const jsonData = fs.readFileSync('driver.json')
const drivers = JSON.parse(jsonData)

// new driver methode
const newDriver=1;

// new driver verication
if(newDriver===1){
  app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    
  // send notification
    const payloadNewDriver = JSON.stringify({ title: "NEW DRIVER" });
     
    console.log(subscription);
  
    webpush.sendNotification(subscription, payloadNewDriver).catch(error => {
      console.error(error.stack);
    });
  });

}
// status driver verification    
   if(drivers.status==='1'){
   const nameD=drivers.name;
app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  
// send notification
  const payload = JSON.stringify({ title: nameD });
   
  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});
   }
  
// using express static
app.use(require('express-static')('./'));

//server and port
app.listen(9000);

console.log("your server as run on port 8000");