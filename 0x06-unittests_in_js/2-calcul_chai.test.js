const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the correct sum of two rounded numbers', () => {
    const result = calculateNumber('SUM', 2.4, 3.5);
    expect(result).to.equal(6);
  });

  it('should return the correct result when subtracting two rounded numbers', () => {
    const result = calculateNumber('SUBTRACT', 5, 2);
    expect(result).to.equal(3);
  });

  it('should return the correct result when dividing two rounded numbers', () => {
    const result = calculateNumber('DIVIDE', 10, 2);
    expect(result).to.equal(5);
  });

  it('should return "Error" when dividing by 0', () => {
    const result = calculateNumber('DIVIDE', 10, 0);
    expect(result).to.equal('Error');
  });

  it('should throw an error for an invalid type', () => {
    expect(() => {
      calculateNumber('INVALID_TYPE', 1, 2);
    }).to.throw(Error);
  });
});
