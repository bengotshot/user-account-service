import redisClient from './db';
import {randomBytes} from 'crypto';
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
    return {
        key: randomBytes(12).toString('hex'),
        data : {
            username,
            expiryTime: expiry
        }
    };
};

export default session;
