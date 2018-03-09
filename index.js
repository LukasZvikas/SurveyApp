const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require('./config/keys');

require('./services/passport');
require('./model/User');


mongoose.connect(keys.mongoKey);
const app = express();

app.use(bodyParser.json());
require("./routes/authRoutes")(app);
require('./Routes/paymentRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
