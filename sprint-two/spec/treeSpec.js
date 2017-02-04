describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "removeFromParent", "contains", "traverse" and properties named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children['5'].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children['5'].addChild(6);
    expect(tree.children['5'].children['6'].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children['5'].addChild(7);
    tree.children['5'].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should return false for a relationship that was removed', function() {
    tree.addChild(5);
    tree.children['5'].addChild(6);
    expect(tree.children['5'].children['6'].value).to.equal(6);
    tree.children['5'].removeFromParent(6);
    expect(tree.children['5'].children['6']).to.be.undefined;
  });

  it('should perform a callback on every node in the tree', function() {
    var array = [];
    var func = function (value) { array.push(value); };
    tree.addChild(1);
    tree.addChild(3);
    tree.children['1'].addChild(2);
    tree.children['3'].addChild(4);
    tree.traverse(func);
    expect(array).to.eql([1, 2, 3, 4]);
  });

});
