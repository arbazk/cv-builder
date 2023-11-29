const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = mongoose.connection;
connect.on("connected", () => {
  console.log("connected to mongoDB");
});
connect.on("error", (err) => {
  console.log("error connecting to mongoDB", err);
});
