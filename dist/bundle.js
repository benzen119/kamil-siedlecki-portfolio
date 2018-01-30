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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(7);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "nav.navbar {\n  background-color: transparent;\n}\n\nnav.navbar .navbar-toggler {\n  border: none !important;\n  outline: none;\n  cursor: pointer;\n}\n\nnav.navbar .navbar-toggler .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#0099ff' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n}\n\nnav.navbar li {\n  margin-right: 17px;\n}\n\nnav.navbar li a {\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: block;\n  padding: 15px;\n  border-bottom: 3px solid transparent;\n}\n\nnav.navbar li a:hover {\n  border-bottom-color: #0099ff;\n  color: #0099ff !important;\n  transition: 210ms ease-in-out;\n}\n\n@media (max-width: 576px) {\n  nav.navbar {\n    background: #ffffff !important;\n  }\n\n  nav.navbar li a {\n    color: #0099ff !important;\n    border: none;\n  }\n}\n\nheader.start-header {\n  background-image: url(" + __webpack_require__(4) + ");\n  background-position: center center;\n  background-size: cover;\n  padding-top: 160px;\n  padding-bottom: calc(160px - 56px);\n  margin-top: -60px;\n  position: relative;\n}\n\nheader.start-header hr {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  height: 3px;\n  width: 13%;\n}\n\nheader.start-header .col-lg-8 {\n  margin-top: 38px;\n  display: none;\n}\n\nheader.start-header h2 {\n  font-size: 32px;\n  margin-top: 30px;\n}\n\nheader.start-header h2 span {\n  color: #0099ff;\n}\n\nheader.start-header p.name {\n  font-weight: 400;\n  font-size: 60px !important;\n}\n\n@media (max-width: 768px) {\n  header.start-header p.name {\n    font-size: 45px !important;\n  }\n}\n\n@media (max-width: 576px) {\n  header.start-header p.name {\n    font-size: 35px !important;\n  }\n}\n\nheader.start-header p.post {\n  font-size: 30px !important;\n}\n\nheader.start-header p.post span {\n  color: #0099ff !important;\n  font-weight: 600;\n}\n\n@media (max-width: 768px) {\n  header.start-header p.post {\n    font-size: 22px !important;\n  }\n}\n\n@media (min-width: 992px) {\n  header.start-header {\n    height: 100vh;\n    min-height: 650px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  header.start-header h2 {\n    font-size: 48px;\n  }\n}\n\n@media (min-width: 1200px) {\n  header.start-header h2 {\n    font-size: 64px;\n  }\n}\n\nsection.about-section {\n  padding: 60px 0 60px 0;\n}\n\nsection.about-section h2 {\n  color: #0099ff;\n  font-size: 26px;\n  font-weight: 400;\n}\n\nsection.about-section hr {\n  background: #0099ff;\n  height: 3px;\n  width: 7%;\n}\n\nsection.about-section .img-profile {\n  border-radius: 50%;\n  margin-bottom: 30px;\n}\n\nsection.about-section p {\n  margin: 40px 0 40px 0;\n}\n\nsection.skills-section {\n  background-color: #0099ff;\n  padding: 60px 0 60px 0;\n}\n\nsection.skills-section h2 {\n  font-size: 26px;\n  font-weight: 400;\n}\n\nsection.skills-section hr {\n  height: 3px;\n  width: 7%;\n}\n\nsection.skills-section .skill-icon {\n  width: 50px;\n  height: 50px;\n  color: #ffffff !important;\n  display: block;\n}\n\n@media (max-width: 576px) {\n  section.skills-section .skill-icon {\n    width: 70px;\n    height: 70px;\n  }\n}\n\n.svg-wrapper {\n  height: 512px;\n  margin: 0 auto;\n  width: 512px;\n}\n\n@media (max-width: 576px) {\n  .svg-wrapper {\n    width: 300px;\n    height: 300px;\n  }\n}\n\n.svg-wrapper svg .rocket {\n  animation: rocketHovering 5s infinite;\n}\n\n.svg-wrapper svg .jetstream {\n  animation: streamHovering 5s infinite;\n  opacity: 1;\n}\n\n.svg-wrapper svg .cloud1 {\n  animation: cloudMoving 6s infinite;\n}\n\n.svg-wrapper svg .cloud2 {\n  animation: cloudMoving 4s infinite;\n}\n\n.svg-wrapper svg .cloud3 {\n  animation: cloudMoving 6s infinite;\n}\n\n.svg-wrapper svg .cloud4 {\n  animation: cloudMoving2 4s infinite;\n}\n\n.svg-wrapper svg .cloud5 {\n  animation: cloudMoving 4s infinite;\n}\n\n.svg-wrapper svg .cloud6 {\n  animation: cloudMoving 5s infinite;\n}\n\n.svg-wrapper svg .cloud7 {\n  animation: cloudMoving2 3s infinite;\n}\n\n.svg-wrapper svg .cloud8 {\n  animation: cloudMoving2 5s infinite;\n}\n\n.svg-wrapper svg .cloud9 {\n  animation: cloudMoving2 7s infinite;\n}\n\n.svg-wrapper svg .cloud10 {\n  animation: cloudMoving 4s infinite;\n}\n\n.svg-wrapper svg .cloud11 {\n  animation: cloudMoving 6s infinite;\n}\n\n.svg-wrapper svg .lower-clouds {\n  animation: lowerCloudMoving 5s infinite;\n}\n\n@keyframes rocketHovering {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-50px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes streamHovering {\n  0% {\n    fill: #0099ff;\n    transform: translateY(0);\n  }\n\n  50% {\n    fill: wh #0099ff;\n    transform: translateY(-50px);\n  }\n\n  100% {\n    fill: #0099ff;\n    transform: translateY(0);\n  }\n}\n\n@keyframes cloudMoving {\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    fill: #0099ff;\n    transform: translateX(5px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes lowerCloudMoving {\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    fill: #0099ff;\n    transform: translateX(-4px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes cloudMoving2 {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    fill: #0099ff;\n    transform: translateY(6px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\nsection.cv-section {\n  background: transparent;\n  padding: 60px 0 60px 0;\n}\n\nsection.cv-section h2 {\n  color: #0099ff;\n  font-size: 26px;\n  font-weight: 400;\n}\n\nsection.cv-section hr {\n  background: #0099ff;\n  height: 3px;\n  width: 7%;\n}\n\nsection.cv-section p.show-cv-title {\n  color: #0099ff;\n  text-transform: uppercase;\n  font-size: 22px;\n  font-weight: 400;\n}\n\nsection.cv-section a.show-cv-link {\n  padding: 15px 90px 15px 90px;\n  border: 4px #0099ff solid;\n  border-radius: 300px;\n  background: #0099ff;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 28px;\n  font-weight: 400;\n  transition: all 0.7s ease;\n}\n\nsection.cv-section a.show-cv-link:hover {\n  text-decoration: none !important;\n  background: transparent;\n  color: #0099ff;\n}\n\n@media (max-width: 576px) {\n  section.cv-section a.show-cv-link {\n    font-size: 20px;\n    padding: 15px 50px 15px 50px;\n  }\n}\n\nsection.contact-section {\n  background: #0099ff;\n  padding: 60px 0 0 0;\n}\n\nsection.contact-section h2 {\n  font-size: 26px;\n  font-weight: 400;\n}\n\nsection.contact-section hr {\n  height: 3px;\n  width: 7%;\n  margin-bottom: 40px;\n}\n\nsection.contact-section p {\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n\nsection.contact-section .contact-item {\n  margin-bottom: 40px;\n}\n\nsection.contact-section .contact-item a.email-form {\n  cursor: pointer;\n}\n\nsection.contact-section .contact-item .contact-img {\n  color: #ffffff !important;\n  width: 50px;\n  height: 50px;\n}\n\n.modal-content .modal-header {\n  border-bottom: none !important;\n}\n\n.modal-content .modal-header p {\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.modal-content .modal-body {\n  margin-top: -30px;\n}\n\n.modal-content .modal-body .message-form {\n  margin-top: 20px;\n}\n\n.modal-content .modal-body .message-form label {\n  font-weight: 600;\n}\n\n.modal-content .modal-body .message-form .submit-btn {\n  cursor: pointer;\n}\n\n.arrow {\n  position: absolute;\n  left: 49%;\n  top: 90%;\n  opacity: 0;\n  transform-origin: 50% 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n\n.arrow-first {\n  animation: arrow-movement 2s ease-in-out infinite;\n}\n\n.arrow-second {\n  animation: arrow-movement 2s 1s ease-in-out infinite;\n}\n\n.arrow:before,\n.arrow:after {\n  background: #0099ff;\n  content: '';\n  display: block;\n  height: 3px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n}\n\n.arrow:before {\n  transform: rotate(45deg) translateX(-23%);\n  transform-origin: top left;\n}\n\n.arrow:after {\n  transform: rotate(-45deg) translateX(23%);\n  transform-origin: top right;\n}\n\n@keyframes arrow-movement {\n  0% {\n    opacity: 0;\n    top: 45%;\n  }\n\n  50% {\n    opacity: 0;\n  }\n\n  70% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/header.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {


$(document).ready(() => {

    $('.welcome-container').fadeIn(1500);
    // $(".p-name-container").show("slide", { direction: "left" }, 1000);
    
    const pageNavbar = $('.navbar');
    const listElement = $('ul.navbar-nav li.nav-item > a');

    listElement.css({ 'color' : '#FFFFFF' });

    $(window).scroll(() => {
            const yOffset = window.pageYOffset;
            const breakpoint = 60;

            if (yOffset > breakpoint) {
                pageNavbar.css({ 'background-color': '#FFFFFF' });
                pageNavbar.css({ 'box-shadow': '0px 3px 30px 0px #e1e1e1' });
                listElement.css({ 'color': '#0099FF' });
                
            } else {
                pageNavbar.css({ 'background-color': 'transparent' });
                listElement.css({ 'color': '#FFFFFF' });
                pageNavbar.css({ 'box-shadow': 'none' });
            }   
    }); 

});

/***/ })
/******/ ]);