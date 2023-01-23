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
            await User.updateOne({_id: user._id}, {link: activationLink})
            await mailService.setActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
            return res.json({link: activationLink, message: `Лист на пошту ${user.email} відправлено!`})
        } catch (e) {
            console.log(e.message)
            return  res.status(500).json({message: 'Помилка при відправленні листа.'})
        }
    }
    async activateAccount (req, res) {
        try {
            const {link} = req.params
            await User.updateOne({link}, {isActivated: true})
            return res.send('ok')
        } catch (e) {
            console.log(e.message)
            return  res.status(500).json({message: 'Помилка сервера.'})
        }
    }
}

module.exports = new ActivateController()
