const fs = require('fs');

class Driver {
  constructor(id, nom, prenom, status) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.status = status;
  }
}

const saveChange = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('driverData.json', stringifyData);
};

module.exports = { Driver, saveChange };
