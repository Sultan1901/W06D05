const { find } = require("./../../DB/models/userSchema");
const userModel = require("./../../DB/models/userSchema");
const createUser = (req, res) => {
  const { name, password, phoneNumber } = req.body;
  const newUser = new userModel({
    name,
    password,
    phoneNumber,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const Alluser = (req, res) =>{
  read1
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = { createUser,Alluser };

// const anotherFunc = (req, res) =>{
//   someModel
//     .find({})
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };
