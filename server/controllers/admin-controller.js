const User = require('../models/user-model')

class AdminController {
    async getUsers(req, res) {
        try {
            const users = await User.find()
            return  res.json(users)
        } catch (e) {
            console.log(e.message)
            return  res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }

    async getUser(req, res) {
        try {
            const nickname = req.params.nickname

            let users
            if (nickname.includes('@')) {
                users = await User.findOne({email: nickname})
            } else {
                users = await User.findOne({login: nickname})
            }

            if (!users) {
                return res.status(400).json({message: 'Такого користувача не існує.'})
            }
            return res.json(users)
        } catch (e) {
            console.log(e.message)
            return  res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }

    async deleteUser(req, res) {
        try {
            const nickname = req.params.nickname
            let deleteResult

            if (nickname.includes('@')) {
                deleteResult = await User.remove({email: nickname})
            } else {
                deleteResult = await User.remove({login: nickname})
            }

            if (deleteResult.deletedCount === 0) {
               return res.status(400).json({message: 'Такого користувача не існує.'})
            }

            return res.status(200).json({message: `Користувача ${nickname} видалено.`})
        } catch (e) {
            console.log(e.message)
            res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
}

module.exports = new AdminController()