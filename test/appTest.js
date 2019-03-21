const assert = require('chai').assert;
const app = require ('../app');

describe('App', function(){


    it('should pass example', function(){

            assert.deepEqual(app.gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
    });

   
});

