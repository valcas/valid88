var Valid88 =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Valid88.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/json-config/index.js":
/*!*******************************************!*\
  !*** ./node_modules/json-config/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/json-config */ \"./node_modules/json-config/lib/json-config.js\");\n\n//# sourceURL=webpack://Valid88/./node_modules/json-config/index.js?");

/***/ }),

/***/ "./node_modules/json-config/lib/json-config.js":
/*!*****************************************************!*\
  !*** ./node_modules/json-config/lib/json-config.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){\"use strict\";n.r(t),n.d(t,\"JsonConfig\",function(){return r});class r{constructor(e){this.json=e,this.usedefault={usedefault:!0}}getIndex(e,t){var n=this.getValue(t),r=[];return e.map((e,t)=>{n.map(n=>{e==n&&r.push({index:t,node:n})})}),r}getValue(e,t){if(!e||!this.json)return t;var n=e.split(\"/\"),r=this.getItem(this.json,n,t);return null!=r&&r!=this.usedefault||(r=t),r}getItem(e,t){if(t&&t.length>0&&e){if(t[0].indexOf(\"[\")>-1){var n=this.searchItem(e,t[0]);if(1==t.length)return n;var r=[];return n.map(e=>{var n=this.getItem(e,t.splice(1,t.length));null!=n&&r.push(n)}),r}return 1==t.length?e[t[0]]:this.getItem(e[t[0]],t.splice(1,t.length))}return null}searchItem(e,t){var n=t.split(\"[\"),r=n[1].substring(0,n[1].length-1).split(\"=\"),o=[];return e.map(e=>{e[r[0]]==r[1]&&o.push(e)}),o}}}])});\n\n//# sourceURL=webpack://Valid88/./node_modules/json-config/lib/json-config.js?");

/***/ }),

/***/ "./src/Valid88.js":
/*!************************!*\
  !*** ./src/Valid88.js ***!
  \************************/
/*! exports provided: Valid88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Valid88\", function() { return Valid88; });\n/* harmony import */ var _validators_DateValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators/DateValidator */ \"./src/validators/DateValidator.js\");\n/* harmony import */ var _validators_MandatoryValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validators/MandatoryValidator */ \"./src/validators/MandatoryValidator.js\");\n/* harmony import */ var _validators_MaxLengthValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validators/MaxLengthValidator */ \"./src/validators/MaxLengthValidator.js\");\n/* harmony import */ var _validators_RegExValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validators/RegExValidator */ \"./src/validators/RegExValidator.js\");\n\r\n\r\n\r\n\r\n\r\nconst JsonConfig = __webpack_require__(/*! json-config */ \"./node_modules/json-config/index.js\");\r\n\r\nclass Valid88  {\r\n\r\n  constructor() {\r\n    this.register = new Valid88Register();\r\n  }\r\n\r\n  getRegister() {\r\n    return this.register;\r\n  }\r\n\r\n  registerValidationSet(validationSet) {\r\n    this.register.registerValidationSet(validationSet);\r\n  }\r\n\r\n  validateInput(vSetName, payload, params) {\r\n\r\n    var validationSet = this.register.getValidationSet(vSetName);\r\n\r\n    var results = {errors:[]};\r\n\r\n    for (var i = 0; i < validationSet.fields.length; i++) {\r\n\r\n      var fld = validationSet.fields[i];\r\n      var fieldValue = this.getObjectField(payload, fld.field);\r\n\r\n      for (var iVal = 0; iVal < fld.validations.length; iVal++) {\r\n\r\n        if (fld.validations[iVal].composite) {\r\n          this.doCompositeValidation(fld.validations[iVal], fieldValue, fld, params, results);\r\n        } else {\r\n          var validator = this.register.validators[fld.validations[iVal].name];\r\n          this.doValidation(validator, fieldValue, fld, fld.validations[iVal], params, results);\r\n        }\r\n\r\n      }\r\n\r\n    }\r\n\r\n    return results;\r\n\r\n  }\r\n\r\n  doCompositeValidation(composite, fieldValue, field, params, results) {\r\n\r\n    var compValidations = this.register.getCompositeValidation(composite.name);\r\n\r\n    for (var i = 0; i < compValidations.validations.length; i++)  {\r\n      var validator = this.register.validators[compValidations.validations[i].name];\r\n      this.doValidation(validator, fieldValue, field, compValidations.validations[i], params, results);\r\n    }\r\n\r\n  }\r\n\r\n  doValidation(validator, fieldValue, field, validCfg, params, results)  {\r\n    var result = validator.validate(fieldValue, validCfg, field, params);\r\n    if (result) {\r\n      results.status = 'fail';\r\n      results.errors.push({field:{name:field.name, path:field.field}, message:result.message});\r\n    }\r\n  }\r\n\r\n  getValidator(type)  {\r\n\r\n  }\r\n\r\n  getObjectField(obj, fields) {\r\n    var cfg = new JsonConfig(obj);\r\n    return cfg.getValue(fields.split('.').join('/'), null);\r\n  }\r\n\r\n}\r\n\r\nclass Valid88Register  {\r\n\r\n  constructor() {\r\n    this.validators = [];\r\n    this.validationDef = null;\r\n    new _validators_DateValidator__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\r\n    new _validators_MandatoryValidator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\r\n    new _validators_MaxLengthValidator__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\r\n    new _validators_RegExValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\r\n  }\r\n\r\n  registerValidator(validator) {\r\n    this.validators[validator.name] = validator;\r\n  }\r\n\r\n  registerValidationSet(validationSet) {\r\n    this.validationDef = validationSet;\r\n  }\r\n\r\n  getValidationSet(name)  {\r\n    for (var i = 0; i < this.validationDef.validationsets.length; i++) {\r\n      if (this.validationDef.validationsets[i].name == name)  {\r\n        return this.validationDef.validationsets[i];\r\n      }\r\n    }\r\n  }\r\n\r\n  getCompositeValidation(name)  {\r\n    for (var i = 0; i < this.validationDef.compositevalidations.length; i++) {\r\n      if (this.validationDef.compositevalidations[i].name === name) {\r\n        return this.validationDef.compositevalidations[i];\r\n      }\r\n    }\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/Valid88.js?");

/***/ }),

/***/ "./src/validators/BaseValidator.js":
/*!*****************************************!*\
  !*** ./src/validators/BaseValidator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseValidator; });\nclass BaseValidator {\r\n\r\n  constructor(register, name) {\r\n      this.name = name;\r\n      console.log('register:' + register)\r\n      register.registerValidator(this);\r\n  }\r\n\r\n  validate(value, validCfg)  {\r\n\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://Valid88/./src/validators/BaseValidator.js?");

/***/ }),

/***/ "./src/validators/DateValidator.js":
/*!*****************************************!*\
  !*** ./src/validators/DateValidator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DateValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass DateValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n      super(register, 'date');\r\n      this.getRefDate = this.getRefDate.bind(this);\r\n      this.variants = {\r\n        atleast:this.doAtLeast, atmost:this.doAtMost, before:this.doBefore, after:this.doAfter\r\n      };\r\n  }\r\n\r\n  validate(value, validCfg, field, params)  {\r\n\r\n    if (value)  {\r\n      for (var i = 0; i < validCfg.variants.length; i++)  {\r\n        var variant = validCfg.variants[i];\r\n        var result = this.doValidation(variant, value, validCfg, field, params);\r\n        if (result) {\r\n          return result;\r\n        }\r\n      }\r\n    }\r\n    \r\n  }\r\n\r\n  doValidation(variant, value, validCfg, field, params)  {\r\n\r\n      var func = this.variants[variant.type];\r\n      var result = func.call(this, variant, value, validCfg, field, params);\r\n      if (result) {\r\n        return result;\r\n      }\r\n\r\n  }\r\n\r\n  doAtLeast(variant, value, validCfg, field) {\r\n\r\n    var refDate = this.getRefDate(variant, value);\r\n\r\n    if (refDate.getTime() > (new Date()).getTime()) {\r\n      return {result:'fail', message:`the field '${field.name}' must be at least ${variant.value} ${variant.datepart}`};\r\n    }\r\n\r\n  }\r\n  \r\n  doAtMost(variant, value, validCfg, field) {\r\n\r\n    var refDate = this.getRefDate(variant, value);\r\n\r\n    if (refDate.getTime() < (new Date()).getTime()) {\r\n      return {result:'fail', message:`the field '${field.name}' must be at most ${variant.value} ${variant.datepart}`};\r\n    }\r\n\r\n  }\r\n\r\n  doBefore(variant, value, validCfg, field, params)  {\r\n    var refDate = params[variant.ref];\r\n    if (value.getTime() > refDate.getTime())  {\r\n      return {result:'fail', message:`the field '${field.name}' must be before ${refDate}`};\r\n    }\r\n  }\r\n  \r\n  doAfter(variant, value, validCfg, field, params)  {\r\n    var refDate = params[variant.ref];\r\n    if (value.getTime() < refDate.getTime())  {\r\n      return {result:'fail', message:`the field '${field.name}' must be after ${refDate}`};\r\n    }\r\n  }\r\n  \r\n  getRefDate(variant, value)  {\r\n    var refDate = new Date(value.getTime());\r\n    if (variant.datepart === 'years') {\r\n      refDate.setFullYear(refDate.getFullYear() + variant.value);\r\n    } else if (variant.datepart === 'months') {\r\n      refDate.setMonth(refDate.getMonth() + variant.value);\r\n    } else if (variant.datepart === 'days') {\r\n      refDate.setDate(refDate.getDate() + variant.value);\r\n    }\r\n    return refDate;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/validators/DateValidator.js?");

/***/ }),

