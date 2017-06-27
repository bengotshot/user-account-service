import mongo from '../mongo/mongo.js'

let register = (req, res)=> {

    mongo.register(req.body.email, req.body.password).then(()=>{
        res.sendStatus(200);
    }, (err)=>{
        console.error(err);
        if(err && err.code === 11000) {
            res.sendStatus(409)
        } else{
            res.sendStatus(500);
        }

    });
};

export default register;
