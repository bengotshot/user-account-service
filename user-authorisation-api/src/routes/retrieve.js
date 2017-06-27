import mongo from '../mongo/mongo.js'
import redis from '../redis/redis';

let login = (req, res)=> {
    let email = req.get('email');
    let session = req.get('session');

    if(email && session){
        redis.authorise(email, session).then((result)=> {
            mongo.retrieve(email).then((response)=> {
                console.log(response);
                let data = {
                    email: response.email,
                    firstName: response.firstName,
                    lastName: response.lastName
                };
                res.json(data);
            });
        }, ()=> {
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(418);
    }
};

export default login;
