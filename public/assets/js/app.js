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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(1), __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(5);
var delegate = __webpack_require__(6);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(7);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveNoteOrder = saveNoteOrder;
exports.restoreNoteOrder = restoreNoteOrder;

var _macy = __webpack_require__(13);

var _macy2 = _interopRequireDefault(_macy);

var _noteList = __webpack_require__(14);

var _noteList2 = _interopRequireDefault(_noteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// CORE FUNCTIONALITY
////////////////////////////////////////////////////////////////////////////////

// MACY INITIALIZATION /////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#macy-container') ? initMacy() : null;
  document.querySelector('#macy-container .macy-item') ? initDragAndDrop() : null;
});

function initMacy() {
  document.querySelector('#macy-container').style.columnCount = 'unset';

  window.macy = (0, _macy2.default)({
    container: '#macy-container',
    columns: 1,
    trueOrder: false,
    margin: 16,
    waitForImages: true,
    useOwnImageLoader: false,
    mobileFirst: true,
    breakAt: {
      1024: 3,
      640: 2
    }
  });

  restoreNoteOrder();
  _noteList2.default.listen();

  // MACY EVENT LISTENERS ////////////////////////////////////////////////////////
  var c = macy.constants;
  var listen = function listen(event, message) {
    macy.on(event, function (ctx) {
      console.log(ctx, message);
    }, true);
  };

  // listen(c.EVENT_INITIALIZED, ': Macy instance initialized/reinitialized.')
  // listen(c.EVENT_RECALCULATED, ': Macy recalculated layout.')
  // listen(c.EVENT_IMAGE_LOAD, ': Macy detected that an image loaded.')
  // listen(c.EVENT_IMAGE_COMPLETE, ': Macy detected that all images have loaded.')
  // listen(c.EVENT_RESIZE, ': Macy detected that the document has been resized.')
}

// MACY AVAILABLE METHODS //////////////////////////////////////////////////////
// macy.recalculate();
// macy.reInit();
// macy.remove();
// macy.on(macy.constants.EVENT_INITIALIZED, (ctx) => {})

// macyInstance.runOnImageLoad(function () {
//   console.log('I only get called when all images are loaded');
//   macyInstance.recalculate(null, true);
// });

// macyInstance.runOnImageLoad(function () {
//   console.log('Every time an image loads I get fired');
//   macyInstance.recalculate(true);
// }, true);

////////////////////////////////////////////////////////////////////////////////
// DRAG AND DROP FUNCTIONALITY
////////////////////////////////////////////////////////////////////////////////

