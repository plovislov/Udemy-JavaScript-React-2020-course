describe('camelize', function() {

  it('translates "background-color" to "backgroundColor"', function() {
    assert.equal(camelize('background-color'), 'backgroundColor');
  });

  it('translates "list-style-image" to "listStyleImage"', function() {
    assert.equal(camelize('list-style-image'), 'listStyleImage');
  });

  it('translates "-webkit-transition" to "WebkitTransition"', function() {
    assert.equal(camelize('-webkit-transition'), 'WebkitTransition');
  });
});