/***/ "./src/validators/MandatoryValidator.js":
/*!**********************************************!*\
  !*** ./src/validators/MandatoryValidator.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MandatoryValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass MandatoryValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n    super(register, 'mandatory');\r\n  }\r\n\r\n  validate(value, validCfg, field)  {\r\n    if ((validCfg.value === true) && ((value == null) || (new String(value).trim().length === 0)))  {\r\n        return {result:'fail', message:`the field '${field.name}' must be provided`};\r\n    }\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://Valid88/./src/validators/MandatoryValidator.js?");

/***/ }),

/***/ "./src/validators/MaxLengthValidator.js":
/*!**********************************************!*\
  !*** ./src/validators/MaxLengthValidator.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MaxLengthValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass MaxLengthValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n    super(register, 'maxlength');\r\n  }\r\n\r\n  validate(value, validCfg, field)  {\r\n    if (value && (value.length > validCfg.length))  {\r\n      return {result:'fail', message:`the field '${field.name}' cannot be longer than ${validCfg.length} characters`};\r\n    }    \r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/validators/MaxLengthValidator.js?");

/***/ }),

/***/ "./src/validators/RegExValidator.js":
/*!******************************************!*\
  !*** ./src/validators/RegExValidator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegExValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass RegExValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n    super(register, 'regex');\r\n    this.regexPatterns = {alpha:'A-Za-z',numeric:'0-9', latin:'\\\\u0080-\\\\uFFFF'};\r\n  }\r\n\r\n  constructRegexPattern(types, additionalchars) {\r\n\r\n    if ( ! types) {\r\n      return null;\r\n    }\r\n    var pattern = '';\r\n\r\n    types.map(type => {\r\n      pattern += this.regexPatterns[type];\r\n    });\r\n\r\n    if (additionalchars)  {\r\n      pattern += additionalchars;\r\n    }\r\n\r\n    return new RegExp(\"(^[\" + pattern + \"]+)$\");\r\n\r\n  }\r\n\r\n  validate(value, validCfg, field)  {\r\n    \r\n    if (value)  {\r\n\r\n      var pattern = this.constructRegexPattern(validCfg.value.types, validCfg.additionalchars);\r\n      if (pattern) {\r\n        if ( ! pattern.test(value)) {\r\n          return {result:'fail', message:`the field '${field.name}' contains invalid characters`};\r\n        }\r\n      }\r\n    \r\n    }\r\n\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/validators/RegExValidator.js?");

/***/ })

/******/ });