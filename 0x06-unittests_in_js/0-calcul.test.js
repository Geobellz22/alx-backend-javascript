const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the correct sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-0.4, -0.6), -1); // Updated expected result
  });

  it('should return NaN if any of the arguments is not a number', function() {
    assert(isNaN(calculateNumber('abc', 2.6)));
  });
});
