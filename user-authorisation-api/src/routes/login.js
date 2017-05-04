import mongo from '../mongo/mongo.js'

let login = (req, res, next)=> {
    mongo.login(req.get('username'), req.get('password')).then((result)=>{
        if(result === false) {
            res.sendStatus(401)
        } else{
            next();
        }
    }, (err)=>{
        console.error(err);
        res.sendStatus(500);
    });
};

export default login;