function initDragAndDrop() {
  var masonryEnvironment = function () {
    var testDragAndDropSupport = function testDragAndDropSupport() {
      return 'draggable' in document.createElement('span');
    };
    return {
      init: function init() {
        if (testDragAndDropSupport()) {
          var root = document.getElementsByTagName('html')[0];
          root.classList.add('draganddrop');
        }
      }
    };
  }();

  masonryEnvironment.init();

  var macyC = document.querySelector('#macy-container');
  var macyI = macyC.querySelectorAll('.macy-item')
  // console.log(macyC, macyI)
  ;[].forEach.call(macyI, function (macyI) {
    macyI.addEventListener('dragstart', handleDragStart, false);
    macyI.addEventListener('dragenter', handleDragEnter, false);
    macyI.addEventListener('dragover', handleDragOver, false);
    macyI.addEventListener('dragleave', handleDragLeave, false);
    macyI.addEventListener('drop', handleDrop, false);
    macyI.addEventListener('dragend', handleDragEnd, false);
  });
  macyC.className += ' is-active';

  var dragSrcEl = null;
  var dragEnterState = 0;
  function handleDragStart(e) {
    // Target (this) element is the source node
    // console.log('Drag Start')
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', this.innerHTML);
  }

  function handleDragOver(e) {
    // console.log('Drag Over')
    if (e.preventDefault) {
      // Allows us to drop.
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDragEnter(e) {
    // this e.target is the current hovepreventr target
    // console.log('Drag Enter')
    this.classList.add('over');
    dragEnterState += 1;
  }

  function handleDragLeave(e) {
    // this e.target is previous target element
    // console.log('Drag Leave')
    dragEnterState -= 1;
    // console.log('dragEnterState: ', dragEnterState)
    dragEnterState <= 0 ? this.classList.remove('over') : null;
  }

  function handleDrop(e) {
    // this/e.target is current target element
    // console.log('Handle Drop')
    dragEnterState = 0;
    if (e.stopPropagation) {
      // Stops some browsers from redirecting
      e.stopPropagation();
    }
    // Don't do anything if dropping the same item we're dragging
    if (dragSrcEl != this) {
      // Set the source item's HTML to the HTML of the item we dropped upon
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text');
      e.dataTransfer.clearData();
      this.classList.remove('over');
      saveNoteOrder();
      macy.reInit();
    }
    return false;
  }

  function handleDragEnd(e) {
    // this e.target is the source node
    // console.log('Handle Drag End')
    document.querySelectorAll('.macy-item.over').forEach(function (elm) {
      return elm.classList.remove('over');
    });
  }
}

////////////////////////////////////////////////////////////////////////////////
// NOTE STATE
////////////////////////////////////////////////////////////////////////////////

// SAVE NOTE STATE //////////////////////////////////////////////////////////
function saveNoteOrder() {
  localStorage.removeItem('macy-note-order');
  localStorage.setItem('macy-note-order', document.getElementById('macy-container').innerHTML);
}

// RESTORE NOTE STATE //////////////////////////////////////////////////////////
function restoreNoteOrder() {
  if (localStorage.getItem('macy-note-order') !== null) {
    document.getElementById('macy-container').innerHTML = localStorage.getItem('macy-note-order');
  }

  macy.reInit();
  var notes = document.querySelectorAll('.macy-item');
  notes.forEach(function (note) {
    return note.classList.remove('over');
  });
  notes.forEach(function (note) {
    return note.removeAttribute('style');
  });
  notes.forEach(function (note) {
    return note.style.opacity = '1';
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPage = renderPage;

__webpack_require__(11);

__webpack_require__(8);

__webpack_require__(15);

var _editor = __webpack_require__(17);

var _editor2 = _interopRequireDefault(_editor);

var _fileUploader = __webpack_require__(18);

var _fileUploader2 = _interopRequireDefault(_fileUploader);

var _databaseExplorer = __webpack_require__(19);

var _databaseExplorer2 = _interopRequireDefault(_databaseExplorer);

var _scorch = __webpack_require__(20);

var _scorch2 = _interopRequireDefault(_scorch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HANDLE AUTH /////////////////////////////////////////////////////////////////


// COMPONENTS //////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  var s = document.querySelector('#splash');
  s ? s.classList.add('hidden') : null;
  renderPage();
});

// REGISTER SERVICE WORKER /////////////////////////////////////////////////////
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('./../../service-worker.js', { scope: './' })
//     .then(() => {
//       // console.log('Service Worker Registered: Caching assets for offline use.')
//     })
// }

// ALIASES /////////////////////////////////////////////////////////////////////
// MODULES /////////////////////////////////////////////////////////////////////
document.qs = function (sel) {
  return document.querySelector(sel);
};
document.qsa = function (sel) {
  return document.querySelectorAll(sel);
};

////////////////////////////////////////////////////////////////////////////////
// RENDER PAGE
////////////////////////////////////////////////////////////////////////////////
function renderPage() {
  var editorContainer = document.querySelector('#editor-container');
  (0, _editor2.default)(editorContainer);
  (0, _fileUploader2.default)();

  _databaseExplorer2.default.init();
  _scorch2.default.init();
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _firebase = __webpack_require__(12);

firebase.initializeApp({
  apiKey: _firebase.config.apiKey,
  authDomain: _firebase.config.authDomain,
  databaseURL: _firebase.config.databaseURL,
  projectId: _firebase.config.projectId,
  storageBucket: _firebase.config.storageBucket,
  messagingSenderId: _firebase.config.messagingSenderId
}); // import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/firestore'
// import 'firebase/storage'

window.firebase = firebase;

// FOR INDEX PAGE ONLY /////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  try {
    var app = firebase.app();
    var features = ['auth', 'database', 'messaging', 'storage'].filter(function (feature) {
      return typeof app[feature] === 'function';
    });
    features = features.map(function (f) {
      return f.charAt(0).toUpperCase() + f.substr(1);
    });
    document.querySelector('.load').innerHTML = 'Firebase SDK: ' + features.join(', ') + ' loaded.';

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); // SESSION, LOCAL, NONE
    firebase.firestore().settings({ timestampsInSnapshots: true });
  } catch (e) {
    document.querySelector('.login-page') ? console.error(e) : null;
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"database":{"rules":"database.rules.json"},"hosting":{"public":"public","ignore":["firebase.json","**/.*","**/node_modules/**"],"rewrites":[{"source":"**","destination":"/index.html"}]},"config":{"apiKey":"AIzaSyAakqO1sf8VTyo7FaeWiEfYq3rB0NnQD2c","authDomain":"scorched-e89ee.firebaseapp.com","databaseURL":"https://scorched-e89ee.firebaseio.com","projectId":"scorched-e89ee","storageBucket":"scorched-e89ee.appspot.com","messagingSenderId":"722743307747"}}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Macy=n()}(this,function(){"use strict";function t(t,n){var e=void 0;return function(){e&&clearTimeout(e),e=setTimeout(t,n)}}function n(t,n){for(var e=t.length,o=e,r=[];e--;)r.push(n(t[o-e-1]));return r}function e(t,n){A(t,n,arguments.length>2&&void 0!==arguments[2]&&arguments[2])}function o(t){for(var n=t.options,e=t.responsiveOptions,o=t.keys,r=t.docWidth,i=void 0,s=0;s<o.length;s++){var a=parseInt(o[s],10);r>=a&&(i=n.breakAt[a],O(i,e))}return e}function r(t){for(var n=t.options,e=t.responsiveOptions,o=t.keys,r=t.docWidth,i=void 0,s=o.length-1;s>=0;s--){var a=parseInt(o[s],10);r<=a&&(i=n.breakAt[a],O(i,e))}return e}function i(t){var n=document.body.clientWidth,e={columns:t.columns};L(t.margin)?e.margin={x:t.margin.x,y:t.margin.y}:e.margin={x:t.margin,y:t.margin};var i=Object.keys(t.breakAt);return t.mobileFirst?o({options:t,responsiveOptions:e,keys:i,docWidth:n}):r({options:t,responsiveOptions:e,keys:i,docWidth:n})}function s(t){return i(t).columns}function a(t){return i(t).margin}function c(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=s(t),o=a(t).x,r=100/e;return n?1===e?"100%":(o=(e-1)*o/e,"calc("+r+"% - "+o+"px)"):r}function u(t,n){var e=s(t.options),o=0,r=void 0,i=void 0;return 1===++n?0:(i=a(t.options).x,r=(i-(e-1)*i/e)*(n-1),o+=c(t.options,!1)*(n-1),"calc("+o+"% + "+r+"px)")}function l(t){var n=0,e=t.container;m(t.rows,function(t){n=t>n?t:n}),e.style.height=n+"px"}function p(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=s(t.options),i=a(t.options).y;C(t,r,e),m(n,function(n){var e=0,r=parseInt(n.offsetHeight,10);isNaN(r)||(t.rows.forEach(function(n,o){n<t.rows[e]&&(e=o)}),n.style.position="absolute",n.style.top=t.rows[e]+"px",n.style.left=""+t.cols[e],t.rows[e]+=isNaN(r)?0:r+i,o&&(n.dataset.macyComplete=1))}),o&&(t.tmpRows=null),l(t)}function h(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=s(t.options),i=a(t.options).y;C(t,r,e),m(n,function(n){t.lastcol===r&&(t.lastcol=0);var e=M(n,"height");e=parseInt(n.offsetHeight,10),isNaN(e)||(n.style.position="absolute",n.style.top=t.rows[t.lastcol]+"px",n.style.left=""+t.cols[t.lastcol],t.rows[t.lastcol]+=isNaN(e)?0:e+i,t.lastcol+=1,o&&(n.dataset.macyComplete=1))}),o&&(t.tmpRows=null),l(t)}var f=function t(n,e){if(!(this instanceof t))return new t(n,e);if(n=n.replace(/^\s*/,"").replace(/\s*$/,""),e)return this.byCss(n,e);for(var o in this.selectors)if(e=o.split("/"),new RegExp(e[1],e[2]).test(n))return this.selectors[o](n);return this.byCss(n)};f.prototype.byCss=function(t,n){return(n||document).querySelectorAll(t)},f.prototype.selectors={},f.prototype.selectors[/^\.[\w\-]+$/]=function(t){return document.getElementsByClassName(t.substring(1))},f.prototype.selectors[/^\w+$/]=function(t){return document.getElementsByTagName(t)},f.prototype.selectors[/^\#[\w\-]+$/]=function(t){return document.getElementById(t.substring(1))};var m=function(t,n){for(var e=t.length,o=e;e--;)n(t[o-e-1])},v=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.running=!1,this.events=[],this.add(t)};v.prototype.run=function(){if(!this.running&&this.events.length>0){var t=this.events.shift();this.running=!0,t(),this.running=!1,this.run()}},v.prototype.add=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!!n&&(Array.isArray(n)?m(n,function(n){return t.add(n)}):(this.events.push(n),void this.run()))},v.prototype.clear=function(){this.events=[]};var d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.instance=t,this.data=n,this},g=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.events={},this.instance=t};g.prototype.on=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!t||!n)&&(Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(n))},g.prototype.emit=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t||!Array.isArray(this.events[t]))return!1;var e=new d(this.instance,n);m(this.events[t],function(t){return t(e)})};var y=function(t){return!("naturalHeight"in t&&t.naturalHeight+t.naturalWidth===0)||t.width+t.height!==0},E=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(t,e){if(n.complete)return y(n)?t(n):e(n);n.addEventListener("load",function(){return y(n)?t(n):e(n)}),n.addEventListener("error",function(){return e(n)})}).then(function(n){e&&t.emit(t.constants.EVENT_IMAGE_LOAD,{img:n})}).catch(function(n){return t.emit(t.constants.EVENT_IMAGE_ERROR,{img:n})})},w=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(e,function(n){return E(t,n,o)})},A=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Promise.all(w(t,n,e)).then(function(){t.emit(t.constants.EVENT_IMAGE_COMPLETE)})},I=function(n){return t(function(){n.emit(n.constants.EVENT_RESIZE),n.queue.add(function(){return n.recalculate(!0,!0)})},100)},N=function(t){if(t.container=f(t.options.container),t.container instanceof f||!t.container)return!!t.options.debug&&console.error("Error: Container not found");delete t.options.container,t.container.length&&(t.container=t.container[0]),t.container.style.position="relative"},T=function(t){t.queue=new v,t.events=new g(t),t.rows=[],t.resizer=I(t)},b=function(t){var n=f("img",t.container);window.addEventListener("resize",t.resizer),t.on(t.constants.EVENT_IMAGE_LOAD,function(){return t.recalculate(!1,!1)}),t.on(t.constants.EVENT_IMAGE_COMPLETE,function(){return t.recalculate(!0,!0)}),t.options.useOwnImageLoader||e(t,n,!t.options.waitForImages),t.emit(t.constants.EVENT_INITIALIZED)},_=function(t){N(t),T(t),b(t)},L=function(t){return t===Object(t)&&"[object Array]"!==Object.prototype.toString.call(t)},O=function(t,n){L(t)||(n.columns=t),L(t)&&t.columns&&(n.columns=t.columns),L(t)&&t.margin&&!L(t.margin)&&(n.margin={x:t.margin,y:t.margin}),L(t)&&t.margin&&L(t.margin)&&t.margin.x&&(n.margin.x=t.margin.x),L(t)&&t.margin&&L(t.margin)&&t.margin.y&&(n.margin.y=t.margin.y)},M=function(t,n){return window.getComputedStyle(t,null).getPropertyValue(n)},C=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.lastcol||(t.lastcol=0),t.rows.length<1&&(e=!0),e){t.rows=[],t.cols=[],t.lastcol=0;for(var o=n-1;o>=0;o--)t.rows[o]=0,t.cols[o]=u(t,o)}else if(t.tmpRows){t.rows=[];for(var o=n-1;o>=0;o--)t.rows[o]=t.tmpRows[o]}else{t.tmpRows=[];for(var o=n-1;o>=0;o--)t.tmpRows[o]=t.rows[o]}},V=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=n?t.container.children:f(':scope > *:not([data-macy-complete="1"])',t.container),r=c(t.options);return m(o,function(t){n&&(t.dataset.macyComplete=0),t.style.width=r}),t.options.trueOrder?(h(t,o,n,e),t.emit(t.constants.EVENT_RECALCULATED)):(p(t,o,n,e),t.emit(t.constants.EVENT_RECALCULATED))},R=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},x={columns:4,margin:2,trueOrder:!1,waitForImages:!1,useImageLoader:!0,breakAt:{},useOwnImageLoader:!1,onInit:!1};!function(){try{document.createElement("a").querySelector(":scope *")}catch(t){!function(){function t(t){return function(e){if(e&&n.test(e)){var o=this.getAttribute("id");o||(this.id="q"+Math.floor(9e6*Math.random())+1e6),arguments[0]=e.replace(n,"#"+this.id);var r=t.apply(this,arguments);return null===o?this.removeAttribute("id"):o||(this.id=o),r}return t.apply(this,arguments)}}var n=/:scope\b/gi,e=t(Element.prototype.querySelector);Element.prototype.querySelector=function(t){return e.apply(this,arguments)};var o=t(Element.prototype.querySelectorAll);Element.prototype.querySelectorAll=function(t){return o.apply(this,arguments)}}()}}();var q=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;if(!(this instanceof t))return new t(n);this.options={},R(this.options,x,n),_(this)};return q.init=function(t){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new q(t)},q.prototype.recalculateOnImageLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e(this,f("img",this.container),!t)},q.prototype.runOnImageLoad=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=f("img",this.container);return this.on(this.constants.EVENT_IMAGE_COMPLETE,t),n&&this.on(this.constants.EVENT_IMAGE_LOAD,t),e(this,o,n)},q.prototype.recalculate=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e&&this.queue.clear(),this.queue.add(function(){return V(t,n,e)})},q.prototype.remove=function(){window.removeEventListener("resize",this.resizer),m(this.container.children,function(t){t.removeAttribute("data-macy-complete"),t.removeAttribute("style")}),this.container.removeAttribute("style")},q.prototype.reInit=function(){this.recalculate(!0,!0),this.emit(this.constants.EVENT_INITIALIZED),window.addEventListener("resize",this.resizer),this.container.style.position="relative"},q.prototype.on=function(t,n){this.events.on(t,n)},q.prototype.emit=function(t,n){this.events.emit(t,n)},q.constants={EVENT_INITIALIZED:"macy.initialized",EVENT_RECALCULATED:"macy.recalculated",EVENT_IMAGE_LOAD:"macy.image.load",EVENT_IMAGE_ERROR:"macy.image.error",EVENT_IMAGE_COMPLETE:"macy.images.complete",EVENT_RESIZE:"macy.resize"},q.prototype.constants=q.constants,q});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _macy = __webpack_require__(8);

var w = window,
    d = document,
    qs = function qs(x) {
  document.querySelector(x);
},
    l = function l(x) {
  console.log(x);
};w.qs = qs, w.l = l, w.d = d;

var notes = {
  order: {},

  oarr: [],

  getOrder: function getOrder() {
    var nl = d.querySelectorAll('.macy-item');
    nl[0].children[0].dataset.uid;
    notes.order = {};
    nl.forEach(function (x, i) {
      return notes.order[i] = x.children[0].dataset.uid;
    });
    nl.forEach(function (x) {
      return notes.oarr.push(x.children[0].dataset.uid);
    });
  },

  before: function before(elm, tgt) {
    tgt.parentNode.insertBefore(elm, tgt.nextSibling);
  },

  after: function after(elm, tgt) {
    tgt.parentNode.insertBefore(elm, tgt.nextSibling);
  },

  reverse: function reverse() {
    var store = document.querySelectorAll('.macy-item');
    store = Array.prototype.slice.call(store, 0).reverse();
    document.getElementById('macy-container').innerHTML = '';
    store.forEach(function (elm) {
      return document.getElementById('macy-container').appendChild(elm);
    });
    (0, _macy.saveNoteOrder)();
    macy.reInit();
  },

  listen: function listen() {
    document.querySelector('#reverse-notes').addEventListener('click', this.reverse);
  }
};

exports.default = notes;

w.notes = notes;

////////////////////////////////////////////////////////////////////////////////
// APPEND TO CONTAINER ONE AT A TIME FROM ARRAY
////////////////////////////////////////////////////////////////////////////////

// push: par => {
//   notes.getOrder()
//   let promise = Promise.resolve()
//   notes.oarr.reverse().forEach(x => {
//     promise = promise.then(function() {
//       document
//       .querySelector(par)
//       .appendChild(
//         document.querySelector(`.macy-item div[data-uid = \'${x}\']`)
//         .parentNode
//       )
//       return new Promise(res => setTimeout(res, 1000))
//     })
//     // promise.then(() => { console.log('Loop finished.') })
//   })
// },

// notes.before(qs('.macy-item'), qs('input'))
// qs('#macy-container').appendChild(qs('.macy-item div[data-uid = \'note-0000001\']').parentNode)

// ////////////////////////////////////////////////////////////////////////////////
// // UPDATE NOTE
// ////////////////////////////////////////////////////////////////////////////////

// function updateNote(docId) {
//   let elem = document.querySelector('.updateForm.' + docId)
//   if (elem !== null) {
//     elem.parentNode.removeChild(elem)
//   } else {
//     document.querySelector('#' + docId).innerHTML += `
//       <div class="updateForm ${docId}">
//         <input class="${docId} updateTitle" type="text" placeholder="Update note title">
//         <input class="${docId} updateBody" type="text" placeholder="Update note body">
//         <button class="${docId} updateCreatedAt" type="text">Update timestamp</button>
//       </div>
//     `

//     let Note = firebase
//       .firestore()
//       .collection('notes')
//       .doc(docId)

//     document.querySelector('.updateTitle.' + docId).onkeyup = e =>
//       Note.update({ title: e.target.value })
//     document.querySelector('.updateBody.' + docId).onkeyup = e =>
//       Note.update({ body: e.target.value })
//     document.querySelector('.updateCreatedAt.' + docId).onclick = () =>
//       Note.update({ createdAt: Date(Date.now()).toString() })

//     Note.onSnapshot(doc => {
//       let data = doc.data()
//       document.querySelector('#' + docId + ' .title').innerHTML = data.title
//       document.querySelector('#' + docId + ' .body').innerHTML = data.body
//       document.querySelector('#' + docId + ' .createdAt').innerHTML =
//         data.createdAt
//     })
//   }
// }

// ////////////////////////////////////////////////////////////////////////////////
// // DELETE NOTE
// ////////////////////////////////////////////////////////////////////////////////

// function deleteNote(docId) {
//   let elem = document.querySelector('#' + docId)
//   elem.parentNode.removeChild(elem)
//   console.log(elem, ' was not removed from Firestore...yet.')

//   let Note = firebase
//     .firestore()
//     .collection('notes')
//     .doc(docId)

//   Note.delete()
//     .then(function() {
//       console.log('Document successfully deleted!')
//     })
//     .catch(function(error) {
//       console.error('Error removing document: ', error)
//     })
// }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initApp = initApp;
exports.logout = logout;

var _arrive = __webpack_require__(16);

var gebi = function gebi(elm) {
  return document.getElementById(elm);
};
var qs = function qs(elm) {
  return document.querySelector(elm);
};

////////////////////////////////////////////////////////////////////////////////
// FIREBASEUI AUTH CONFIG
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', function () {
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function signInSuccessWithAuthResult(authResult, redirectUrl) {
        var user = authResult.user;
        var credential = authResult.credential;
        var isNewUser = authResult.additionalUserInfo.isNewUser;
        var providerId = authResult.additionalUserInfo.providerId;
        var operationType = authResult.operationType;
        // Do something with the returned AuthResult.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        sessionStorage.setItem('accessToken', 'pending');
        sessionStorage.setItem('user', JSON.stringify(user));
        qs('body').insertAdjacentHTML('afterbegin', '<div id="splash"></div>');
        sessionStorage.setItem('fresh-login', true);

        return true;
      },
      signInFailure: function signInFailure(error) {
        // Some unrecoverable error occurred during log-in.
        // Return a promise when error handling is completed and FirebaseUI
        // will reset, clearing any UI. This commonly occurs for error code
        // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
        // occurs. Check below for more details on this.
        return handleUIError(error);
      },
      uiShown: function uiShown() {
        // The widget is rendered.
        // Hide the loader.
      }
    },
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
    // Query parameter name for mode.
    queryParameterForWidgetMode: 'mode',
    // Query parameter name for sign in success url.
    queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
    // Will use popup for IDP Providers log-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: location.href.split('/')[0] + '//' + location.href.split('/')[2] + '/app',
    signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // {
    //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //   // Whether the display name should be displayed in the Sign Up page.
    //   requireDisplayName: true
    // },
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // Invisible reCAPTCHA with image challenge and bottom left badge.
      recaptchaParameters: {
        type: 'image',
        size: 'invisible',
        badge: 'bottomleft'
      }
    }],
    // Terms of service url.
    tosUrl: '',
    privacyPolicyUrl: ''
  };

  if (gebi('firebaseui-auth-container') !== null) {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }
});

