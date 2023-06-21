// const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;

// const mongoConnect = (callback: Function) => {
//   MongoClient.connect(
//     "mongodb+srv://ck94422:GTH0x4R3KqXyARYf@cluster0.lnomrbs.mongodb.net/"
//   )
//     .then((client: any) => {
//       console.log("connected");
//       callback(client);
//     })
//     .catch((err: any) => {
//       console.log(err);
//     });
// };

// module.exports = mongoConnect;

import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://ck94422:GTH0x4R3KqXyARYf@cluster0.lnomrbs.mongodb.net/";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("Database is Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
