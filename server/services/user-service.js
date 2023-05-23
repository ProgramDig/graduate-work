import {v4 as uuidv4} from 'uuid';
const bcrypt = require('bcrypt')
const User = require('../models/user-model')
const Role = require('../models/role-model')

class UserService {
    async createUser (email, login, password, rePassword, fullName, role) {
        const candidateLogin = await User.findOne({login})
        if(candidateLogin) {
            throw new Error({status: 400, message: 'Користувач з таким лоліном вже створений.'})
        }
        const candidateEmail = await User.findOne({email})
        if(candidateEmail) {
            throw new Error({status: 400, message: 'Користувач з такою поштою вже створений.'})
        }
        if (password !== rePassword) {
            throw new Error({status: 400, message: 'Паролі не співпадають.'})
        }
        let uniq_key = await User.findOne({uuid4()});
        while(uniq_key) {
            uniq_key = await User.findOne({uuid4()});
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const {value} = new Role({value: role})
        const user = new User({email, fullName, login, password: hashPassword, role: value, uniq_key: uniq_key})
        return await user.save()
    }
    async updateUser () {}
    async deleteUser () {}
}

module.exports = new UserService()
