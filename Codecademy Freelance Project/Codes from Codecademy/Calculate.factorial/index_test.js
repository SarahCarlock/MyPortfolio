var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('error: will testif the output of 5! is 120', () => {
      const expectedResult = 120;
      const actualResult = Calculate.factorial(5);
      assert.equal(actualResult, expectedResult);
    });
    it('error: test if the output of 3! is 6', () => {
      const expectedResult = 6;

      const actualResult = Calculate.factorial(3);
      assert.equal(actualResult, expectedResult);
    });
    it('error: returns 1 when you pass in 0', () => {
      const expectedResult = 1;
      const actualResult = Calculate.factorial(0);
      assert.equal(actualResult, expectedResult);
    });

  });
});