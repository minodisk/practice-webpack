var module0 = require('./module0');
console.log(module0.foo);
console.log(module0.bar());

var module1 = require('./module1');
console.log(module1.foo);
console.log(module1.bar());

var Module2 = require('./module2');
module2 = new Module2();
console.log(module2.foo);
console.log(module2.bar());
