const sendgrid = require("sendgrid");
const mailerHelper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends mailerHelper.Mail {
  constructor({ recipients, subject }, content) {
    super();

    this.sendgridApi = sendgrid(keys.sendgridKey);
    this.from_email = new mailerHelper.Email("lzvikas1@gmail.com");
    this.subject = subject;
    this.recipients = this.formatAddresses(recipients);
    this.body = new mailerHelper.Content("text/html", content);

    this.addContent(this.body);
    this.addClickTracking();
    this.addEmails();
  }

  formatAddresses(emails) {
    return emails.map(({ email }) => {
      return new mailerHelper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new mailerHelper.TrackingSettings();
    const clickTracking = new mailerHelper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addEmails() {
    const personalization = new mailerHelper.Personalization();

    this.recipients.forEach(recipient => {
      personalization.addTo(recipient);
    });
    this.addPersonalization(personalization);
  }

  async send() {
  	const req = this.sendgridApi.emptyRequest({
  		method: 'POST',
  		path: '/v3/mail/send',
  		body: this.toJSON()
  	})

    console.log(req.body.personalizations)

  	const res = await this.sendgridApi.API(req);
    
  	return res;

  }

}

module.exports = Mailer;
