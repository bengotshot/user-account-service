import mongo from '../mongo/mongo.js'

let register = (req, res)=> {

    mongo.register(req.body.email, req.body.password).then(()=>{
        res.sendStatus(200);
    }, (err)=>{
        console.log(err);
        res.sendStatus(500);
    });
};

export default register;
