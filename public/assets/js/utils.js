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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(5), __webpack_require__(7), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(9);
var delegate = __webpack_require__(10);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(11);

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
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ffjs = __webpack_require__(45);

var _ffjs2 = _interopRequireDefault(_ffjs);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ffjs = __webpack_require__(46);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.string = exports.math = exports.func = exports.date = exports.browser = exports.array = undefined;

var _array = __webpack_require__(47);

var _array2 = _interopRequireDefault(_array);

var _browser = __webpack_require__(48);

var _browser2 = _interopRequireDefault(_browser);

var _date = __webpack_require__(49);

var _date2 = _interopRequireDefault(_date);

var _func = __webpack_require__(50);

var _func2 = _interopRequireDefault(_func);

var _math = __webpack_require__(51);

var _math2 = _interopRequireDefault(_math);

var _string = __webpack_require__(52);

var _string2 = _interopRequireDefault(_string);

var _util = __webpack_require__(53);

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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _clipboard = __webpack_require__(2);

var _clipboard2 = _interopRequireDefault(_clipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-solarizedlight&languages=markup+css+clike+javascript+json&plugins=line-numbers+show-invisibles+toolbar+remove-initial-line-feed+normalize-whitespace+copy-to-clipboard */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
  var e = /\blang(?:uage)?-([\w-]+)\b/i,
      t = 0,
      n = _self.Prism = { manual: _self.Prism && _self.Prism.manual, disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler, util: { encode: function encode(e) {
        return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }, type: function type(e) {
        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
      }, objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
      }, clone: function clone(e, t) {
        var r = n.util.type(e);switch (t = t || {}, r) {case "Object":
            if (t[n.util.objId(e)]) return t[n.util.objId(e)];var a = {};t[n.util.objId(e)] = a;for (var l in e) {
              e.hasOwnProperty(l) && (a[l] = n.util.clone(e[l], t));
            }return a;case "Array":
            if (t[n.util.objId(e)]) return t[n.util.objId(e)];var a = [];return t[n.util.objId(e)] = a, e.forEach(function (e, r) {
              a[r] = n.util.clone(e, t);
            }), a;}return e;
      } }, languages: { extend: function extend(e, t) {
        var r = n.util.clone(n.languages[e]);for (var a in t) {
          r[a] = t[a];
        }return r;
      }, insertBefore: function insertBefore(e, t, r, a) {
        a = a || n.languages;var l = a[e];if (2 == arguments.length) {
          r = arguments[1];for (var i in r) {
            r.hasOwnProperty(i) && (l[i] = r[i]);
          }return l;
        }var o = {};for (var s in l) {
          if (l.hasOwnProperty(s)) {
            if (s == t) for (var i in r) {
              r.hasOwnProperty(i) && (o[i] = r[i]);
            }o[s] = l[s];
          }
        }return n.languages.DFS(n.languages, function (t, n) {
          n === a[e] && t != e && (this[t] = o);
        }), a[e] = o;
      }, DFS: function DFS(e, t, r, a) {
        a = a || {};for (var l in e) {
          e.hasOwnProperty(l) && (t.call(e, l, e[l], r || l), "Object" !== n.util.type(e[l]) || a[n.util.objId(e[l])] ? "Array" !== n.util.type(e[l]) || a[n.util.objId(e[l])] || (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, a)) : (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, a)));
        }
      } }, plugins: {}, highlightAll: function highlightAll(e, t) {
      n.highlightAllUnder(document, e, t);
    }, highlightAllUnder: function highlightAllUnder(e, t, r) {
      var a = { callback: r, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };n.hooks.run("before-highlightall", a);for (var l, i = a.elements || e.querySelectorAll(a.selector), o = 0; l = i[o++];) {
        n.highlightElement(l, t === !0, a.callback);
      }
    }, highlightElement: function highlightElement(t, r, a) {
      for (var l, i, o = t; o && !e.test(o.className);) {
        o = o.parentNode;
      }o && (l = (o.className.match(e) || [, ""])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, t.parentNode && (o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l));var s = t.textContent,
          u = { element: t, language: l, grammar: i, code: s };if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (n.hooks.run("before-highlight", u), u.element.textContent = u.code, n.hooks.run("after-highlight", u)), n.hooks.run("complete", u), void 0;if (n.hooks.run("before-highlight", u), r && _self.Worker) {
        var g = new Worker(n.filename);g.onmessage = function (e) {
          u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
        }, g.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 }));
      } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
    }, highlight: function highlight(e, t, a) {
      var l = { code: e, grammar: t, language: a };return n.hooks.run("before-tokenize", l), l.tokens = n.tokenize(l.code, l.grammar), n.hooks.run("after-tokenize", l), r.stringify(n.util.encode(l.tokens), l.language);
    }, matchGrammar: function matchGrammar(e, t, r, a, l, i, o) {
      var s = n.Token;for (var u in r) {
        if (r.hasOwnProperty(u) && r[u]) {
          if (u == o) return;var g = r[u];g = "Array" === n.util.type(g) ? g : [g];for (var c = 0; c < g.length; ++c) {
            var h = g[c],
                f = h.inside,
                d = !!h.lookbehind,
                m = !!h.greedy,
                p = 0,
                y = h.alias;if (m && !h.pattern.global) {
              var v = h.pattern.toString().match(/[imuy]*$/)[0];h.pattern = RegExp(h.pattern.source, v + "g");
            }h = h.pattern || h;for (var b = a, k = l; b < t.length; k += t[b].length, ++b) {
              var w = t[b];if (t.length > e.length) return;if (!(w instanceof s)) {
                if (m && b != t.length - 1) {
                  h.lastIndex = k;var _ = h.exec(e);if (!_) break;for (var j = _.index + (d ? _[1].length : 0), P = _.index + _[0].length, A = b, x = k, O = t.length; O > A && (P > x || !t[A].type && !t[A - 1].greedy); ++A) {
                    x += t[A].length, j >= x && (++b, k = x);
                  }if (t[b] instanceof s) continue;I = A - b, w = e.slice(k, x), _.index -= k;
                } else {
                  h.lastIndex = 0;var _ = h.exec(w),
                      I = 1;
                }if (_) {
                  d && (p = _[1] ? _[1].length : 0);var j = _.index + p,
                      _ = _[0].slice(p),
                      P = j + _.length,
                      N = w.slice(0, j),
                      S = w.slice(P),
                      C = [b, I];N && (++b, k += N.length, C.push(N));var E = new s(u, f ? n.tokenize(_, f) : _, y, _, m);if (C.push(E), S && C.push(S), Array.prototype.splice.apply(t, C), 1 != I && n.matchGrammar(e, t, r, b, k, !0, u), i) break;
                } else if (i) break;
              }
            }
          }
        }
      }
    }, tokenize: function tokenize(e, t) {
      var r = [e],
          a = t.rest;if (a) {
        for (var l in a) {
          t[l] = a[l];
        }delete t.rest;
      }return n.matchGrammar(e, r, t, 0, 0, !1), r;
    }, hooks: { all: {}, add: function add(e, t) {
        var r = n.hooks.all;r[e] = r[e] || [], r[e].push(t);
      }, run: function run(e, t) {
        var r = n.hooks.all[e];if (r && r.length) for (var a, l = 0; a = r[l++];) {
          a(t);
        }
      } } },
      r = n.Token = function (e, t, n, r, a) {
    this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!a;
  };if (r.stringify = function (e, t, a) {
    if ("string" == typeof e) return e;if ("Array" === n.util.type(e)) return e.map(function (n) {
      return r.stringify(n, t, e);
    }).join("");var l = { type: e.type, content: r.stringify(e.content, t, a), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: a };if (e.alias) {
      var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(l.classes, i);
    }n.hooks.run("wrap", l);var o = Object.keys(l.attributes).map(function (e) {
      return e + '="' + (l.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + l.content + "</" + l.tag + ">";
  }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function (e) {
    var t = JSON.parse(e.data),
        r = t.language,
        a = t.code,
        l = t.immediateClose;_self.postMessage(n.highlight(a, n.languages[r], r)), l && _self.close();
  }, !1), _self.Prism) : _self.Prism;var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return a && (n.filename = a.src, n.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism;
}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /(^|[^\\])["']/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^{}\s][^{};]*?(?=\s*\{)/, string: { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css", greedy: !0 } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(?:true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/, "function": /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i, alias: "function" }, constant: /\b[A-Z][A-Z\d_]*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/, greedy: !0, inside: { interpolation: { pattern: /\${[^}]+}/, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } } }), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript", greedy: !0 } }), Prism.languages.js = Prism.languages.javascript;
Prism.languages.json = { property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i, string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 }, number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/, punctuation: /[{}[\]);,]/, operator: /:/g, "boolean": /\b(?:true|false)\b/i, "null": /\bnull\b/i }, Prism.languages.jsonp = Prism.languages.json;
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var e = "line-numbers",
        t = /\n(?!$)/g,
        n = function n(e) {
      var n = r(e),
          s = n["white-space"];if ("pre-wrap" === s || "pre-line" === s) {
        var l = e.querySelector("code"),
            i = e.querySelector(".line-numbers-rows"),
            a = e.querySelector(".line-numbers-sizer"),
            o = l.textContent.split(t);a || (a = document.createElement("span"), a.className = "line-numbers-sizer", l.appendChild(a)), a.style.display = "block", o.forEach(function (e, t) {
          a.textContent = e || "\n";var n = a.getBoundingClientRect().height;i.children[t].style.height = n + "px";
        }), a.textContent = "", a.style.display = "none";
      }
    },
        r = function r(e) {
      return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null;
    };window.addEventListener("resize", function () {
      Array.prototype.forEach.call(document.querySelectorAll("pre." + e), n);
    }), Prism.hooks.add("complete", function (e) {
      if (e.code) {
        var r = e.element.parentNode,
            s = /\s*\bline-numbers\b\s*/;if (r && /pre/i.test(r.nodeName) && (s.test(r.className) || s.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
          s.test(e.element.className) && (e.element.className = e.element.className.replace(s, " ")), s.test(r.className) || (r.className += " line-numbers");var l,
              i = e.code.match(t),
              a = i ? i.length + 1 : 1,
              o = new Array(a + 1);o = o.join("<span></span>"), l = document.createElement("span"), l.setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = o, r.hasAttribute("data-start") && (r.style.counterReset = "linenumber " + (parseInt(r.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), n(r), Prism.hooks.run("line-numbers", e);
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
    }), Prism.plugins.lineNumbers = { getLine: function getLine(t, n) {
        if ("PRE" === t.tagName && t.classList.contains(e)) {
          var r = t.querySelector(".line-numbers-rows"),
              s = parseInt(t.getAttribute("data-start"), 10) || 1,
              l = s + (r.children.length - 1);s > n && (n = s), n > l && (n = l);var i = n - s;return r.children[i];
        }
      } };
  }
}();
!function () {
  "undefined" != typeof self && !self.Prism || "undefined" != typeof global && !global.Prism || Prism.hooks.add("before-highlight", function (e) {
    var f = e.grammar;f && (f.tab = /\t/g, f.crlf = /\r\n/g, f.lf = /\n/g, f.cr = /\r/g, f.space = / /g);
  });
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var t = [],
        e = {},
        n = function n() {};Prism.plugins.toolbar = {};var a = Prism.plugins.toolbar.registerButton = function (n, a) {
      var o;o = "function" == typeof a ? a : function (t) {
        var e;return "function" == typeof a.onClick ? (e = document.createElement("button"), e.type = "button", e.addEventListener("click", function () {
          a.onClick.call(this, t);
        })) : "string" == typeof a.url ? (e = document.createElement("a"), e.href = a.url) : e = document.createElement("span"), e.textContent = a.text, e;
      }, t.push(e[n] = o);
    },
        o = Prism.plugins.toolbar.hook = function (a) {
      var o = a.element.parentNode;if (o && /pre/i.test(o.nodeName) && !o.parentNode.classList.contains("code-toolbar")) {
        var r = document.createElement("div");r.classList.add("code-toolbar"), o.parentNode.insertBefore(r, o), r.appendChild(o);var i = document.createElement("div");i.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (t = document.body.getAttribute("data-toolbar-order").split(",").map(function (t) {
          return e[t] || n;
        })), t.forEach(function (t) {
          var e = t(a);if (e) {
            var n = document.createElement("div");n.classList.add("toolbar-item"), n.appendChild(e), i.appendChild(n);
          }
        }), r.appendChild(i);
      }
    };a("label", function (t) {
      var e = t.element.parentNode;if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
        var n,
            a,
            o = e.getAttribute("data-label");try {
          a = document.querySelector("template#" + o);
        } catch (r) {}return a ? n = a.content : (e.hasAttribute("data-url") ? (n = document.createElement("a"), n.href = e.getAttribute("data-url")) : n = document.createElement("span"), n.textContent = o), n;
      }
    }), Prism.hooks.add("complete", o);
  }
}();
!function () {
  "undefined" != typeof self && self.Prism && self.document && Prism.hooks.add("before-sanity-check", function (e) {
    if (e.code) {
      var s = e.element.parentNode,
          n = /\s*\bkeep-initial-line-feed\b\s*/;!s || "pre" !== s.nodeName.toLowerCase() || n.test(s.className) || n.test(e.element.className) || (e.code = e.code.replace(/^(?:\r?\n|\r)/, ""));
    }
  });
}();
!function () {
  function e(e) {
    this.defaults = r({}, e);
  }function n(e) {
    return e.replace(/-(\w)/g, function (e, n) {
      return n.toUpperCase();
    });
  }function t(e) {
    for (var n = 0, t = 0; t < e.length; ++t) {
      e.charCodeAt(t) == "	".charCodeAt(0) && (n += 3);
    }return e.length + n;
  }var r = Object.assign || function (e, n) {
    for (var t in n) {
      n.hasOwnProperty(t) && (e[t] = n[t]);
    }return e;
  };e.prototype = { setDefaults: function setDefaults(e) {
      this.defaults = r(this.defaults, e);
    }, normalize: function normalize(e, t) {
      t = r(this.defaults, t);for (var i in t) {
        var o = n(i);"normalize" !== i && "setDefaults" !== o && t[i] && this[o] && (e = this[o].call(this, e, t[i]));
      }return e;
    }, leftTrim: function leftTrim(e) {
      return e.replace(/^\s+/, "");
    }, rightTrim: function rightTrim(e) {
      return e.replace(/\s+$/, "");
    }, tabsToSpaces: function tabsToSpaces(e, n) {
      return n = 0 | n || 4, e.replace(/\t/g, new Array(++n).join(" "));
    }, spacesToTabs: function spacesToTabs(e, n) {
      return n = 0 | n || 4, e.replace(new RegExp(" {" + n + "}", "g"), "	");
    }, removeTrailing: function removeTrailing(e) {
      return e.replace(/\s*?$/gm, "");
    }, removeInitialLineFeed: function removeInitialLineFeed(e) {
      return e.replace(/^(?:\r?\n|\r)/, "");
    }, removeIndent: function removeIndent(e) {
      var n = e.match(/^[^\S\n\r]*(?=\S)/gm);return n && n[0].length ? (n.sort(function (e, n) {
        return e.length - n.length;
      }), n[0].length ? e.replace(new RegExp("^" + n[0], "gm"), "") : e) : e;
    }, indent: function indent(e, n) {
      return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join("	") + "$&");
    }, breakLines: function breakLines(e, n) {
      n = n === !0 ? 80 : 0 | n || 80;for (var r = e.split("\n"), i = 0; i < r.length; ++i) {
        if (!(t(r[i]) <= n)) {
          for (var o = r[i].split(/(\s+)/g), a = 0, s = 0; s < o.length; ++s) {
            var l = t(o[s]);a += l, a > n && (o[s] = "\n" + o[s], a = l);
          }r[i] = o.join("");
        }
      }return r.join("\n");
    } }, "undefined" != typeof module && module.exports && (module.exports = e), "undefined" != typeof Prism && (Prism.plugins.NormalizeWhitespace = new e({ "remove-trailing": !0, "remove-indent": !0, "left-trim": !0, "right-trim": !0 }), Prism.hooks.add("before-sanity-check", function (e) {
    var n = Prism.plugins.NormalizeWhitespace;if (!e.settings || e.settings["whitespace-normalization"] !== !1) {
      if ((!e.element || !e.element.parentNode) && e.code) return e.code = n.normalize(e.code, e.settings), void 0;var t = e.element.parentNode,
          r = /\bno-whitespace-normalization\b/;if (e.code && t && "pre" === t.nodeName.toLowerCase() && !r.test(t.className) && !r.test(e.element.className)) {
        for (var i = t.childNodes, o = "", a = "", s = !1, l = 0; l < i.length; ++l) {
          var c = i[l];c == e.element ? s = !0 : "#text" === c.nodeName && (s ? a += c.nodeValue : o += c.nodeValue, t.removeChild(c), --l);
        }if (e.element.children.length && Prism.plugins.KeepMarkup) {
          var u = o + e.element.innerHTML + a;e.element.innerHTML = n.normalize(u, e.settings), e.code = e.element.textContent;
        } else e.code = o + e.code + a, e.code = n.normalize(e.code, e.settings);
      }
    }
  }));
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    if (!Prism.plugins.toolbar) return console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."), void 0;var o = window.ClipboardJS || void 0;o || "function" != "function" || (o = __webpack_require__(2));var e = [];if (!o) {
      var t = document.createElement("script"),
          n = document.querySelector("head");t.onload = function () {
        if (o = window.ClipboardJS) for (; e.length;) {
          e.pop()();
        }
      }, t.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", n.appendChild(t);
    }Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (t) {
      function n() {
        var e = new o(i, { text: function text() {
            return t.code;
          } });e.on("success", function () {
          i.textContent = "Copied!", r();
        }), e.on("error", function () {
          i.textContent = "Press Ctrl+C to copy", r();
        });
      }function r() {
        setTimeout(function () {
          i.textContent = "Copy";
        }, 5e3);
      }var i = document.createElement("a");return i.textContent = "Copy", o ? n() : e.push(n), i;
    });
  }
}();

// Prism.plugins.NormalizeWhitespace.setDefaults({
// 	'remove-trailing': true,
// 	'remove-indent': true,
// 	'left-trim': true,
// 	'right-trim': true,
// 	// 'break-lines': 80,
// 	// 'indent': 0,
// 	// 'remove-initial-line-feed': true,
// 	// 'tabs-to-spaces': 2,
// });
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
//# sourceMappingURL=utils.js.map