////////////////////////////////////////////////////////////////////////////////
// TRACK AUTH ACROSS PAGES
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  firebase.auth().onAuthStateChanged(function (user) {
    // IF LOGGED IN ////////////////////////////////////////////////////////////////
    if (user) {
      if (gebi('log-in-status') !== null && gebi('log-in') !== null && gebi('account-details') !== null) {
        user.getIdToken().then(function (accessToken) {
          // TOP BAR: LOGGED IN
          gebi('log-in-status').textContent = 'Welcome, ' + (user.displayName !== null ? user.displayName : 'anon') + '.';
          gebi('log-in').textContent = 'Log out';
          gebi('log-in').addEventListener('click', function () {
            return logout();
          });
          // RENDER ACCOUNT DETAILS
          gebi('account-details').style.display = 'flex';
          gebi('account-details').innerHTML = '<div class="avatar-name-row">\n            <img src="' + user.photoURL + '" />\n            <p><b>' + user.displayName + '</b></p>\n          </div>\n          <ul>\n            <li><span>Email</span><br>' + user.email + '</li>\n            <li><span>Verified</span><br>' + (user.emailVerified ? 'Yes' : 'No') + '</li>\n            <li><span>Phone</span><br>' + (user.phoneNumber ? user.phoneNumber : 'Not provided') + '</li>\n            <li><span>UID</span><br>' + user.uid + '</li>\n          </ul>';
          // SET SESSION DATA
          sessionStorage.setItem('providerData', JSON.stringify(user.providerData[0], null, 3));
          sessionStorage.setItem('accessToken', user.accessToken);
          sessionStorage.setItem('user', JSON.stringify(user));
        });
      }
    }

    // IF LOGGED OUT ///////////////////////////////////////////////////////////////
    else {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('user');
        var href = window.location.href;
        href = href.substring(0, href.length - 1);
        href === window.location.origin ? null : window.location.href = '/';

        if (gebi('log-in-status') !== null && gebi('log-in') !== null && gebi('account-details') !== null) {
          // HIDE ACCOUNT DETAILS
          gebi('account-details').style.display = 'none';
          // TOP BAR: LOGGED OUT
          gebi('log-in-status').textContent = 'Logged out';
          document.querySelectorAll('.firebaseui-idp-text-long').forEach(function (n) {
            var arr = n.innerHTML.split(' ');
            n.innerHTML = 'Log ' + arr[1];
          });
        }
      }
  }, function (error) {
    return console.log(error);
  });
}

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function logout() {
  firebase.auth().signOut().then(function () {
    sessionStorage.clear();
    window.location.href = '/';
  }).catch(function (error) {
    return console.log(error);
  });
}

