const {Schema, model} = require('mongoose')

const User = new Schema({
    login:{type:String, require:true, unique: true},
    password:{type:String, require:true},
    roles:[{type:String, require:true, ref:'Role'}]
})

module.exports = model('User', User)