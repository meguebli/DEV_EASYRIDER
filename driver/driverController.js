const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())

// get driver function => get drivers from json file

const getDrivers = () => {
  const drivers = fs.readFileSync('driver/driver.json');
  return JSON.parse(drivers);
};
const listDrivers = getDrivers();

// get drivers methode
const getAllDrivers = (req, res) => {
  res.send(listDrivers);
};

const getActiveDriver = (req,res)=>{
    const jsonData = fs.readFileSync('driver/driver.json')
    const drivers = JSON.parse(jsonData)
    const activeDriver = drivers.filter(driver=>driver.isActive === true )
    res.send(activeDriver)

}


const getNonActiveDriver = (req,res)=>{
  const jsonData = fs.readFileSync('driver/driver.json')
  const drivers = JSON.parse(jsonData)
  const activeDriver = drivers.filter(driver=>driver.isActive === false )
  res.send(activeDriver)

}

const getOnLigneeDriver = (req,res)=>{
  const jsonData = fs.readFileSync('driver/driver.json')
  const drivers = JSON.parse(jsonData)
  const activeDriver = drivers.filter(driver=>driver.onLine === true )
  res.send(activeDriver)

}


module.exports = { getAllDrivers, getActiveDriver ,getOnLigneeDriver,getNonActiveDriver};



