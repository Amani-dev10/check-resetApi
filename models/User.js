const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    fulllName: String ,
    email: String,
    phone: String,
});
module.exports = mongoose.model("User", userSchema);