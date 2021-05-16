const mongoose = require('mongoose');
const Schema = mongoose.Schema
 
const usersSchema = new mongoose.Schema(

{
    nom : String,
    descrimination : Number,
    password : String,
    cours: [{ type: Schema.Types.ObjectId, ref: 'cours' }]
});

const Users = mongoose.model("Users",usersSchema)
module.exports = Users;