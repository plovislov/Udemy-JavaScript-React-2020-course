describe('pow', function() {

  describe('raises x in pow 3', function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`raises ${x} in power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let i = 1; i < 5; i++) {
      makeTest(i);
    }
  });

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });


});