document.arrive('.firebaseui-idp-text-long', function (elm) {
  var arr = elm.innerHTML.split(' ');
  elm.innerHTML = 'Log ' + arr[1];
  document.unbindArrive('.firebaseui-idp-text-long');
});

document.arrive('.firebaseui-idp-button', function (elm) {
  if (elm.querySelector('.firebaseui-idp-text-short').innerText === 'Google') {
    elm.addEventListener('click', function () {
      qs('body').insertAdjacentHTML('afterbegin', '<div id="splash"></div>');
    });
    document.unbindArrive('.firebaseui-idp-button');
  }
});

document.arrive('.firebaseui-id-submit', function (elm) {
  if (elm.innerText === 'Continue') {
    console.log('FOUND YOU PHONE');
    elm.addEventListener('click', function () {
      qs('body').insertAdjacentHTML('afterbegin', '<div id="splash"></div>');
    });
  }
  document.unbindArrive('.firebaseui-id-submit');
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*globals jQuery,Window,HTMLElement,HTMLDocument,HTMLCollection,NodeList,MutationObserver */
/*exported Arrive*/
/*jshint latedef:false */

/*
 * arrive.js
 * v2.4.1
 * https://github.com/uzairfarooq/arrive
 * MIT licensed
 *
 * Copyright (c) 2014-2017 Uzair Farooq
 */
var Arrive = function (window, $, undefined) {

  "use strict";

  if (!window.MutationObserver || typeof HTMLElement === 'undefined') {
    return; //for unsupported browsers
  }

  var arriveUniqueId = 0;

  var utils = function () {
    var matches = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;

    return {
      matchesSelector: function matchesSelector(elem, selector) {
        return elem instanceof HTMLElement && matches.call(elem, selector);
      },
      // to enable function overloading - By John Resig (MIT Licensed)
      addMethod: function addMethod(object, name, fn) {
        var old = object[name];
        object[name] = function () {
          if (fn.length == arguments.length) {
            return fn.apply(this, arguments);
          } else if (typeof old == 'function') {
            return old.apply(this, arguments);
          }
        };
      },
      callCallbacks: function callCallbacks(callbacksToBeCalled, registrationData) {
        if (registrationData && registrationData.options.onceOnly && registrationData.firedElems.length == 1) {
          // as onlyOnce param is true, make sure we fire the event for only one item
          callbacksToBeCalled = [callbacksToBeCalled[0]];
        }

        for (var i = 0, cb; cb = callbacksToBeCalled[i]; i++) {
          if (cb && cb.callback) {
            cb.callback.call(cb.elem, cb.elem);
          }
        }

        if (registrationData && registrationData.options.onceOnly && registrationData.firedElems.length == 1) {
          // unbind event after first callback as onceOnly is true.
          registrationData.me.unbindEventWithSelectorAndCallback.call(registrationData.target, registrationData.selector, registrationData.callback);
        }
      },
      // traverse through all descendants of a node to check if event should be fired for any descendant
      checkChildNodesRecursively: function checkChildNodesRecursively(nodes, registrationData, matchFunc, callbacksToBeCalled) {
        // check each new node if it matches the selector
        for (var i = 0, node; node = nodes[i]; i++) {
          if (matchFunc(node, registrationData, callbacksToBeCalled)) {
            callbacksToBeCalled.push({ callback: registrationData.callback, elem: node });
          }

          if (node.childNodes.length > 0) {
            utils.checkChildNodesRecursively(node.childNodes, registrationData, matchFunc, callbacksToBeCalled);
          }
        }
      },
      mergeArrays: function mergeArrays(firstArr, secondArr) {
        // Overwrites default options with user-defined options.
        var options = {},
            attrName;
        for (attrName in firstArr) {
          if (firstArr.hasOwnProperty(attrName)) {
            options[attrName] = firstArr[attrName];
          }
        }
        for (attrName in secondArr) {
          if (secondArr.hasOwnProperty(attrName)) {
            options[attrName] = secondArr[attrName];
          }
        }
        return options;
      },
      toElementsArray: function toElementsArray(elements) {
        // check if object is an array (or array like object)
        // Note: window object has .length property but it's not array of elements so don't consider it an array
        if (typeof elements !== "undefined" && (typeof elements.length !== "number" || elements === window)) {
          elements = [elements];
        }
        return elements;
      }
    };
  }();

  // Class to maintain state of all registered events of a single type
  var EventsBucket = function () {
    var EventsBucket = function EventsBucket() {
      // holds all the events

      this._eventsBucket = [];
      // function to be called while adding an event, the function should do the event initialization/registration
      this._beforeAdding = null;
      // function to be called while removing an event, the function should do the event destruction
      this._beforeRemoving = null;
    };

    EventsBucket.prototype.addEvent = function (target, selector, options, callback) {
      var newEvent = {
        target: target,
        selector: selector,
        options: options,
        callback: callback,
        firedElems: []
      };

      if (this._beforeAdding) {
        this._beforeAdding(newEvent);
      }

      this._eventsBucket.push(newEvent);
      return newEvent;
    };

    EventsBucket.prototype.removeEvent = function (compareFunction) {
      for (var i = this._eventsBucket.length - 1, registeredEvent; registeredEvent = this._eventsBucket[i]; i--) {
        if (compareFunction(registeredEvent)) {
          if (this._beforeRemoving) {
            this._beforeRemoving(registeredEvent);
          }

          // mark callback as null so that even if an event mutation was already triggered it does not call callback
          var removedEvents = this._eventsBucket.splice(i, 1);
          if (removedEvents && removedEvents.length) {
            removedEvents[0].callback = null;
          }
        }
      }
    };

    EventsBucket.prototype.beforeAdding = function (beforeAdding) {
      this._beforeAdding = beforeAdding;
    };

    EventsBucket.prototype.beforeRemoving = function (beforeRemoving) {
      this._beforeRemoving = beforeRemoving;
    };

    return EventsBucket;
  }();

  /**
   * @constructor
   * General class for binding/unbinding arrive and leave events
   */
  var MutationEvents = function MutationEvents(getObserverConfig, onMutation) {
    var eventsBucket = new EventsBucket(),
        me = this;

    var defaultOptions = {
      fireOnAttributesModification: false
    };

    // actual event registration before adding it to bucket
    eventsBucket.beforeAdding(function (registrationData) {
      var target = registrationData.target,
          observer;

      // mutation observer does not work on window or document
      if (target === window.document || target === window) {
        target = document.getElementsByTagName("html")[0];
      }

      // Create an observer instance
      observer = new MutationObserver(function (e) {
        onMutation.call(this, e, registrationData);
      });

      var config = getObserverConfig(registrationData.options);

      observer.observe(target, config);

      registrationData.observer = observer;
      registrationData.me = me;
    });

    // cleanup/unregister before removing an event
    eventsBucket.beforeRemoving(function (eventData) {
      eventData.observer.disconnect();
    });

    this.bindEvent = function (selector, options, callback) {
      options = utils.mergeArrays(defaultOptions, options);

      var elements = utils.toElementsArray(this);

      for (var i = 0; i < elements.length; i++) {
        eventsBucket.addEvent(elements[i], selector, options, callback);
      }
    };

    this.unbindEvent = function () {
      var elements = utils.toElementsArray(this);
      eventsBucket.removeEvent(function (eventObj) {
        for (var i = 0; i < elements.length; i++) {
          if (this === undefined || eventObj.target === elements[i]) {
            return true;
          }
        }
        return false;
      });
    };

    this.unbindEventWithSelectorOrCallback = function (selector) {
      var elements = utils.toElementsArray(this),
          callback = selector,
          compareFunction;

      if (typeof selector === "function") {
        compareFunction = function compareFunction(eventObj) {
          for (var i = 0; i < elements.length; i++) {
            if ((this === undefined || eventObj.target === elements[i]) && eventObj.callback === callback) {
              return true;
            }
          }
          return false;
        };
      } else {
        compareFunction = function compareFunction(eventObj) {
          for (var i = 0; i < elements.length; i++) {
            if ((this === undefined || eventObj.target === elements[i]) && eventObj.selector === selector) {
              return true;
            }
          }
          return false;
        };
      }
      eventsBucket.removeEvent(compareFunction);
    };

    this.unbindEventWithSelectorAndCallback = function (selector, callback) {
      var elements = utils.toElementsArray(this);
      eventsBucket.removeEvent(function (eventObj) {
        for (var i = 0; i < elements.length; i++) {
          if ((this === undefined || eventObj.target === elements[i]) && eventObj.selector === selector && eventObj.callback === callback) {
            return true;
          }
        }
        return false;
      });
    };

    return this;
  };

  /**
   * @constructor
   * Processes 'arrive' events
   */
  var ArriveEvents = function ArriveEvents() {
    // Default options for 'arrive' event
    var arriveDefaultOptions = {
      fireOnAttributesModification: false,
      onceOnly: false,
      existing: false
    };

    function getArriveObserverConfig(options) {
      var config = {
        attributes: false,
        childList: true,
        subtree: true
      };

      if (options.fireOnAttributesModification) {
        config.attributes = true;
      }

      return config;
    }

    function onArriveMutation(mutations, registrationData) {
      mutations.forEach(function (mutation) {
        var newNodes = mutation.addedNodes,
            targetNode = mutation.target,
            callbacksToBeCalled = [],
            node;

        // If new nodes are added
        if (newNodes !== null && newNodes.length > 0) {
          utils.checkChildNodesRecursively(newNodes, registrationData, nodeMatchFunc, callbacksToBeCalled);
        } else if (mutation.type === "attributes") {
          if (nodeMatchFunc(targetNode, registrationData, callbacksToBeCalled)) {
            callbacksToBeCalled.push({ callback: registrationData.callback, elem: targetNode });
          }
        }

        utils.callCallbacks(callbacksToBeCalled, registrationData);
      });
    }

    function nodeMatchFunc(node, registrationData, callbacksToBeCalled) {
      // check a single node to see if it matches the selector
      if (utils.matchesSelector(node, registrationData.selector)) {
        if (node._id === undefined) {
          node._id = arriveUniqueId++;
        }
        // make sure the arrive event is not already fired for the element
        if (registrationData.firedElems.indexOf(node._id) == -1) {
          registrationData.firedElems.push(node._id);

          return true;
        }
      }

      return false;
    }

    arriveEvents = new MutationEvents(getArriveObserverConfig, onArriveMutation);

    var mutationBindEvent = arriveEvents.bindEvent;

    // override bindEvent function
    arriveEvents.bindEvent = function (selector, options, callback) {

      if (typeof callback === "undefined") {
        callback = options;
        options = arriveDefaultOptions;
      } else {
        options = utils.mergeArrays(arriveDefaultOptions, options);
      }

      var elements = utils.toElementsArray(this);

      if (options.existing) {
        var existing = [];

        for (var i = 0; i < elements.length; i++) {
          var nodes = elements[i].querySelectorAll(selector);
          for (var j = 0; j < nodes.length; j++) {
            existing.push({ callback: callback, elem: nodes[j] });
          }
        }

        // no need to bind event if the callback has to be fired only once and we have already found the element
        if (options.onceOnly && existing.length) {
          return callback.call(existing[0].elem, existing[0].elem);
        }

        setTimeout(utils.callCallbacks, 1, existing);
      }

      mutationBindEvent.call(this, selector, options, callback);
    };

    return arriveEvents;
  };

  /**
   * @constructor
   * Processes 'leave' events
   */
  var LeaveEvents = function LeaveEvents() {
    // Default options for 'leave' event
    var leaveDefaultOptions = {};

    function getLeaveObserverConfig() {
      var config = {
        childList: true,
        subtree: true
      };

      return config;
    }

    function onLeaveMutation(mutations, registrationData) {
      mutations.forEach(function (mutation) {
        var removedNodes = mutation.removedNodes,
            callbacksToBeCalled = [];

        if (removedNodes !== null && removedNodes.length > 0) {
          utils.checkChildNodesRecursively(removedNodes, registrationData, nodeMatchFunc, callbacksToBeCalled);
        }

        utils.callCallbacks(callbacksToBeCalled, registrationData);
      });
    }

    function nodeMatchFunc(node, registrationData) {
      return utils.matchesSelector(node, registrationData.selector);
    }

    leaveEvents = new MutationEvents(getLeaveObserverConfig, onLeaveMutation);

    var mutationBindEvent = leaveEvents.bindEvent;

    // override bindEvent function
    leaveEvents.bindEvent = function (selector, options, callback) {

      if (typeof callback === "undefined") {
        callback = options;
        options = leaveDefaultOptions;
      } else {
        options = utils.mergeArrays(leaveDefaultOptions, options);
      }

      mutationBindEvent.call(this, selector, options, callback);
    };

    return leaveEvents;
  };

  var arriveEvents = new ArriveEvents(),
      leaveEvents = new LeaveEvents();

  function exposeUnbindApi(eventObj, exposeTo, funcName) {
    // expose unbind function with function overriding
    utils.addMethod(exposeTo, funcName, eventObj.unbindEvent);
    utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorOrCallback);
    utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorAndCallback);
  }

  /*** expose APIs ***/
  function exposeApi(exposeTo) {
    exposeTo.arrive = arriveEvents.bindEvent;
    exposeUnbindApi(arriveEvents, exposeTo, "unbindArrive");

    exposeTo.leave = leaveEvents.bindEvent;
    exposeUnbindApi(leaveEvents, exposeTo, "unbindLeave");
  }

  if ($) {
    exposeApi($.fn);
  }
  exposeApi(HTMLElement.prototype);
  exposeApi(NodeList.prototype);
  exposeApi(HTMLCollection.prototype);
  exposeApi(HTMLDocument.prototype);
  exposeApi(Window.prototype);

  var Arrive = {};
  // expose functions to unbind all arrive/leave events
  exposeUnbindApi(arriveEvents, Arrive, "unbindAllArrive");
  exposeUnbindApi(leaveEvents, Arrive, "unbindAllLeave");

  return Arrive;
}(window, typeof jQuery === 'undefined' ? null : jQuery, undefined);

