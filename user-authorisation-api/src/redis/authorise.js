import redisClient from './db';
const config = { expiry: 30};//TODO change where config is retrieved from
const expiry = config.expiry * 60;


let authorise = (username, key)=> {
    return redisClient.hgetallAsync(key)
        .then((res)=>{
            if(res.username !== username){
                return new Promise( ({reject}) => reject());
            } else {
                return redisClient.expireAsync(key, expiry);
            }
        });
};


export default authorise;

