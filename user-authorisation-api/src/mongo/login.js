import bcrypt from 'bcrypt';
import User from '../schema/userSchema';

let login = (username, password)=> {
    return User.findOne({username})
        .then(({passwordHash})=> {
            return bcrypt.compare(password, passwordHash);
        });
};

export default login;
