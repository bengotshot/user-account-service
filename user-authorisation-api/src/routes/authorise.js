import redis from '../redis/redis';

let authorise = (req, res)=> {
    redis.authorise(req.body.username, req.body.key).then(()=> {
        res.sendStatus(200)
    }, ()=> {
        res.sendStatus(400)
    });
};

export default authorise;
