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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _firebase = __webpack_require__(66);

firebase.initializeApp({
  apiKey: _firebase.config.apiKey,
  authDomain: _firebase.config.authDomain,
  databaseURL: _firebase.config.databaseURL,
  projectId: _firebase.config.projectId,
  storageBucket: _firebase.config.storageBucket,
  messagingSenderId: _firebase.config.messagingSenderId
});

window.firebase = firebase;

document.addEventListener('DOMContentLoaded', function () {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); // SESSION, LOCAL, NONE
  firebase.firestore().settings({ timestampsInSnapshots: true });
});

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = {"database":{"rules":"database.rules.json"},"hosting":{"public":"public","ignore":["firebase.json","**/.*","**/node_modules/**"],"rewrites":[{"source":"**","destination":"/index.html"}]},"config":{"apiKey":"AIzaSyAakqO1sf8VTyo7FaeWiEfYq3rB0NnQD2c","authDomain":"scorched-e89ee.firebaseapp.com","databaseURL":"https://scorched-e89ee.firebaseio.com","projectId":"scorched-e89ee","storageBucket":"scorched-e89ee.appspot.com","messagingSenderId":"722743307747"}}

/***/ })

/******/ });
//# sourceMappingURL=firebase-init.js.map