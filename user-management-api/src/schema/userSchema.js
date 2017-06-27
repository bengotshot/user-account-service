let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
});

let User = mongoose.model('User', userSchema);

module.exports = User;
