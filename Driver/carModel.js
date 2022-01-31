const fs = require('fs');

class Car {
  constructor(id, matricule, category, nbPlace) {
    this.id = id;
    this.matricule = matricule;
    this.category = category;
    this.nbPlace = nbPlace;
  }
}

const saveChange = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('carData.json', stringifyData);
};



module.exports = {Car, saveChange}