exports.Arrive = Arrive;
exports.arrive = arrive;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderEditor;
exports.saveNote = saveNote;
exports.loadMarkdownTutorial = loadMarkdownTutorial;
exports.configEditor = configEditor;
function renderEditor(editorContainer) {
  if (editorContainer !== null) {
    window.editor = new Editor({
      element: document.getElementById('#editor'),
      // toolbar: [], // array or false
      status: ['lines', 'words', 'cursor'] // array or false
      // actions: {},
      // shortcuts: {}
    });

    window.editor.render();
    configEditor();
  }
}

////////////////////////////////////////////////////////////////////////////////

function saveNote() {
  // Parse Title
  var noteTitle = window.editor.codemirror.getLine(0);
  console.log('Note Title:', noteTitle);

  // Parse Body
  var lines = [];

  window.editor.codemirror.getDoc(0).children[0].lines.forEach(function (line, i) {
    return i > 0 ? lines.push(line.text) : null;
  });
  var noteBody = lines.join('\n');
  console.log('Note Body:', noteBody);
}

////////////////////////////////////////////////////////////////////////////////

function loadMarkdownTutorial() {
  editor.codemirror.setValue('# Scorched Uses Markdown\n\n### Here\'s a quick formatting to get you up and running.\n\nIf you need to **bold** something, *consider italics instead*.\n\n> This blockquote introduces an unordered list.\n\n- `let code = inline`\n- [Link Text](https://google.com)\n\n\n1. alt+z to enter Zen mode\n2. alt+x to see your work as HTML\n3. Use the toolbar to format, insert links, or learn more about Markdown\n4. Safety First, ~~Then Teamwork~~\n\n![Image Caption](https://media1.giphy.com/media/dh2XvZthDl7ag/giphy.gif)');
}

