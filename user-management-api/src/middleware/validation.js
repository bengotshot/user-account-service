import validator from 'validator';

let validation = (req, res, next)=> {

    if(!req || !req.body){
        res.sendStatus(400);
    }

    if(req.body.password){
        validator.unescape(req.body.password)
    }

    if(req.body.email && !validator.isEmail(req.body.email)){
        res.sendStatus(400);

    } else if(req.body.email){
        req.body.email = validator.normalizeEmail(req.body.email);
    }

    next();
};

export default validation;
