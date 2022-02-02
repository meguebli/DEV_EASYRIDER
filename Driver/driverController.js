const { Driver, saveChangeDriver } = require('./driverModel');
const { allCars } = require('./carController');
const fs = require('fs');
const { saveChangeCar } = require('./carModel');

const listCars = allCars();
// get driver function => get drivers from json file

const getDrivers = () => {
  const drivers = fs.readFileSync('driverData.json');
  return JSON.parse(drivers);
};
const listDrivers = getDrivers();

// get drivers methode
const getAllDrivers = (req, res) => {
  res.send(listDrivers);
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
  saveChangeDriver(listDrivers);
  res.status(200).json({ listDrivers });
};

// Driver Status

const driverStatus = (req, res) => {
  // console.log(listDrivers);
  // Get the id of the current driver
  const idDriver = req.params.id;
  // console.log(idDriver);
  // const findExist = existUsers.find( user => user.username === username )
  // const findDriver = listDrivers.find(driver => driver.id === idDriver)
  const findDriver = listDrivers.find(function (post, index) {
    // console.log(post.id);
    if (post.id == idDriver) {
      return true;
    }
  });

  console.log(listDrivers.indexOf(findDriver));
  res.send(`Mr. ${findDriver.prenom} is ${findDriver.status} `);
};

//  SET || UNSET CAR TO A DRIVER

const setCarToDriver = (req, res) => {
  // Getting the id of the driver
  const settingParam = req.body.setCar;
  const idDriver = req.body.id;
  // Getting the id of the car from the url params
  const idCar = req.params.id;

  // RETURNING THE SEARCHED DRIVER USING THE ID PASSED IN THE BODY
  const driver = listDrivers.find(function (post, index) {
    if (post.id === idDriver) {
      return true;
    }
  });
  // RETURNING THE SEARCHED CAR USING THE ID PASSED IN THE PARAMETERS {URL}
  const car = listCars.find(function (post, index) {
    if (post.id == idCar) {
      return true;
    }
  });
  /* 
  IF SET CAR EQUAL TO TRUE
  ASSIGN THE CAR { CATEGORY OF CAR } TO DRIVER
   */
  if (settingParam === true) {
    car['Status'] = 'Active';
    const indexCar = listCars.indexOf(car);
    listCars[indexCar] = car;
    saveChangeCar(listCars);

    // ADDING NEW ENTRY TO THE DRIVER
    driver['Car'] = idCar;
    // GETTING THE INDEX OF THE driver
    const indexDriver = listDrivers.indexOf(driver);
    // REPLACING THE ACTUAL driver WITH the NEW ENTRY
    listDrivers[indexDriver] = driver;
    saveChangeDriver(listDrivers);

    res.status(200).json({ driver, car });
  } else {
    car['Status'] = 'Inactive';
    const indexCar = listCars.indexOf(car);
    listCars[indexCar] = car;
    saveChangeCar(listCars);

    // UNSET CAR
    driver['Car'] = 0;
    // GETTING THE INDEX OF THE driver
    const indexDriver = listDrivers.indexOf(driver);
    // REPLACING THE ACTUAL driver WITH the NEW ENTRY
    listDrivers[indexDriver] = driver;
    saveChangeDriver(listDrivers);

    res.status(200).json({ driver, car });
  }
  /* 
  IF SET CAR EQUAL TO FALSE
  DELETE THE CAR { CATEGORY OF CAR } TO DRIVER
   */
};

const unSetCarToDriver = (req, res) => {};

module.exports = { getAllDrivers, driverStatus, createDriver, setCarToDriver };
