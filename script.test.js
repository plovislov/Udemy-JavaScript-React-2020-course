describe('sumSalaries', function() {

  it('sums salaries in test object equal 390', function() {
    let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130,
    };
    assert.equal(sumSalaries(salaries), 390);
  });

  it('returns 0 if object is empty', function() {
    let salaries = {};

    assert.equal(sumSalaries(salaries), 0);
  });

});