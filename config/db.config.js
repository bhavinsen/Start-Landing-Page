require("dotenv").config();
const mongoose = require("mongoose");
const connectionURL = process.env.connectionURL;

mongoose.Promise = global.Promise;
mongoose.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("MongoDB connected...");
    }
  }
);
