function Module2 () {}
Module2.prototype.foo = 'module2.foo';
Module2.prototype.bar = function () {
  return 'module2.bar';
};

module.exports = Module2;
