const calculator = require('../calculator.js');

describe('calculator', () => {
  describe('add', () => {
    it('adds two number', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });
  });
});
