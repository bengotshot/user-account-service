import User from '../schema/userSchema';

let retrieve = (email) => {
    return User.findOne({email})
};

export default retrieve;