////////////////////////////////////////////////////////////////////////////////
// CONFIGURE EDITOR
////////////////////////////////////////////////////////////////////////////////

function configEditor() {
  window.editor.codemirror.setOption('tabSize', 2);
  window.editor.codemirror.setOption('lineWrapping', true);
  window.editor.codemirror.setOption('cursorBlinkRate', 99999999999999999);
  window.editor.codemirror.setOption('cursorHeight', 1);
  window.editor.redo(); // Focuses the editor

  qs('.preview-shortcut').addEventListener('click', function () {
    return editor.togglePreview();
  });
  qs('.zen-shortcut').addEventListener('click', function () {
    return editor.toggleFullScreen();
  });
  qs('.markdown-tutorial-button').addEventListener('click', function () {
    return loadMarkdownTutorial();
  });
  qs('.save-button').addEventListener('click', function () {
    return saveNote();
  });

  // DOM MANIPULATION ////////////////////////////////////////////////////////////
  qs('.editor-buttons .align-left').appendChild(qs('.editor-statusbar'));

  // SCROLLBARS //////////////////////////////////////////////////////////////////
  var child = qs('.CodeMirror-scroll');
  var parent = child.parentNode;
  var clippingMask = document.createElement('div');
  clippingMask.className = 'CodeMirror-clipping-mask';
  parent.replaceChild(clippingMask, child);
  clippingMask.appendChild(child);

  // TOOLBAR BORDER BOTTTOM ////////////////////////////////////////////////////
  child = qs('.editor-toolbar');
  parent = child.parentNode;
  clippingMask = document.createElement('div');
  clippingMask.className = 'editor-toolbar-container';
  parent.replaceChild(clippingMask, child);
  clippingMask.appendChild(child);

  // TOOLBAR BORDER BOTTTOM ////////////////////////////////////////////////////
  qs('.editor-toolbar .icon-bold').title = 'Bold';
  qs('.editor-toolbar .icon-italic').title = 'Italic';
  qs('.editor-toolbar .icon-quote').title = 'Blockquote';
  qs('.editor-toolbar .icon-unordered-list').title = 'Unordered List';
  qs('.editor-toolbar .icon-ordered-list').title = 'Ordered List';
  qs('.editor-toolbar .icon-link').title = 'Link';
  qs('.editor-toolbar .icon-image').title = 'Image';
  qs('.editor-toolbar .icon-info').title = 'Markdown Reference';
  qs('.editor-toolbar .icon-preview').title = 'Preview';
  qs('.editor-toolbar .icon-fullscreen').title = 'Zen';
}

