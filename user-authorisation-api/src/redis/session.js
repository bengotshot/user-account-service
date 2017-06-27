import redisClient from './db';
import {randomBytes} from 'crypto';
const config = { expiry: 30};//TODO change where config is retrieved from
const expiry = config.expiry * 60;


let session = (email)=> {
    let hash = createHash(email);

    return redisClient.hmsetAsync(hash.key, hash.data)
        .then( ()=> redisClient.expireAsync(hash.key, expiry)
        //Resolves the object with the key, rather than the default value from expireAsync (true)
        .then(() => hash.key));
};


let createHash = (email) =>{
    return {
        key: randomBytes(12).toString('hex'),
        data : {
            email,
            expiryTime: expiry
        }
    };
};

export default session;
