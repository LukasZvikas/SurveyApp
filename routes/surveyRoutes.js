const _ = require("lodash");
const pathParser = require("path-parser");
const { URL } = require("url");
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", { session: false });
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = require('../model/Surveys');

module.exports = app => {
  app.post("/api/surveys/localtunnel", (req, res) => {
    const p = new pathParser("/api/surveys/:surveyId/:choice");

     _.chain(req.body)
      .map(event => {
        //takes only the pathname of the url, does not include the domain
        const pathname = new URL(event.url).pathname;
        const pathname2 = new URL(event.url);
        const match = p.test(pathname);

        if (match) {
          return {
            email: event.email,
            surveyId: match.surveyId,
            choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({email, surveyId, choice}) => {

        console.log(email, choice);
         Survey.updateOne({
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false}        
            }
        }, {

        $inc: { [choice]: 1},
        $set: { 'recipients.$.responded': true}
        }).exec();
      })
      .value();

   
    res.send({});
   
  });
  app.post(
    "/api/surveys/send",
    requireAuth,
    requireCredits,
    async (req, res) => {
      const { title, subject, body, recipients } = req.body;
      console.log(recipients);
      const newSurvey = new Survey({
        title,
        subject,
        body,
        _createdBy: req.user.id,
        recipients: recipients
          .split(",")
          .map(email => ({ email: email.trim() })),
        dateSent: Date.now()
      });
      const mailer = new Mailer(newSurvey, surveyTemplate(newSurvey));
      try {
        await mailer.send();
        await newSurvey.save();

        req.user.credits -= 1;
        const updatedUser = await req.user.save();
        res.send(JSON.stringify(updatedUser.credits));
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
};
