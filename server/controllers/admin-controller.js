const {validationResult} = require("express-validator");
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
            const id = req.body.id
            const deleteResult = await User.remove({_id: id})

            if (deleteResult.deletedCount === 0) {
               return res.status(400).json({message: 'Такого користувача не існує.'})
            }

            return res.status(200).json({message: `Користувача id:${id} видалено.`, isDelete: true})
        } catch (e) {
            console.log(e.message)
            res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
    async updateOneUser (req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json(
                    {message: 'Помилка при реєстрації. Некоректно введені дані.', errors: errors.array()}
                )
            }
            const {_id ,email, login, fullName, role} = req.body
            const updateResult = await User.updateOne({_id},{email, login, fullName, role})
            if (!updateResult) {
                return res.status(400).json({message: 'Такого користувача не існує.'})
            }
            return res.status(200).json({message: `Дані користувача id:${_id} оновлено.`, isUpdate: true})
        } catch (e) {
            console.log(e.message)
            res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
}

module.exports = new AdminController()