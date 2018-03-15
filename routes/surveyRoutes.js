const passport = require("passport");
const requireAuth = passport.authenticate("jwt", {session: false});
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = require("../model/Surveys");

module.exports = (app) => {
	app.post("/api/surveys", requireAuth, requireCredits, async (req, res) => {
		const {title, subject, body, recipients} = req.body;
		const newSurvey = new Survey({
			title,
			subject,
			body,
			_createdBy: req.user.id,
			recipients: recipients.split(',').map(email => {email: email.trim()}),
			dateSent: Date.now()
		})

		const mailer = new Mailer(newSurvey, surveyTemplate(newSurvey));
		await mailer.send();
	})
}


 