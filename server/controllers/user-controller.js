const bcrypt = require("bcrypt");
const User = require("../models/user-model");

class UserController {
    async updatePassword(req, res) {
        try {
            const {id, rePassword, oldPassword, newPassword} = req.body

            if (rePassword !== oldPassword) {
                return res.status(200).json({message: 'Старий та новий паролі не співпадають.'})
            }

            const user = await User.findOne({_id: id})
            if (!user) {
                return res.status(200).json({message: 'Такого користувача не існує.'})
            }
            console.log(user)
            const validPassword = await bcrypt.compare(oldPassword, user.password)
            if (!validPassword) {
                return res.status(200).json({message: 'Паролі не співпадають.'})
            }
            const hashPassword = await bcrypt.hash(newPassword, 3)
            const updateResponse = await User.update({id}, {password: hashPassword})
            return res.json(updateResponse)
        } catch (e) {
            console.log(e.message)
            return res.status(500).json({message: 'Помилка при заміні пароля.'})
        }
    }
}

module.exports = new UserController()