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
const showuser = (req, res) => {
  const { getUser } = req.body;

  userModel
    .findOne({ userName: getUser })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const showusers = (req, res) => {
  const { getUsers } = req.body;

  userModel
    .find({ userName: getUsers })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateone = (req, res) => {
  const { upu } = req.params

  userModel
    .updateOne({ id: upu })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const DelOne = (req, res) => {
  const { del } = req.params

  userModel
    .deleteOne({ id: del })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { createUser, showuser, showusers,updateone ,DelOne};
