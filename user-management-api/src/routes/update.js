import calls from '../calls/calls'
import mongo from '../mongo/mongo'

let update = (req, res)=> {
    calls.authorise(req.body.email, req.body.session).then((response)=>{
        if(!response || response.status !== 200){
            res.sendStatus(401);
        } else {
            mongo.update(req.body).then(()=>{
                res.sendStatus(200);
            }, ()=>{
                res.sendStatus(500)
            });
        }
    }, ()=> {
        res.sendStatus(500);
    });

};

export default update;

