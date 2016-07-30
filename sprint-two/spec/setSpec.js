describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set.add(8);
    set.add({key: 'test'});
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(8)).to.equal(true);
    expect(set.contains({key: 'test'})).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.add(9);
    set.remove('Mel Gibson');
    set.remove(9);
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(9)).to.equal(false);
  });

});
