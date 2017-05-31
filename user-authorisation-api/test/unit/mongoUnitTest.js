import { assert, expect } from 'chai';
import { describe, it } from 'mocha';
import mongo from '../../src/mongo/mongo';

describe('Mongo', () => {
    it('should exist', ()=> {
        expect(mongo).to.exist;
    });
    describe('login', ()=> {
        it('Mongo.js should export a login function', ()=> {
            expect(mongo.login).to.exist;
        });
    });
});




