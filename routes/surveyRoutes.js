const passport = require("passport");
const requireAuth = passport.authenticate("jwt", {session: false});
const requireCredits = require("../middlewares/requireCredits");
module.exports = (app) => {
	app.post("/newSurvey", requireAuth, (req, res) => {
		const {title, subject, body, recipients} = req.body;
		const newSurvey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map(email => {email: email.trim()});
			dateSent: Date.now()
		})
	})
}