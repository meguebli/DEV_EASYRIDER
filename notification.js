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

//notifyEndTrip methode
const endTrip=1;

//notifyEndTrip methode
const newFeedback=1;

//NotifyDelayTrip methode
const NotifyDelayTrip=1;

//End trip verification
if(NotifyDelayTrip===1){
  app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    
  // send notification
    const payloadNotifyDelayTrip = JSON.stringify({ titleNotifyDelayTrip: "END TRIP" });
     
    console.log(subscription);
  
    webpush.sendNotification(subscription, payloadNotifyDelayTrip).catch(error => {
      console.error(error.stack);
    });
  });
}

//notifyEndTrip methode
const notifyNewCar=1;

//End trip verification
if(notifyNewCar===1){
  app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    
  // send notification
    const payloadnotifyNewCar = JSON.stringify({ titlenotifyNewCar: "END TRIP" });
     
    console.log(subscription);
  
    webpush.sendNotification(subscription, payloadnotifyNewCar).catch(error => {
      console.error(error.stack);
    });
  });
}

//End trip verification
if(newFeedback===1){
  app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    
  // send notification
    const payloadNewFeedback = JSON.stringify({ titleNewFeedback: "END TRIP" });
     
    console.log(subscription);
  
    webpush.sendNotification(subscription, payloadNewFeedback).catch(error => {
      console.error(error.stack);
    });
  });
}

//End trip verification
if(endTrip===1){
  app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    
  // send notification
    const payloadEndTrip = JSON.stringify({ titleEndTrip: "END TRIP" });
     
    console.log(subscription);
  
    webpush.sendNotification(subscription, payloadEndTrip).catch(error => {
      console.error(error.stack);
    });
  });
}
// new driver verication
if(newDriver===1){
  app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    
  // send notification
    const payloadNewDriver = JSON.stringify({ titleDriver: "NEW DRIVER" });
     
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
  const payload = JSON.stringify({ title: nameD+"  Actif" });
   
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

console.log("your server as run on port 9000");