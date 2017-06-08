import Calculator from '../src/calc.js';

describe("Calculator Spec", function() {
    it("should subtract two and two and get four as a result", function() {

      var calculator = new Calculator();
      var result = calculator.subtract(2, 2);
      expect(result).to.be.equal(0);

    });
});
