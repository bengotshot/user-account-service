import redis from '../redis/redis';
let session = redis.session;

let createSession = (req, res, next)=> {
    session(req.body.email).then((obj)=> {
       res.json(obj);
    }, (err)=> {
        res.sendStatus(500);
        console.error(err);
    });
};

export default createSession;
