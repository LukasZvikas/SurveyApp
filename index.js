const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const http = require("http");

require("./services/passport");
require("./model/User");
require("./model/Surveys");

mongoose.connect(keys.mongoKey);
const app = express();

app.use(bodyParser.json());
require("./routes/authRoutes")(app);
require("./routes/paymentRoutes")(app);
require("./routes/surveyRoutes")(app);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  setInterval(function() {
    http.get("https://mailsurvey.herokuapp.com/");
  }, 300000);

  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);
