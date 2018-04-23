const _ = require("lodash");
const pathParser = require("path-parser");
const { URL } = require("url");
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", { session: false });
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = require("../model/Surveys");
const User = require("../model/User");

module.exports = app => {
  app.get("/api/surveys", requireAuth, async (req, res) => {
    const Surveys = await Survey.find({ _createdBy: req.user.id }).select({
      recipients: false
    });

    res.send(Surveys);
  });

  app.post("/api/surveys/localtunnel", (req, res) => {
    const p = new pathParser("/api/surveys/:surveyId/:choice");

    _.chain(req.body)
      .map(event => {
        //takes only the pathname of the url, does not include the domain
        const pathname = new URL(event.url).pathname;
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
      .each(({ email, surveyId, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true }
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  app.post("/api/surveys/delete", requireAuth, async (req, res) => {
    const id = req.body._id;

    const userID = req.user._id;

    const deleteSurvey = await Survey.findByIdAndRemove({ _id: id });

    try {
      const Surveys = await Survey.find({ _createdBy: userID });

      res.send(Surveys);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post(
    "/api/surveys/send",
    requireAuth,
    requireCredits,
    async (req, res) => {
      const { title, subject, body, recipients } = req.body;
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
