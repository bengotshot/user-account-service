import bcrypt from 'bcrypt';
import User from '../schema/userSchema';

let login = (email, password) => {
    return User.findOne({email}).then(({passwordHash})=>{
        bcrypt.compare(password, passwordHash);
    });
};

export default login;
