const mongoose = require("mongoose");
const { Schema } = mongoose;
const Recipients = require("./Recipients");

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [Recipients],
  _createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponse: Date,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

const Surveys = mongoose.model("surveys", surveySchema);
module.exports = Surveys;
