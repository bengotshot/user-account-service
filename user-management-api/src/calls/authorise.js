import request from 'superagent';

let authorise = (email, session)=> {
    return request.post('http://user-authorisation-api:8081/user/auth/auth')
        .send({email, session})
        .set('Accept', 'application/json');
};

export default authorise;
