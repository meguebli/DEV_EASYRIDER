const {Driver,saveChange} = require('./driverModel');
const fs = require('fs');

// get driver function => get drivers from json file

const getDrivers = () => {
  const drivers = fs.readFileSync('driverData.json');
  return JSON.parse(drivers);
};
const listDrivers = getDrivers();

// get drivers methode
const getAllDrivers = (req, res) => {
  res.send(getDrivers());
};

// create driver methode
const createDriver = (req, res) => {
  const addDriver = new Driver(
    req.body.id,
    req.body.nom,
    req.body.prenom,
    req.body.status
  );
  const driver = {
    id: addDriver.id,
    nom: addDriver.nom,
    prenom: addDriver.prenom,
    status: addDriver.status,
  };
  listDrivers.push(driver);
  saveChange(listDrivers);
  res.status(200).json({ listDrivers });
};

// Driver Status

const driverStatus = (req,res) => {
    console.log(listDrivers);
    // Get the id of the current driver
    const idDriver = req.params.id
    // console.log(idDriver);
    // const findExist = existUsers.find( user => user.username === username )
    // const findDriver = listDrivers.find(driver => driver.id === idDriver)
    const findDriver = listDrivers.find(function(post, index){
        // console.log(post.id);
        if(post.id == idDriver){
            return true
        }
    });
    
    console.log(findDriver)
    res.send(`Mr. ${findDriver.prenom} is ${findDriver.status} `)
}


module.exports = { getAllDrivers, driverStatus, createDriver };
