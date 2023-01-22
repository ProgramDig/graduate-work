const User = require("../models/user-model");
const uuid = require("uuid");
const mailService = require("../services/mail-service");

class ActivateController {
    async sendMessage (req, res) {
        try {
            const {email} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: 'Такого користувача не існує.'})
            }
            const activationLink = uuid.v4()
            const result = await mailService.setActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
            return res.json(user, "result -", result)
        } catch (e) {
            console.log(e.message)
            return  res.status(500).json({message: 'Помилка при відправленні листа.'})
        }
    }
    async activateAccount (req, res) {
        try {
            const query = req.query
            console.log(query)
            return res.send('ok')
        } catch (e) {
            console.log(e.message)
            return  res.status(500).json({message: 'Помилка при відправленні листа.'})
        }
    }
}

module.exports = new ActivateController()
