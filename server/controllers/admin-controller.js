const User = require('../models/user-model')

class AdminController {
    async getUsers (req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e.message)
            res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
    async getUser (req, res) {
        try {
            const nickname = req.params.nickname

            let users
            if(nickname.includes('@')){
                users = await User.findOne({email: nickname})
            } else {
                users = await User.findOne({login: nickname})
            }

            if(!users) {
                res.status(400).json({message: 'Такого користувача не існує.'})
            }
            res.json(users)
        } catch (e) {
            console.log(e.message)
            res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
    async deleteUser (req, res) {
        try {
            const nickname = req.params.nickname

            let users
            if(nickname.includes('@')){
                users = await User.findOne({email: nickname})
            } else {
                users = await User.findOne({login: nickname})
            }

            if(!users) {
                res.status(400).json({message: 'Такого користувача не існує.'})
            }
            res.json(users)
        } catch (e) {
            console.log(e.message)
            res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
}
module.exports = new AdminController()