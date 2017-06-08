import Add from '../src/add.js';

describe("Calculator Spec", function() {
    it("should add two and two and get four as a result", function() {

      var result = Add(2, 2);
      expect(result).to.be.equal(4);

    });
});
