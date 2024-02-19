const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://omer:Pasha1998*@cluster0.mcyghnf.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("Connected!");
      callback(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = mongoConnect;
