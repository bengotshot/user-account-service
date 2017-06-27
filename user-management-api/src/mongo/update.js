import User from '../schema/userSchema';

let update = (request)=> {
    let properties = {};
    let email = request.email;
    if(request.firstName) properties.firstName = request.firstName;
    if(request.lastName) properties.lastName = request.lastName;
    properties.updatedAt = new Date();
    console.log(properties);

    return User.findOneAndUpdate(email, {
        $set: properties
    }).then((obj)=>{
        console.log(obj);
        return 'asd';
    }, (obj)=>{
        console.log(obj);
        return 'asd';
    });
};

export default update;
