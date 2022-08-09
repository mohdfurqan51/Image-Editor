const {Schema, model} = require('../connection');

const schemaObject =  new Schema({
    firstname : String,
    lastname : String,
    age : Number,
    email : String,
    password: String,
})

module.exports = model('users', schemaObject);