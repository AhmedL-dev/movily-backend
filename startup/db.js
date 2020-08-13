const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  // console.log(process.env);
  // const db = 'mongodb+srv://vidlyuser:1234@vidly.tbi22.azure.mongodb.net/vidly?retryWrites=true&w=majority'
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
