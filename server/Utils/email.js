const nodeMailer = require("nodemailer")
const sendEmail = async ({ sendTo, subject, html }) => {
    try {
        const transporter = nodeMailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL,
                pass: process.env.GMAIL_PASSWORD
            },
        })
        await transporter.sendMail({
            from: process.env.GMAIL,
            to: sendTo,
            subject,
            html
        });
    } catch (err) {
        console.log({ err })
    }
}

module.exports = {
    sendEmail
}