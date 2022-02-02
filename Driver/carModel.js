const fs = require('fs');

class Car {
  constructor(id, matricule, category, nbPlace) {
    this.id = id;
    this.matricule = matricule;
    this.category = category;
    this.nbPlace = nbPlace;
  }
}

const saveChangeCar = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('carData.json', stringifyData);
};



module.exports = {Car, saveChangeCar}