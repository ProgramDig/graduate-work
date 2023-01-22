const nodemailer = require('nodemailer')

const {SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL} = process.env

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: false,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASSWORD
            }
        })
    }

    async setActivationMail(to, link) {
        await this.transporter.sendMail({
            from: SMTP_USER,
            to,
            subject: `Активація аккаунта на ${API_URL}`,
            text:'',
            html:`
                <div>
                    <h1>
                        Для активації прейдіть по посиланню
                    </h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }
}

module.exports = new MailService()