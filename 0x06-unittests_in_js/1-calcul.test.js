const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum of two rounded numbers', () => {
    const result = calculateNumber('SUM', 2.4, 3.5);
    assert.strictEqual(result, 6);
  });

  it('should return the correct result when subtracting two rounded numbers', () => {
    const result = calculateNumber('SUBTRACT', 5, 2);
    assert.strictEqual(result, 3);
  });

  it('should return the correct result when dividing two rounded numbers', () => {
    const result = calculateNumber('DIVIDE', 10, 2);
    assert.strictEqual(result, 5);
  });

  it('should return "Error" when dividing by 0', () => {
    const result = calculateNumber('DIVIDE', 10, 0);
    assert.strictEqual(result, 'Error');
  });

  it('should throw an error for an invalid type', () => {
    assert.throws(() => {
      calculateNumber('INVALID_TYPE', 1, 2);
    }, Error);
  });
});
