import redisClient from './db';
const config = { expiry: 30};//TODO change where config is retrieved from
const expiry = config.expiry * 60;


let authorise = (email, session)=> {
    return redisClient.hgetallAsync(session)
        .then((res)=>{
            if(!res || res.email !== email){
                return new Promise( (resolve, reject) => reject());
            } else {
                return redisClient.expireAsync(session, expiry);
            }
        });

};


export default authorise;
