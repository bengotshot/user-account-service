import redis from '../redis/redis';

let authorise = (req, res)=> {
    redis.authorise(req.body.email, req.body.session).then(()=> {
        res.sendStatus(200)
    }, ()=> {
        res.sendStatus(400)
    });
};

export default authorise;
