import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

let redisClient = redis.createClient("redis://redis:6379");//TODO change where this port comes from

redisClient.on("error", function(err) {
    console.error("here");
    throw new Error(err);
});


module.exports = redisClient;
