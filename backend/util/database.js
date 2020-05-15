const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dotenv = require("dotenv");

dotenv.config();

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ekpkv.mongodb.net/test?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log("Connected to mongo");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
