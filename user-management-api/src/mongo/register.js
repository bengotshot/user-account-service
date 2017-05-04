import bcrypt from 'bcrypt';
import User from '../schema/userSchema';
const saltRounds = 10;

let register = (username, password)=> {
    return bcrypt.hash(password, saltRounds)
        .then((hash)=> {
            return User({
                username,
                email: username,
                passwordHash: hash
            }).save();
        })
};

export default register;
