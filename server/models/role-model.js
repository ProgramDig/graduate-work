const {Schema, model} = require('mongoose')

const Role = new Schema({
    value:{type:String, require: true, unique: true, default:'USER'}
})

module.exports = model('Role', Role)