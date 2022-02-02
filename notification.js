const express = require('express');
const webpush = require('web-push');
const fs = require('fs');

const publicVapidKey = 'BHTuNJPKb_QDXti0sNnTLj52uN-qsUB0l4Fxcjmr4EQiHzAyzgJpelOKlfJfZch5Oooj8MIv7ksPIWQeP4wR4s4';
const privateVapidKey = 'c_1xUM4lzY66ySZi_GtzG9Rx27tXTDJNorJWKV6D7ps';

// Replace with your email
webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

const jsonData = fs.readFileSync('driver.json')
    const drivers = JSON.parse(jsonData)
   if(drivers.status==='1'){
   const nameD=drivers.name;
app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  
   
  const payload = JSON.stringify({ title: nameD });
   
  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});
   }
app.use(require('express-static')('./'));

app.listen(8000);

console.log("cava");