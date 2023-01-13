const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const {generateAccessToken} = require('../services/token-service')
const Role = require('../models/role-model')
const User = require('../models/user-model')

class AuthController {
    async registration(req, res) {
        try {
            const validateErrors = validationResult(req)
            if(!validateErrors.isEmpty()) {
                return res.status(400).json({message: 'Помилка при реєстрації', validateErrors})
            }
            const {login, password} = req.body
            const candidate = await User.findOne({login})
            if(candidate) {
                return res.status(400).json({message: 'Цей користувач вже створений.'})
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const userRole = new Role({value: "USER"})
            const user = new User({login, password: hashPassword, roles: [userRole.value]})
            await user.save()

            return  res.status(200).json({message:`Користувач з логіном ${login} створений!`})
        } catch (e) {
            console.log(e)
            return  res.status(400).json({message: 'Помилка при реєстрації.'})
        }
    }

    async login(req, res) {
        try {
            const {login, password} = req.body
            const user = await User.findOne({login})
            if(!user) {
                return res.status(400).json({message: `Користувача з логіном ${login} не існує.`})
            }

            const validPassword = await bcrypt.compare(password, user.password)
            if(!validPassword) {
                return res.status(400).json({message: `Введений неправельний пароль`})
            }

            const token = generateAccessToken(user._id, user.roles)
            return res.status(200).json(token)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Промилка при вході.'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AuthController()