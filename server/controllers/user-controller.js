const bcrypt = require("bcrypt");
const User = require("../models/user-model");

class UserController {
    async updatePassword(req, res) {
        try {
            const {id, oldPassword, rePassword, newPassword} = req.body

            if (rePassword !== oldPassword) {
                return res.status(400).json({message: 'Поля старого пароля та повтора пароля різні.'})
            }
            if(oldPassword === newPassword) {
                return res.status(400).json({message: 'Старий та новий паролі одинакові.'})
            }

            const user = await User.findOne({_id: id})
            if (!user) {
                return res.status(400).json({message: 'Такого користувача не існує.'})
            }

            const validPassword = await bcrypt.compare(oldPassword, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'Паролі не співпадають.'})
            }

            const hashPassword = await bcrypt.hash(newPassword, 3)
            const updateResponse = await User.updateOne({_id: id}, {password: hashPassword})
            if (updateResponse.modifiedCount !== 1) {
                return res.status(400).json({message: 'Пароль користувача не оновлено.'})
            }
            return res.json({updateResponse, message: `Пароль користувача ${id} оновлено.`})
        } catch (e) {
            console.log(e.message)
            return res.status(500).json({message: 'Помилка при заміні пароля.'})
        }
    }
}

module.exports = new UserController()