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
require('./routes/paymentRoutes')(app);

const PORT = process.env.PORT || 5000;

if( process.env.NODE_ENV == 'production'){

	app.use(express.static('client/build'));

	const path = require('path');

	app.get('*', (req, res) => {

		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

	})
}

app.listen(PORT);
