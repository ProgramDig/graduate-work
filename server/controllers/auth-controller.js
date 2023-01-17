const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const {generateAccessToken} = require('../services/token-service')
const Role = require('../models/role-model')
const User = require('../models/user-model')

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json(
                    {message: 'Помилка при реєстрації. Некоректно введені дані.', errors: errors.array()}
                )
            }

            const {email, login, password, fullName, role} = req.body

            const candidate = await User.findOne({login})
            if(candidate) {
                return res.status(400).json({message: 'Цей користувач вже створений.'})
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const {value} = new Role({value: role})
            const user = new User({email, fullName, login, password: hashPassword, role: value})
            await user.save()

            return  res.status(200).json({message:`Користувач створений!`})
        } catch (e) {
            console.log(e.message)
            return  res.status(500).json({message: 'Помилка при реєстрації.'})
        }
    }

    async login(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Помилка при вході в систему', errors: errors.array()})
            }

            const {nickname, password} = req.body // nickname - login or email

            let user

            if(nickname.includes('@')) {
                user = await User.findOne({email: nickname})
            } else {
                user = await User.findOne({login: nickname})
            }

            if(!user) {
                return res.status(400).json({message: `Користувача '${nickname}' не існує.`})
            }

            const validPassword = await bcrypt.compare(password, user.password)
            if(!validPassword) {
                return res.status(400).json({message: `Введений неправельний пароль`})
            }

            const role = user.role
            console.log(role)

            const token = generateAccessToken(user._id, user.role)

            return res.status(200).json({token, user: user._id, role: user.role})
        } catch (e) {
            console.log(e.message)
            res.status(500).json({message: 'Промилка при вході.'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e.message)
            res.status(500).json({message: 'Невідома помилка.'})
        }
    }
}

module.exports = new AuthController()