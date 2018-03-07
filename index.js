const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require('./config/keys');
require('./model/User');


mongoose.connect(keys.mongoKey);
const app = express();

app.use(bodyParser.json());
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