////////////////////////////////////////////////////////////////////////////////
// KEYBOARD SHORTCUTS
////////////////////////////////////////////////////////////////////////////////

// MAP KEY FOR ZEN MODE
window.zenMode = false;
window.previewMode = false;
window.addEventListener('keydown', checkKeyPressed, false);
function checkKeyPressed(e) {
  if (e.keyCode === 90 && e.altKey) {
    if (window.zenMode === false) {
      window.zenMode = true;
      window.editor.toggleFullScreen();
    } else {
      window.zenMode = false;
      try {
        document.exitFullscreen();
      } catch (err) {
        console.log(null);
      }
      try {
        document.webkitExitFullscreen();
      } catch (err) {
        console.log(null);
      }
    }
  } else if (e.keyCode === 88 && e.altKey) {
    if (window.previewMode === false) {
      window.previewMode = true;
      window.editor.togglePreview();
    } else {
      window.previewMode = false;
      window.editor.togglePreview();
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// DEBUG TOOLS
////////////////////////////////////////////////////////////////////////////////

// LOG KEYS
// window.addEventListener('keydown', logKeys, false)
// function logKeys(e) {
//   console.log(e)
// }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = styleFileInputs;
////////////////////////////////////////////////////////////////////////////////
// STYLE FILE INPUTS
////////////////////////////////////////////////////////////////////////////////
function styleFileInputs() {
  var inputs = document.querySelectorAll('input[type="file"]');[].forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;

    // console.log( 'inputs: ', inputs, '\ninput: ', input, '\nlabel: ', label, '\nlabelVal:', labelVal )

    input.addEventListener('change', function (e) {
      console.log('this.files: ', input.files);
      var fileName = '';
      if (input.files && input.files.length > 1) {
        fileName = (input.getAttribute('data-multiple-caption') || '').replace('{count}', input.files.length);
      } else {
        fileName = e.target.value.split('\\').pop();
      }

      var sel = label.querySelector('span');
      if (fileName) {
        sel.innerHTML = fileName;
        sel.classList.remove('hide');
      } else {
        label.innerHTML = labelVal;
        sel.classList.add('hide');
      }
    });
  });
}

////////////////////////////////////////////////////////////////////////////////
// FIREBASE STORAGE UPLOAD
////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  var qs = function qs(q) {
    return document.querySelector(q);
  };
  var uploader = qs('.file-uploader-container .uploader');
  var filename = qs('.file-uploader-container label span');
  var status = qs('.file-uploader-container .status');
  var viewer = qs('.file-uploader-container .viewer');
  if (uploader) {
    uploader.addEventListener('change', function (e) {
      return uploadFile(e, status, viewer, filename);
    });
  }
});

