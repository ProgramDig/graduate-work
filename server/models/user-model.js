const {Schema, model} = require('mongoose')

const User = new Schema({
    login:{type:String, unique: true},
    password:{type:String},
    roles:[{type:String, ref:'Role'}]
})

module.exports = model('User', User)