const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    if (req.method === "POST") {
      const { recipientEmail, subject, text } = req.body;
      const msg = {
        to: recipientEmail,
        from: "sahmed@willamette.edu", // Replace with your own email address
        subject,
        text,
      };
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent successfully" });
    } else {
      res.status(400).json({ error: "Invalid request method" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