function uploadFile(e, status, viewer, filename) {
  status.classList.remove('shown');
  status.classList.add('hidden');
  var file = e.target.files.item(0);
  var uploadTask = firebase.storage().ref().child(file.name).put(file);

  uploadTask.on('state_changed', function (snapshot) {
    var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
    console.log('Upload is ' + progress + '% done');
    filename.innerHTML = file.name + ': ' + parseInt(progress) + '%';
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED:
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING:
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    status.innerHTML = 'Error: ' + error;
  }, function () {
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      console.log('File available at', downloadURL);
      if (file.name.match(/\.(jpeg|jpg|gif|png|svg)$/) != null) {
        viewer.src = downloadURL;
      }
      e.target.value = '';
      status.innerHTML = 'Success.&nbsp;&nbsp;<a href="' + downloadURL + '">Download</a>';
      status.classList.remove('hidden');
      status.classList.add('shown');
    });
  });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clipboard = __webpack_require__(0);

var _clipboard2 = _interopRequireDefault(_clipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var qs = function qs(x, y) {
  return document.querySelector(x, y);
};

var DBExplorer = {
  root: '/',
  container: qs('.db-explorer-container'),
  output: qs('.db-explorer-container .output'),
  pathField: qs('.db-explorer-container .path-field'),
  clear: qs('.clear-button'),
  copy: qs('.copy-button'),
  copyJSON: qs('.copy-json-button'),

  init: function init() {
    if (document.readyState !== 'loading' && this.container !== null) {
      this.config();
    }
  },

  config: function config() {
    var _this = this;

    this.pathField.placeholder = this.root;
    if (typeof output !== null && typeof this.pathField !== null) {
      this.pathField.addEventListener('keyup', this.getRef);
      this.getRef();
    }

    this.clear.addEventListener('click', function (e) {
      e.preventDefault();
      _this.pathField.value = '';
      _this.getRef();
    });

    this.copy.setAttribute('data-clipboard-target', '.path-field');
    new _clipboard2.default('.copy-button');
    this.copy.addEventListener('click', function (e) {
      return e.preventDefault();
    });

    new _clipboard2.default('.copy-json-button');
    this.copyJSON.addEventListener('click', function (e) {
      return e.preventDefault();
    });
  },

  getRef: function getRef() {
    var _this2 = this;

    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

    this.pathField.value ? path = this.pathField.value : null;

    return firebase.database().ref(path).on('value', function (snap) {
      if (typeof snap.val === 'function') {
        // console.log('Current DB Snapshot: ', snap.val())
        _this2.output.innerHTML = JSON.stringify(snap.val(), null, 3);
        Prism.highlightAll();

        new _clipboard2.default('.copy-json-button');
        _this2.createTokenLinks();
      }
    });
  },

  createTokenLinks: function createTokenLinks() {
    var _this3 = this;

    document.querySelectorAll('.token.property').forEach(function (t) {
      return t.addEventListener('click', function () {
        var p = t.innerHTML.replace(/\"/g, '');
        _this3.pathField.value = _this3.pathField.value + '/' + p;
        DBExplorer.getRef();
      });
    });
  }
};

exports.default = DBExplorer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
////////////////////////////////////////////////////////////////////////////////
// SCORCH BUTTON
////////////////////////////////////////////////////////////////////////////////

var Scorch = {
  init: function init() {
    var _this = this;

    var button = document.querySelector('button.scorch');
    if (button !== null) {
      button.addEventListener('click', function () {
        _this.scorch();
      });
    }
  },

  scorch: function scorch() {
    document.querySelector('body').innerHTML = '\n<pre class="scorched">\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n<br><br><br><span class="scorched-text">\nA  M  N  E  S  I  A  C    A  L  T  E  R<span>\nS  C  O  R  C  H  E  D    E  A  R  T  H</span>\nD  E  L  E  T  I  O  N    E  V  E  N  T\n</span><br><br>\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\n\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25</pre>';
  }
};

exports.default = Scorch;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map