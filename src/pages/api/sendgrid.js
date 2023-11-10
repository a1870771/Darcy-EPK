import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey("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");

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "darcycheatle@gmail.com", // Your email where you'll receive emails
      from: `darcycheatle@gmail.com`, // your website email address here
      subject: `${req.body.subject}`,
      html: `
      <div>Message from website: </div>
      <div>From ${req.body.fullname} (${req.body.email}):</div>
      <div>${req.body.message}</div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
