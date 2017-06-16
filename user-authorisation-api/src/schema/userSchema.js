let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date,
    roles: Array
});

let User = mongoose.model('User', userSchema);

module.exports = User;
