 const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())

// get rider function => get rider from json file

const getRider = () => {
  const riders = fs.readFileSync('rider/rider.json');
  return JSON.parse(riders);
};
const listRiders = getRider();

// get rider methode
const getAllRider = (req, res) => {
  res.send(listRiders);
};

const getWaitingRider = (req,res)=>{
    const jsonData = fs.readFileSync('rider/rider.json')
    const riders = JSON.parse(jsonData)
    const WaitingRider = riders.filter(rider=>rider.isWaiting === true )
    res.send(WaitingRider)

}
const getRiderByRouad = (req,res)=>{
  const riderParams = req.params.road;
  const jsonData = fs.readFileSync('rider/rider.json')
  const riders = JSON.parse(jsonData)
  const RiderByRoad = riders.filter(rider=>rider.road === riderParams )
  res.send(RiderByRoad)

}
module.exports = { getAllRider, getWaitingRider,getRiderByRouad };



