const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  // const db = config.get("db");

  const username = "ahmed123";
  const password = "ahmed123";
  const dbName = "test";

  const db = `mongodb://${username}:${password}@movily-shard-00-00.frolq.mongodb.net:27017,movily-shard-00-01.frolq.mongodb.net:27017,movily-shard-00-02.frolq.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-jckp60-shard-0&authSource=admin&retryWrites=true&w=majority`;

  mongoose
    .connect(db)
    .then(() => winston.info(`Connected to ${db}...`))
    .catch((err) => {
      console.log("Not Connected to Database ERROR! ", err);
    });

  //   const MongoClient = require("mongodb").MongoClient;
  //   // const uri =
  //   //   "mongodb+srv://ahmed123:ahmed123@movily.frolq.mongodb.net/test?retryWrites=true&w=majority";

  //   const client = new MongoClient(uri, { useUnifiedTopology: true });

  //   await client.connect((err) => {
  //     const collection = client.db("test").collection("devices");
  //     // perform actions on the collection object
  //     client.close();
  //   });
  //   winston.info(`Connected to ${uri}...`);
};
