const sendgrid = require("sendgrid");
const { mail } = sendgrid;
const keys = require("../config/keys");

class Mailer extends mail.Mail {
  constructor({ recipients, subject }, content) {
    super();
    this.sendgridApi = sendgrid(keys.sendgridKey);
    this.fromEmail = new mail.Mail("lzvikas1@gmail.com");
    this.subject = subject;
    this.recipients = this.formatAddresses(recipients);
    this.body = new mail.Content("text/html", content);

    this.addContent(content);
    this.addClickTracking();
  }

  formatAddresses(emails) {
    return emails.map(({ email }) => {
      return new mail.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addEmails() {
    const personalization = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalization.addTo(recipient);
    });
    this.addPersonalization(personalization);
  }

  async send() {
  	const req = this.sendgridApi.emptyRequest({
  		method: 'POST',
  		path: '/v3/mail/send',
  		body: this.toJSON();
  	})

  	const res = await this.sendgridApi.API(req);
  	return res;

  }

}

module.exports = Mailer;
