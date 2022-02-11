const express = require("express");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const register = (req, res, next) => {
  const user = getUserData();
  const userParams = req.body.useremail;
  const foundUser = user.find((user) => user.useremail === userParams);
  if (foundUser) {
    return res.status(401).json({ error: "utilisateur déjà existant!" });
  } else {
    const userName = req.body.userName;
    const userpass = req.body.userpass.toString();
    const useremail = req.body.useremail;
    const salt = bcrypt.genSaltSync(6);
    const hashedPassword = bcrypt.hashSync(userpass, salt);
    const objUser = {
      userId:Date.now().toString(),
      userName: req.body.userName,
      userpass: hashedPassword,
      //userpass:req.body.userpass,
      useremail: req.body.useremail,
    };

    //console.log("this is the hash possword" + hashedPassword);
    user.push(objUser);
    saveUserData(user);
    res.send({ success: true, msg: "User data added successfully" });
  }};
  const login = (req, res, next) => {
    const user = getUserData();
    const userParams = req.params.useremail;
   const foundUser = user.find(user => user.useremail === userParams);
   const userparams = req.params.userpass;
    if (foundUser) { 
     //const match =user.find(user=>user.userpass ===userparams)
     const match = bcrypt.compare(userparams,foundUser.userpass)
     if (match) {
      const jsonData = fs.readFileSync("user/user.json")
      const users = JSON.parse(jsonData)
      const userDetails = users.filter(user=>user.useremail === userParams )
      res.send(userDetails)
      }
         else return res.status(401).json({ error: "Mot de passe incorrect !" });
   }
     else {
    return res.status(401).json({ error: "utilisateur n'existe pas" });
  }
  };
//read the user data from json file
const saveUserData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("user/user.json", stringifyData);
};
//get the user data from json file
const getUserData = () => {
  const jsonData = fs.readFileSync("user/user.json");
  return (users = JSON.parse(jsonData));
};
module.exports = {
  register,
  login,
};
