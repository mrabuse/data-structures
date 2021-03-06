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
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should count number of instances of added values', function () {
    set.add('Kristin Bell');
    set.add('Kristin Bell');
    expect(set._storage['Kristin Bell']).to.equal(2);
  });

  it('should reduce the number of instances of a value when it is removed', function () {
    set.add('Meryl Streep');
    set.add('Meryl Streep');
    set.remove('Meryl Streep');
    expect(set._storage['Meryl Streep']).to.equal(1);
  });

  it('should remove a value when the number of its instances becomes zero', function () {
    set.add('Fozzie Bear');
    expect(set.contains('Fozzie Bear')).to.equal(true);
    set.remove('Fozzie Bear');
    expect(set.contains('Fozzie Bear')).to.equal(false);
  });

  it('should handle numbers, booleans, objects, and arrays', function () {
    set.add(5);
    expect(set.contains(5)).to.equal(true);
    set.remove(5);
    expect(set.contains(5)).to.equal(false);
    set.add(true);
    expect(set.contains(true)).to.equal(true);
    set.remove(true);
    expect(set.contains(true)).to.equal(false);
    set.add({cat: 'hat'});
    expect(set.contains({cat: 'hat'})).to.equal(true);
    set.remove({cat: 'hat'});
    expect(set.contains({cat: 'hat'})).to.equal(false);
    set.add([1, 2, 3]);
    expect(set.contains([1, 2, 3])).to.equal(true);
    set.remove([1, 2, 3]);
    expect(set.contains([1, 2, 3])).to.equal(false);
  });

});
