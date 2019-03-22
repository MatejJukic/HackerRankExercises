const assert = require('chai').assert;
const app = require ('../app');

describe('App', function(){


    it('should pass example', function(){

            assert.deepEqual(app.countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]), [1, 1]);

    });

   
});

