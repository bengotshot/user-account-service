import redisClient from './db';

const config = { expiry: 30};//TODO change where config is retrieved from
const expiry = config.expiry * 60;


let session = (username)=> {
    let hash = createHash(username);

    return redisClient.hmsetAsync(hash.key, hash.data)
        .then( ()=> redisClient.expireAsync(hash.key, expiry)
        //Resolves the object with the key, rather than the default value from expireAsync (true)
        .then(() => hash.key));
};


let createHash = (username) =>{
    //Random 24 digit key
    //TODO - Use a better random generator. Math.random is not random
    let key = Math.random().toString(36).substring(2, 26);

    return {
        key,
        data : {
            username,
            expiryTime: expiry
        }
    };
};

export default session;
