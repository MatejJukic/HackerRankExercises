const assert = require('chai').assert;
const app = require ('../app');

describe('App', function(){

    it('should return Hello World', function(){

            assert.equal(app(), "Hello World");

    });
});