const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
