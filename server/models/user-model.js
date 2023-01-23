const {Schema, model} = require('mongoose')

const User = new Schema({
    email:{type:String, require:true, unique: true},
    login:{type:String, require:true, unique: true},
    fullName:{type:String, require:true},
    password:{type:String, require:true},
    role:{type:String, require:true, ref:'Role'},
    isActivated:{type:Boolean, require:true, default:false},
    link:{type:String, default: '', unique: true}
})

module.exports = model('User', User)