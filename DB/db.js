const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const DB = process.env.DB;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(`mongodb://localhost:27017/${DB}`, options).then(
  () => {
    console.log("DB Ready To INJECT");
  },
  (err) => {
    console.log(err);
  }
);

