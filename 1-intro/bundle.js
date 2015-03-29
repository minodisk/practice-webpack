/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var module0 = __webpack_require__(1);
	console.log(module0.foo);
	console.log(module0.bar());

	var module1 = __webpack_require__(2);
	console.log(module1.foo);
	console.log(module1.bar());

	var module2 = __webpack_require__(3);
	console.log(module2());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	exports.foo = 'module0.foo';
	exports.bar = function () {
	  return 'module0.bar';
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  foo: 'module1.foo',
	  bar: function () {
	    return 'module1.bar';
	  }
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function () {
	  return 'module2';
	};


/***/ }
/******/ ]);