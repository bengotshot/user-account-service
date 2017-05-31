import chai from 'chai';
let {assert, expect} = chai;
import {spy} from 'sinon';
import { describe, it } from 'mocha';
import redis from '../../src/redis/redis';


describe('Redis', () => {
    it('should exist', ()=> {
        expect(redis).to.exist;
    });
    describe('session', ()=> {
       it('redis.js should export a login function', ()=> {
           expect(redis.session).to.exist;
       });
       it('should call return a random string of length 24', (done)=> {
           redis.session('asd').then((result)=> {
               expect(result).to.have.lengthOf(24);
               done();
               //TODO - Stub redisClient
           });
       });
    });
});




