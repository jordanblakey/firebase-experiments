/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ffjs = __webpack_require__(36);

var _ffjs2 = _interopRequireDefault(_ffjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ffjs = __webpack_require__(37);

var _ffjs2 = _interopRequireDefault(_ffjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IMPORT FUNCTIONS BY CATEGORY ////////////////////////////////////////////////
// import {
//   array,
//   browser,
//   date,
//   func,
//   math,
//   string,
//   util
// } from 'ffjs'


// TEST IMPORTS ////////////////////////////////////////////////////////////////
var log = console.log;
// log(ff)
// log(array)
// log(browser)
// log(date)
// log(func)
// log(math)
// log(string)
// log(util)

// // TEST ARRAY FUNCTIONS ////////////////////////////////////////////////////////
// log('arrayGcd:', array.arrayGcd([4, 8, 12]))
// log('arrayMax:', array.arrayMax([10, 1, 5]))
// log('arrayMin:', array.arrayMin([10, 1, 5]))
// log('chunk:', array.chunk([1, 2, 3, 4, 5], 2))
// log('compact:', array.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
// log('countOccurences:', array.countOccurences([1, 1, 2, 1, 2, 3], 1))
// log('flatten:', array.flatten([1, [2], [3, [4]]]))
// log('flattenDepth:', array.flattenDepth([1, [2], [[[3], 4], 5]], 2))
// log('deepFlatten', array.deepFlatten([1, [2], [[3], 4], 5]))
// log('difference:', array.difference([1, 2, 3], [1, 2, 4]))
// log('differenceWith:', array.differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) === Math.round(b)))
// log('distictValuesOfArray:', array.distinceValuesOfArray([1, 2, 2, 3, 4, 4, 5]))
// log('dropElements:', array.dropElements([1, 2, 3, 4], n => n >= 3))
// log('dropRight:', array.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
// log('everyNth:', array.everyNth([1, 2, 3, 4, 5, 6], 2))
// log('filterNonUnique', array.filterNonUnique([1, 2, 2, 3, 4, 4, 5]))
// log('groupBy:', array.groupBy([6.1, 4.2, 6.3], Math.floor))
// log('head:', array.head([1, 2, 3]))
// log('initial:', array.initial([1, 2, 3]))
// log('initArrayRange:', array.initArrayRange(7, 3))
// log('initArrayFill:', array.initArrayFill(5, 2))
// log('init2DArray:', array.init2dArray(3, 3, 0))
// log('intersection:', array.intersection([1, 2, 3], [4, 3, 2]))
// log('last:', array.last([1, 2, 3]))
// log('mapObject:', array.mapObject([1, 2, 3, 4], a => a * a))
// log('pick:', array.pick({'a':1, 'b':'2', 'c': 3}, ['a', 'c']))
// log('pull:', array.pull(['a', 'b', 'c'], 'a'))
// log('sample:', array.sample([3, 7, 9, 11]))
// log('shuffle:', array.shuffle([1, 2, 3]))
// log('similarity:', array.similarity([1, 2, 3], [1, 2, 4]))
// log('symmetricDifference:', array.symmetricDifference([1, 2, 3], [1, 2, 4]))
// log('tail:', array.tail([1, 2, 3]))
// log('take:', array.take([1, 2, 3, 4, 5], 3))
// log('takeRight:', array.takeRight([1, 2, 3, 4, 5], 3))
// log('union:', array.union([1, 2, 3], [4, 3, 2]))
// log('without:', array.without([2, 1, 2, 3], 1, 2))
// log('zip:', array.zip(['a'], [1, 2], [true, false]))


// // TEST BROWSER FUNCTIONS //////////////////////////////////////////////////////
// // log('arrayToHtmlList:', browser.arrayToHtmlList(['item 1', 'item 2'],'myListID'))
// // log('bottomVisible:', browser.bottomVisible())
// // log('currentUrl:', browser.currentUrl())
// // log('elementIsVisibleInViewport:', browser.elementIsVisibleInViewport(el))
// // log('elementIsVisibleInViewport:', browser.elementIsVisibleInViewport(el, true))
// // log('getScrollPosition:', browser.getScrollPosition())
// // log('getURLParameters:', browser.getURLParameters('http://url.com/page?name=Adam&surname=Smith'))
// // log('redirect:', browser.redirect('https://google.com'))
// // log('scrollToTop:', browser.scrollToTop())


// // TEST DATE FUNCTIONS /////////////////////////////////////////////////////////
// log('getDaysDiffBetweenDates:', date.getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")))
// log('JSONToDate:', date.JSONToDate(/Date(1489525200000)/))
// log('toEnglishDate:', date.toEnglishDate('09/21/2010'))


// // TEST FUNCTION FUNCTIONS /////////////////////////////////////////////////////
// func.chainAsync([
//   next => { console.log('0 seconds'); setTimeout(next, 1000); },
//   next => { console.log('1 second'); setTimeout(next, 1000); },
//   next => { console.log('2 seconds'); }
// ])

// const add5 = x => x + 5
// const multiply = (x, y) => x * y
// const multiplyAndAdd5 = func.compose(add5, multiply)
// log(multiplyAndAdd5(5, 2))

// func.curry(Math.pow)(2)(10)
// func.curry(Math.min, 3)(10)(50)(2)

// const add6 = x => x + 6
// const multiply2 = (x, y) => x * y
// const multiplyAndAdd6 = func.pipeFunctions(multiply2, add6)
// log(multiplyAndAdd6(5, 2))

// const delay = func.promisify((d, cb) => setTimeout(cb, d))
// delay(2000).then(() => console.log('Hi!'))

// const delay2 = (d) => new Promise(r => setTimeout(r, d))
// func.runPromisesInSeries([() => delay2(1000), () => delay2(2000)])


// // TEST MATH FUNCTIONS /////////////////////////////////////////////////////////
// log('arrayAverage:', math.arrayAverage([1, 2, 3]))
// log('arraySum:', math.arraySum([1, 2, 3, 4]))
// log('collatz:', math.collatz(8))
// log('digitize:', math.digitize(2334))
// log('distance:', math.distance(1, 1, 2, 3))
// log('factorial:', math.factorial(6))
// log('fibonacci:', math.fibonacci(5))
// log('gcd:', math.gcd(8, 36))
// log('hammingDisance:', math.hammingDistance(2, 3))
// log('isArmstrongNumber:', math.isArmstrongNumber(1634))
// log('isArmstrongNumber:', math.isArmstrongNumber(371))
// log('isArmstrongNumber:', math.isArmstrongNumber(56))
// log('isDivisible:', math.isDivisible(6, 3))
// log('isEven:', math.isEven(3))
// log('isPrime:', math.isPrime(11))
// log('isPrime:', math.isPrime(12))
// log('isPrime:', math.isPrime(11))
// log('lcm:', math.lcm(12, 7))
// log('median:', math.median(5, 6, 50, 1, -5))
// log('palindrome:', math.palindrome('taco cat'))
// log('percentile:', math.percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))
// log('powerset:', math.powerset([1, 2]))
// log('randomIntegerInRange:', math.randomIntegerInRange(0, 5))
// log('randomNumberInRange:', math.randomNumberInRange(2, 10))
// log('round:', math.round(1.005, 2))
// log('standardDeviation:', math.standardDeviation([10, 2, 38, 23, 38, 23, 21]))
// log('standardDeviation:', math.standardDeviation([10, 2, 38, 23, 38, 23, 21], true))


// // TEST STRING FUNCTIONS ///////////////////////////////////////////////////////
// log('anangrams:', string.anagrams('abc'))
// log('capitalize:', string.capitalize('john'))
// log('capitalizeEveryWord:', string.capitalizeEveryWord('hello world'))
// log('countVowels:', string.countVowels('foobar'))
// log('countVowels:', string.countVowels('gym'))
// log('escapeRegExp:', string.escapeRegExp('(test)'))
// log('fromCamelCase:', string.fromCamelCase('someDatabaseFieldName', ' '))
// log('fromCamelCase (snake):', string.fromCamelCase('someDatabaseFieldName', '_'))
// log('fromCamelCase (kebab):', string.fromCamelCase('someDatabaseFieldName', '-'))
// log('reverseString:', string.reverseString('foobar'))
// log('sortCharactersInString:', string.sortCharactersInString('cabbage'))
// log('stringToArrayOfWords:', string.stringToArrayOfWords('I love javaScript!!'))
// log('stringToArrayOfWords:', string.stringToArrayOfWords('python, javaScript & coffee'))
// log('toCamelCase:', string.toCamelCase('some_database_field_name'))
// log('toCamelCase:', string.toCamelCase('Some label that needs to be camelized'))
// log('toCamelCase:', string.toCamelCase('some-javascript-property'))
// log('toCamelCase:', string.toCamelCase('some-mixed_string with spaces_underscores-and-hyphens'))
// log('truncateString:', string.truncateString('boomerang', 7))


// // TEST UTILITY FUNCTIONS //////////////////////////////////////////////////////
// log('coalesce:', util.coalesce(null, undefined, NaN, 'Waldo'))
// const customCoalesce = util.coalesceFactory(x => ![null, undefined, '', NaN].includes(x))
// log('coalesceFactory:', customCoalesce(null, undefined, '', NaN, 'Waldo'))
// log('extendHex:', util.extendHex('#03f'))
// log('getType:', util.getType(3))
// log('getType:', util.getType(new Set([1, 2, 3])))
// log('hexToRGB:', util.hexToRGB('#27ae60ff'))
// log('hexToRGB:', util.hexToRGB('27ae60'))
// log('hexToRGB:', util.hexToRGB('#fff'))
// log('isArray:', util.isArray([1]))
// log('isArray:', util.isArray(1))
// log('isBoolean:', util.isBoolean(null))
// log('isBoolean:', util.isBoolean(true))
// log('isFunction:', util.isFunction('x'))
// log('isFunction:', util.isFunction(x => x))
// log('isNumber:', util.isNumber('1'))
// log('isNumber:', util.isNumber(1))
// log('isString:', util.isString(10))
// log('isString:', util.isString('10'))
// log('isSymbol:', util.isSymbol('x'))
// log('isSymbol:', util.isSymbol(Symbol('x')))
// log('toOrdinalSuffix:', util.toOrdinalSuffix(123))
// log('validateEmail:', util.validateEmail('example@example.com'))
// log('validateEmail:', util.validateEmail('example'))
// log('validateNumber:', util.validateNumber('129387.987987'))
// log('validateNumber:', util.validateNumber(129387.987987))
// IMPORT ALL FUNCTIONS ////////////////////////////////////////////////////////
// Using this, the below examples will have to be namespaced under the import alias 'ff' e.g. ff.arrayMax([1, 2, 3])

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.string = exports.math = exports.func = exports.date = exports.browser = exports.array = undefined;

var _array = __webpack_require__(38);

var _array2 = _interopRequireDefault(_array);

var _browser = __webpack_require__(39);

var _browser2 = _interopRequireDefault(_browser);

var _date = __webpack_require__(40);

var _date2 = _interopRequireDefault(_date);

var _func = __webpack_require__(41);

var _func2 = _interopRequireDefault(_func);

var _math = __webpack_require__(42);

var _math2 = _interopRequireDefault(_math);

var _string = __webpack_require__(43);

var _string2 = _interopRequireDefault(_string);

var _util = __webpack_require__(44);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = console.log;

// // TEST ARRAY METHODS //////////////////////////////////////////////////////////
// log('arrayGcd:', array.arrayGcd([4, 8, 12]))
// log('arrayMax:', array.arrayMax([10, 1, 5]))
// log('arrayMin:', array.arrayMin([10, 1, 5]))
// log('chunk:', array.chunk([1, 2, 3, 4, 5], 2))
// log('compact:', array.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
// log('countOccurences:', array.countOccurences([1, 1, 2, 1, 2, 3], 1))
// log('flatten:', array.flatten([1, [2], [3, [4]]]))
// log('flattenDepth:', array.flattenDepth([1, [2], [[[3], 4], 5]], 2))
// log('deepFlatten', array.deepFlatten([1, [2], [[3], 4], 5]))
// log('difference:', array.difference([1, 2, 3], [1, 2, 4]))
// log('differenceWith:', array.differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) === Math.round(b)))
// log('distictValuesOfArray:', array.distinceValuesOfArray([1, 2, 2, 3, 4, 4, 5]))
// log('dropElements:', array.dropElements([1, 2, 3, 4], n => n >= 3))
// log('dropRight:', array.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
// log('everyNth:', array.everyNth([1, 2, 3, 4, 5, 6], 2))
// log('filterNonUnique', array.filterNonUnique([1, 2, 2, 3, 4, 4, 5]))
// log('groupBy:', array.groupBy([6.1, 4.2, 6.3], Math.floor))
// log('head:', array.head([1, 2, 3]))
// log('initial:', array.initial([1, 2, 3]))
// log('initArrayRange:', array.initArrayRange(7, 3))
// log('initArrayFill:', array.initArrayFill(5, 2))
// log('init2DArray:', array.init2dArray(3, 3, 0))
// log('intersection:', array.intersection([1, 2, 3], [4, 3, 2]))
// log('last:', array.last([1, 2, 3]))
// log('mapObject:', array.mapObject([1, 2, 3, 4], a => a * a))
// log('pick:', array.pick({'a':1, 'b':'2', 'c': 3}, ['a', 'c']))
// log('pull:', array.pull(['a', 'b', 'c'], 'a'))
// log('sample:', array.sample([3, 7, 9, 11]))
// log('shuffle:', array.shuffle([1, 2, 3]))
// log('similarity:', array.similarity([1, 2, 3], [1, 2, 4]))
// log('symmetricDifference:', array.symmetricDifference([1, 2, 3], [1, 2, 4]))
// log('tail:', array.tail([1, 2, 3]))
// log('take:', array.take([1, 2, 3, 4, 5], 3))
// log('takeRight:', array.takeRight([1, 2, 3, 4, 5], 3))
// log('union:', array.union([1, 2, 3], [4, 3, 2]))
// log('without:', array.without([2, 1, 2, 3], 1, 2))
// log('zip:', array.zip(['a'], [1, 2], [true, false]))


// // TEST BROWSER METHODS ////////////////////////////////////////////////////////
// // THESE WON'T RUN UNLESS IN BROWSER
// // log('arrayToHtmlList:', browser.arrayToHtmlList(['item 1', 'item 2'],'myListID'))
// // log('bottomVisible:', browser.bottomVisible())
// // log('currentUrl:', browser.currentUrl())
// // log('elementIsVisibleInViewport:', browser.elementIsVisibleInViewport(el))
// // log('elementIsVisibleInViewport:', browser.elementIsVisibleInViewport(el, true))
// // log('getScrollPosition:', browser.getScrollPosition())
// // log('getURLParameters:', browser.getURLParameters('http://url.com/page?name=Adam&surname=Smith'))
// // log('redirect:', browser.redirect('https://google.com'))
// // log('scrollToTop:', browser.scrollToTop())


// // TEST DATE METHODS ///////////////////////////////////////////////////////////
// log('getDaysDiffBetweenDates:', date.getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")))
// log('JSONToDate:', date.JSONToDate(/Date(1489525200000)/))
// log('toEnglishDate:', date.toEnglishDate('09/21/2010'))


// // TEST FUNCTION METHODS ///////////////////////////////////////////////////////
// func.chainAsync([
//   next => { console.log('0 seconds'); setTimeout(next, 1000); },
//   next => { console.log('1 second'); setTimeout(next, 1000); },
//   next => { console.log('2 seconds'); }
// ])

// const add5 = x => x + 5
// const multiply = (x, y) => x * y
// const multiplyAndAdd5 = func.compose(add5, multiply)
// log(multiplyAndAdd5(5, 2))

// func.curry(Math.pow)(2)(10)
// func.curry(Math.min, 3)(10)(50)(2)

// const add6 = x => x + 6
// const multiply2 = (x, y) => x * y
// const multiplyAndAdd6 = func.pipeFunctions(multiply2, add6)
// log(multiplyAndAdd6(5, 2))

// const delay = func.promisify((d, cb) => setTimeout(cb, d))
// delay(2000).then(() => console.log('Hi!'))

// const delay2 = (d) => new Promise(r => setTimeout(r, d))
// func.runPromisesInSeries([() => delay2(1000), () => delay2(2000)])


// // TEST MATH METHODS ///////////////////////////////////////////////////////////
// log('arrayAverage:', math.arrayAverage([1, 2, 3]))
// log('arraySum:', math.arraySum([1, 2, 3, 4]))
// log('collatz:', math.collatz(8))
// log('digitize:', math.digitize(2334))
// log('distance:', math.distance(1, 1, 2, 3))
// log('factorial:', math.factorial(6))
// log('fibonacci:', math.fibonacci(5))
// log('gcd:', math.gcd(8, 36))
// log('hammingDisance:', math.hammingDistance(2, 3))
// log('isArmstrongNumber:', math.isArmstrongNumber(1634))
// log('isArmstrongNumber:', math.isArmstrongNumber(371))
// log('isArmstrongNumber:', math.isArmstrongNumber(56))
// log('isDivisible:', math.isDivisible(6, 3))
// log('isEven:', math.isEven(3))
// log('isPrime:', math.isPrime(11))
// log('isPrime:', math.isPrime(12))
// log('isPrime:', math.isPrime(11))
// log('lcm:', math.lcm(12, 7))
// log('median:', math.median(5, 6, 50, 1, -5))
// log('palindrome:', math.palindrome('taco cat'))
// log('percentile:', math.percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))
// log('powerset:', math.powerset([1, 2]))
// log('randomIntegerInRange:', math.randomIntegerInRange(0, 5))
// log('randomNumberInRange:', math.randomNumberInRange(2, 10))
// log('round:', math.round(1.005, 2))
// log('standardDeviation:', math.standardDeviation([10, 2, 38, 23, 38, 23, 21]))
// log('standardDeviation:', math.standardDeviation([10, 2, 38, 23, 38, 23, 21], true))


// // TEST STRING METHODS ///////////////////////////////////////////////////////////
// log('anangrams:', string.anagrams('abc'))
// log('capitalize:', string.capitalize('john'))
// log('capitalizeEveryWord:', string.capitalizeEveryWord('hello world'))
// log('countVowels:', string.countVowels('foobar'))
// log('countVowels:', string.countVowels('gym'))
// log('escapeRegExp:', string.escapeRegExp('(test)'))
// log('fromCamelCase:', string.fromCamelCase('someDatabaseFieldName', ' '))
// log('fromCamelCase (snake):', string.fromCamelCase('someDatabaseFieldName', '_'))
// log('fromCamelCase (kebab):', string.fromCamelCase('someDatabaseFieldName', '-'))
// log('reverseString:', string.reverseString('foobar'))
// log('sortCharactersInString:', string.sortCharactersInString('cabbage'))
// log('stringToArrayOfWords:', string.stringToArrayOfWords('I love javaScript!!'))
// log('stringToArrayOfWords:', string.stringToArrayOfWords('python, javaScript & coffee'))
// log('toCamelCase:', string.toCamelCase('some_database_field_name'))
// log('toCamelCase:', string.toCamelCase('Some label that needs to be camelized'))
// log('toCamelCase:', string.toCamelCase('some-javascript-property'))
// log('toCamelCase:', string.toCamelCase('some-mixed_string with spaces_underscores-and-hyphens'))
// log('truncateString:', string.truncateString('boomerang', 7))


// // TEST UTILITY METHODS ///////////////////////////////////////////////////////////
// log('coalesce:', util.coalesce(null, undefined, NaN, 'Waldo'))
// const customCoalesce = util.coalesceFactory(x => ![null, undefined, '', NaN].includes(x))
// log('coalesceFactory:', customCoalesce(null, undefined, '', NaN, 'Waldo'))
// log('extendHex:', util.extendHex('#03f'))
// log('getType:', util.getType(3))
// log('getType:', util.getType(new Set([1, 2, 3])))
// log('hexToRGB:', util.hexToRGB('#27ae60ff'))
// log('hexToRGB:', util.hexToRGB('27ae60'))
// log('hexToRGB:', util.hexToRGB('#fff'))
// log('isArray:', util.isArray([1]))
// log('isArray:', util.isArray(1))
// log('isBoolean:', util.isBoolean(null))
// log('isBoolean:', util.isBoolean(true))
// log('isFunction:', util.isFunction('x'))
// log('isFunction:', util.isFunction(x => x))
// log('isNumber:', util.isNumber('1'))
// log('isNumber:', util.isNumber(1))
// log('isString:', util.isString(10))
// log('isString:', util.isString('10'))
// log('isSymbol:', util.isSymbol('x'))
// log('isSymbol:', util.isSymbol(Symbol('x')))
// log('toOrdinalSuffix:', util.toOrdinalSuffix(123))
// log('validateEmail:', util.validateEmail('example@example.com'))
// log('validateEmail:', util.validateEmail('example'))
// log('validateNumber:', util.validateNumber('129387.987987'))
// log('validateNumber:', util.validateNumber(129387.987987))


// COMBINE IMPORTED MODULES INTO A DEFAULT EXPORT //////////////////////////////
var _module = {};
_module = Object.assign(_module, _array2.default);
_module = Object.assign(_module, _browser2.default);
_module = Object.assign(_module, _date2.default);
_module = Object.assign(_module, _func2.default);
_module = Object.assign(_module, _math2.default);
_module = Object.assign(_module, _string2.default);
_module = Object.assign(_module, _util2.default);

// Check methods added
// console.log(module)
exports.default = _module;

// ALSO ALLOW THEM TO BE IMPORTED INDEPENDENTLY ////////////////////////////////

exports.array = _array2.default;
exports.browser = _browser2.default;
exports.date = _date2.default;
exports.func = _func2.default;
exports.math = _math2.default;
exports.string = _string2.default;
exports.util = _util2.default;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// ARRAY METHODS ///////////////////////////////////////////////////////////////
var array = void 0;
exports.default = array = {
  // Calculates the greatest common denominator of an array of numbers
  arrayGcd: function arrayGcd(arr) {
    var gcd = function gcd(x, y) {
      return !y ? x : gcd(y, x % y);
    };return arr.reduce(function (a, b) {
      return gcd(a, b);
    });
  },
  // Get the max val of an array by spreading its vals as args to Math.max.
  arrayMax: function arrayMax(arr) {
    return Math.max.apply(Math, _toConsumableArray(arr));
  },
  // Returns the minimum value in an array
  arrayMin: function arrayMin(arr) {
    return Math.min.apply(Math, _toConsumableArray(arr));
  },
  // Chunks an array into smaller arrays of a specified size.
  chunk: function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
      return arr.slice(i * size, i * size + size);
    });
  },
  // Remove falsey values from an array.
  compact: function compact(arr) {
    return arr.filter(Boolean);
  },
  // Count the occurences of an value in an array
  countOccurences: function countOccurences(arr, val) {
    return arr.reduce(function (acc, v) {
      return v === val ? acc + 1 : acc + 0;
    }, 0);
  },
  // Flatten an array
  flatten: function flatten(arr) {
    return arr.reduce(function (a, v) {
      return a.concat(v);
    }, []);
  },
  // Flattens an array up to the specified depth.
  flattenDepth: function flattenDepth(arr) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return depth !== 1 ? arr.reduce(function (a, v) {
      return a.concat(Array.isArray(v) ? array.flattenDepth(v, depth - 1) : v);
    }, []) : arr.reduce(function (a, v) {
      return a.concat(v);
    }, []);
  },
  // Deep flattens an array.
  deepFlatten: function deepFlatten(arr) {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(arr.map(function (v) {
      return Array.isArray(v) ? array.deepFlatten(v) : v;
    })));
  },
  // Returns the difference between two arrays.
  difference: function difference(a, b) {
    var s = new Set(b);return a.filter(function (x) {
      return !s.has(x);
    });
  },
  // Filters out all values from an array for which the comparator function does not return true.
  differenceWith: function differenceWith(arr, val, comp) {
    return arr.filter(function (a) {
      return !val.find(function (b) {
        return comp(a, b);
      });
    });
  },
  // Returns all the distinct values of an array.
  distinceValuesOfArray: function distinceValuesOfArray(arr) {
    return [].concat(_toConsumableArray(new Set(arr)));
  },
  // Removes elements in an array untill the passed function returns true. Returns the remaining elements in the array.
  dropElements: function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr = arr.slice(1);
    }return arr;
  },
  // Returns a new array with n elements removed from the right.
  dropRight: function dropRight(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return n < arr.length ? arr.slice(0, arr.length - n) : [];
  },
  // Returns every nth element in an array.
  everyNth: function everyNth(arr, nth) {
    return arr.filter(function (e, i) {
      return i % nth === 0;
    });
  },
  // Filters out the non-unique values in an array.
  filterNonUnique: function filterNonUnique(arr) {
    return arr.filter(function (i) {
      return arr.indexOf(i) === arr.lastIndexOf(i);
    });
  },
  // Groups the elements of an array based on the given function
  groupBy: function groupBy(arr, func) {
    return arr.map(typeof func === 'function' ? func : function (val) {
      return val[func];
    }).reduce(function (acc, val, i) {
      acc[val] = (acc[val] || []).concat(arr[i]);return acc;
    }, {});
  },
  // Returns the head of a list
  head: function head(arr) {
    return arr[0];
  },
  // Returns all the elements of an array except the last one
  initial: function initial(arr) {
    return arr.slice(0, -1);
  },
  // Initializes an array containing the numbers in th especified range where start and end are inclusive
  initArrayRange: function initArrayRange(end) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Array.from({ length: end + 1 - start }).map(function (v, i) {
      return i + start;
    });
  },
  // Initializes an array of n length, with 'value' at each index.
  initArrayFill: function initArrayFill(n) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Array(n).fill(value);
  },
  // Intializes a 2D array of given width and height and value.
  init2dArray: function init2dArray(w, h) {
    var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Array(h).fill().map(function () {
      return Array(w).fill(val);
    });
  },
  // Returns a list of elements that exist in both arrays
  intersection: function intersection(a, b) {
    var s = new Set(b);return a.filter(function (x) {
      return s.has(x);
    });
  },
  // Returns the last element in an array.
  last: function last(arr) {
    return arr[arr.length - 1];
  },
  // Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the mapped value.
  mapObject: function mapObject(arr, fn) {
    return function (a) {
      return a = [arr, arr.map(fn)], a[0].reduce(function (acc, val, i) {
        return acc[val] = a[1][i], acc;
      }, {});
    }();
  },
  // Picks the key-value pair corresponding to the given keys from an object
  pick: function pick(obj, arr) {
    return arr.reduce(function (acc, curr) {
      return curr in obj && (acc[curr] = obj[curr]), acc;
    }, {});
  },
  // filter out the values specified
  pull: function pull(arr) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return arr.filter(function (v) {
      return !args.toString().split(',').includes(v);
    });
  },
  // Returns a random element from an array
  sample: function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  // Randomizes the order of the values of an array.
  shuffle: function shuffle(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  },
  // Returns an array of elements that appear in both arrays.
  similarity: function similarity(arr, values) {
    return arr.filter(function (v) {
      return values.includes(v);
    });
  },
  // Returns the symmetric difference betreen two arrays.
  symmetricDifference: function symmetricDifference(a, b) {
    var sA = new Set(a),
        sB = new Set(b);return [].concat(_toConsumableArray(a.filter(function (x) {
      return !sB.has(x);
    })), _toConsumableArray(b.filter(function (x) {
      return !sA.has(x);
    })));
  },
  // Returns all elements in an array except for the first one.
  tail: function tail(arr) {
    return arr.length > 1 ? arr.slice(1) : arr;
  },
  // Returns an array with n elements removed from the beginning
  take: function take(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(0, n);
  },
  // Returns an array with n elements removed from the end
  takeRight: function takeRight(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(arr.length - n, arr.length);
  },
  // Returns every element that exists in any of the two arrays once.
  union: function union(a, b) {
    return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))));
  },
  // Filters out the elements of an array that have one of the specified values
  without: function without(arr) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return arr.filter(function (v) {
      return !args.includes(v);
    });
  },
  // Creates an array of elements, grouped based on the position in the original arrays.
  zip: function zip() {
    for (var _len3 = arguments.length, arrs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arrs[_key3] = arguments[_key3];
    }

    return Array.from({ length: Math.max.apply(Math, _toConsumableArray(arrs.map(function (x) {
        return x.length;
      }))) }).map(function (_, i) {
      return Array.from({ length: arrs.length }, function (_, k) {
        return arrs[k][i];
      });
    });
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// BROWSER METHODS /////////////////////////////////////////////////////////////
var browser = void 0;
exports.default = browser = {
  // Converts the given array elements into <li> tags and appends them to the list of the given id.
  arrayToHtmlList: function arrayToHtmlList(arr, listID) {
    return arr.map(function (item) {
      return document.querySelector("#" + listID).innerHTML += '<li>' + item + '</li>';
    });
  },
  // Returns true if the bottom of the page is visible, false otherwise.
  bottomVisible: function bottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
  },
  // Returns the current URL.
  currentURL: function currentURL() {
    return window.location.href;
  },
  // Returns true if the element specified is visible in the viewport, false otherwise.
  elementIsVisibleInViewport: function elementIsVisibleInViewport(el) {
    var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        left = _el$getBoundingClient.left,
        bottom = _el$getBoundingClient.bottom,
        right = _el$getBoundingClient.right;

    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  },
  // Returns the scroll position of the current page.
  getScrollPosition: function getScrollPosition() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return { x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft, y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop };
  },
  // Returns an object containing the parameters of the current URL.
  getURLParameters: function getURLParameters(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(function (a, v) {
      return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
    }, {});
  },
  // Redirects to a specified URL.
  redirect: function redirect(url) {
    var asLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return asLink ? window.location.href = url : window.location.replace(url);
  },
  // Smooth-scrolls to the top of the page.
  scrollToTop: function scrollToTop() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;if (c > 0) {
      window.requestAnimationFrame(browser.scrollToTop);window.scrollTo(0, c - c / 8);
    }
  }
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// DATE METHODS /////////////////////////////////////////////////////////////
var date = void 0;
exports.default = date = {
  // Returns the difference (in days) between two dates.
  getDaysDiffBetweenDates: function getDaysDiffBetweenDates(dateInitial, dateFinal) {
    return (dateFinal - dateInitial) / (1000 * 3600 * 24);
  },
  // Converts a JSON object to a date.
  JSONToDate: function JSONToDate(arr) {
    var dt = new Date(parseInt(arr.toString().substr(6), 10));
    return dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
  },
  // Converts a date from American format to English format.
  toEnglishDate: function toEnglishDate(time) {
    try {
      return new Date(time).toISOString().split('T')[0].replace(/-/g, '/');
    } catch (e) {
      return null;
    }
  }
};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// FUNCTION METHODS ////////////////////////////////////////////////////////////
var func = void 0;
exports.default = func = {
  // Chains asynchronous functions.
  chainAsync: function chainAsync(fns) {
    var curr = 0;var next = function next() {
      return fns[curr++](next);
    };next();
  },
  // Performs right-to-left function composition.
  compose: function compose() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(undefined, arguments));
      };
    });
  },
  // Curries a function.
  curry: function curry(fn) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var _func$curry;

    var arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.length;
    return arity <= args.length ? fn.apply(undefined, args) : (_func$curry = func.curry).bind.apply(_func$curry, [null, fn, arity].concat(args));
  },
  // Performs left-to-right function composition.
  pipeFunctions: function pipeFunctions() {
    for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      fns[_key3] = arguments[_key3];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return g(f.apply(undefined, arguments));
      };
    });
  },
  // Converts an asynchronous function to return a promise.
  promisify: function promisify(funct) {
    return function () {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return new Promise(function (resolve, reject) {
        return funct.apply(undefined, args.concat([function (err, result) {
          return err ? reject(err) : resolve(result);
        }]));
      });
    };
  },
  // Runs an array of promises in series.
  runPromisesInSeries: function runPromisesInSeries(ps) {
    return ps.reduce(function (p, next) {
      return p.then(next);
    }, Promise.resolve());
  }
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// MATH METHODS ////////////////////////////////////////////////////////////////
var math = void 0;
exports.default = math = {
  // Returns the average of an array of numbers.
  arrayAverage: function arrayAverage(x) {
    return x.reduce(function (acc, val) {
      return acc + val;
    }, 0) / x.length;
  },
  // Returns the sum of an array of numbers.
  arraySum: function arraySum(x) {
    return x.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  },
  // Applies the Collatz algorithm.
  collatz: function collatz(x) {
    return x % 2 === 0 ? x / 2 : 3 * n + 1;
  },
  // Converts a number to an array of digits.
  digitize: function digitize(x) {
    return [].concat(_toConsumableArray('' + x)).map(function (i) {
      return parseInt(i, 10);
    });
  },
  // Returns the distance between two points.
  distance: function distance(x0, y0, x1, y1) {
    return Math.hypot(x1 - x0, y1 - y0);
  },
  // Calculates the factorial of a number
  factorial: function factorial(x) {
    return x < 0 ? function () {
      throw new TypeError('Negative numbers are not allowed.');
    }() : x <= 1 ? 1 : x * math.factorial(x - 1);
  },
  // Generates an array, containing the Fibonacci sequence, up until the nth term.
  fibonacci: function fibonacci(x) {
    return Array(x).fill(0).reduce(function (acc, val, i) {
      return acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i);
    }, []);
  },
  // Calculates the greatest common divisor between two numbers.
  gcd: function gcd(x, y) {
    return !x ? x : math.gcd(y, x % y);
  },
  // Calculates the Hamming distance between two values.
  hammingDistance: function hammingDistance(x, y) {
    return ((x ^ y).toString(2).match(/1/g) || '').length;
  },
  // Checks if the given number is an armstrong number or not.
  isArmstrongNumber: function isArmstrongNumber(digits) {
    return function (arr) {
      return arr.reduce(function (a, d) {
        return a + Math.pow(parseInt(d, 10), arr.length);
      }, 0) === digits ? true : false;
    }((digits + '').split(''));
  },
  // Checks if the first numberic argument is divisible by the second one.
  isDivisible: function isDivisible(dividend, divisor) {
    return dividend % divisor === 0;
  },
  // Returns true if the given number is even, false otherwise.
  isEven: function isEven(x) {
    return x % 2 === 0;
  },
  // Checks if the provided integer is a prime number.
  isPrime: function isPrime(x) {
    for (var i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }return x >= 2;
  },
  // Returns the least common multiple of two numbers.
  lcm: function lcm(x, y) {
    var gcd = function gcd(a, b) {
      return !b ? a : gcd(b, a % b);
    };return Math.abs(x * y) / gcd(x, y);
  },
  // Returns the median of an array of numbers.
  median: function median(arr) {
    var mid = Math.floor(arr.length / 2),
        nums = [].concat(_toConsumableArray(arr)).sort(function (a, b) {
      return a - b;
    });return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  },
  // Returns true if the given string is a palindrome, false otherwise
  palindrome: function palindrome(str) {
    var s = str.toLowerCase().replace(/[\W_]/g, '');return s === s.split('').reverse().join('');
  },
  // Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.
  percentile: function percentile(arr, val) {
    return 100 * arr.reduce(function (acc, v) {
      return acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0);
    }, 0) / arr.length;
  },
  // Returns the powerset of a given array of numbers.
  powerset: function powerset(arr) {
    return arr.reduce(function (a, v) {
      return a.concat(a.map(function (r) {
        return [v].concat(r);
      }));
    }, [[]]);
  },
  // Returns a random integer in a specified range.
  randomIntegerInRange: function randomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  // Returnas a randome number in a specified range.
  randomNumberInRange: function randomNumberInRange(min, max) {
    return Math.random() * (max - min) + min;
  },
  // Rounds a number to a specified amount of digits.
  round: function round(x) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Number(Math.round(x + 'e' + decimals) + 'e-' + decimals);
  },
  // Returns the standard deviation of an array of numbers.
  standardDeviation: function standardDeviation(arr) {
    var usePopulation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var mean = arr.reduce(function (acc, val) {
      return acc + val;
    }, 0) / arr.length;
    return Math.sqrt(arr.reduce(function (acc, val) {
      return acc.concat(Math.pow(val - mean, 2));
    }, []).reduce(function (acc, val) {
      return acc + val;
    }, 0) / (arr.length - (usePopulation ? 0 : 1)));
  }
};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// STRING METHODS //////////////////////////////////////////////////////////////
var string = void 0;
exports.default = string = {
  // Generates all anagrams of a string (contains duplicates).
  anagrams: function anagrams(str) {
    if (str.length <= 2) return string.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce(function (acc, letter, i) {
      return acc.concat(string.anagrams(str.slice(0, i) + str.slice(i + 1)).map(function (val) {
        return letter + val;
      }));
    }, []);
  },
  // Capitalizes the first letter of a string.
  capitalize: function capitalize(_ref) {
    var _ref2 = _toArray(_ref),
        first = _ref2[0],
        rest = _ref2.slice(1);

    var lowerRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
  },
  // Capitaizes the first letter of every word in a string.
  capitalizeEveryWord: function capitalizeEveryWord(str) {
    return str.replace(/\b[a-z]/g, function (char) {
      return char.toUpperCase();
    });
  },
  // Returns number of vowels in provided string.
  countVowels: function countVowels(str) {
    return (str.match(/[aeiou]/ig) || []).length;
  },
  // Escapes a string to use in a regular expression.
  escapeRegExp: function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  },
  // Converts a string from camelcase
  fromCamelCase: function fromCamelCase(str) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';
    return str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
  },
  // Reverses a string.
  reverseString: function reverseString(str) {
    return str.split('').reverse().join('');
  },
  // Alphabetically sorts the characters in a string.
  sortCharactersInString: function sortCharactersInString(str) {
    return str.split('').sort(function (a, b) {
      return a.localeCompare(b);
    }).join('');
  },
  // Converts a given string into an array of words.
  stringToArrayOfWords: function stringToArrayOfWords(str) {
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /[^a-zA-Z-]+/;
    return str.split(pattern).filter(Boolean);
  },
  // Converts a string to camelcase.
  toCamelCase: function toCamelCase(str) {
    return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
      return p2 ? p2.toUpperCase() : p1.toLowerCase();
    });
  },
  // Truncates a string up to a specified length.
  truncateString: function truncateString(str, num) {
    return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
  }
};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// UTILITY METHODS /////////////////////////////////////////////////////////////
var util = void 0;
exports.default = util = {
  // Tests that the module was imported correctly
  test: function test() {
    return 'Hello from util module';
  },
  // Returns the first non-null/undefined argument
  coalesce: function coalesce() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.find(function (x) {
      return ![undefined, null].includes(x);
    });
  },
  // Returns a customized coalesce function that returns the first argument that returns true from the provided argument validation function
  coalesceFactory: function coalesceFactory(valid) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return args.find(valid);
    };
  },
  // Extends a 3-digit color code to a 6-digit color code.
  extendHex: function extendHex(shortHex) {
    return '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(function (x) {
      return x + x;
    }).join('');
  },
  // Returns the native type of a value.
  getType: function getType(v) {
    return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  },
  // Converts a color code to an rgb() or rgba() string if alpha value is provided
  hexToRGB: function hexToRGB(hex) {
    var alpha = false,
        h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [].concat(_toConsumableArray(h)).map(function (x) {
      return x + x;
    }).join('');else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return 'rgb' + (alpha ? 'a' : '') + '(' + (h >>> (alpha ? 24 : 16)) + ', ' + ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) + ', ' + ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) + (alpha ? ', ' + (h & 0x000000ff) : '') + ')';
  },
  isArray: function isArray(val) {
    return !!val && Array.isArray(val);
  },
  isBoolean: function isBoolean(val) {
    return typeof val === 'boolean';
  },
  isFunction: function isFunction(val) {
    return val && typeof val === 'function';
  },
  isNumber: function isNumber(val) {
    return typeof val === 'number';
  },
  isString: function isString(val) {
    return typeof val === 'string';
  },
  isSymbol: function isSymbol(val) {
    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'symbol';
  },
  toOrdinalSuffix: function toOrdinalSuffix(num) {
    var int = parseInt(num),
        digits = [int % 10, int % 100],
        ordinals = ['st', 'nd', 'rd', 'th'],
        oPattern = [1, 2, 3, 4],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3];
  },
  validateEmail: function validateEmail(str) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)
    );
  },
  validateNumber: function validateNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;
  }
};

/***/ })

/******/ });
//# sourceMappingURL=utils.js.map