(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Valid88", [], factory);
	else if(typeof exports === 'object')
		exports["Valid88"] = factory();
	else
		root["Valid88"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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

eval("module.exports = __webpack_require__(/*! ./lib/json-config */ \"./node_modules/json-config/lib/json-config.js\").JsonConfig;\n\n//# sourceURL=webpack://Valid88/./node_modules/json-config/index.js?");

/***/ }),

/***/ "./node_modules/json-config/lib/json-config.js":
/*!*****************************************************!*\
  !*** ./node_modules/json-config/lib/json-config.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\r\n\tif(true)\r\n\t\tmodule.exports = factory();\r\n\telse {}\r\n})((typeof self !== 'undefined' ? self : this), function() {\r\nreturn /******/ (function(modules) { // webpackBootstrap\r\n/******/ \t// The module cache\r\n/******/ \tvar installedModules = {};\r\n/******/\r\n/******/ \t// The require function\r\n/******/ \tfunction __webpack_require__(moduleId) {\r\n/******/\r\n/******/ \t\t// Check if module is in cache\r\n/******/ \t\tif(installedModules[moduleId]) {\r\n/******/ \t\t\treturn installedModules[moduleId].exports;\r\n/******/ \t\t}\r\n/******/ \t\t// Create a new module (and put it into the cache)\r\n/******/ \t\tvar module = installedModules[moduleId] = {\r\n/******/ \t\t\ti: moduleId,\r\n/******/ \t\t\tl: false,\r\n/******/ \t\t\texports: {}\r\n/******/ \t\t};\r\n/******/\r\n/******/ \t\t// Execute the module function\r\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\r\n/******/\r\n/******/ \t\t// Flag the module as loaded\r\n/******/ \t\tmodule.l = true;\r\n/******/\r\n/******/ \t\t// Return the exports of the module\r\n/******/ \t\treturn module.exports;\r\n/******/ \t}\r\n/******/\r\n/******/\r\n/******/ \t// expose the modules object (__webpack_modules__)\r\n/******/ \t__webpack_require__.m = modules;\r\n/******/\r\n/******/ \t// expose the module cache\r\n/******/ \t__webpack_require__.c = installedModules;\r\n/******/\r\n/******/ \t// define getter function for harmony exports\r\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\r\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\r\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\r\n/******/ \t\t}\r\n/******/ \t};\r\n/******/\r\n/******/ \t// define __esModule on exports\r\n/******/ \t__webpack_require__.r = function(exports) {\r\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\r\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\r\n/******/ \t\t}\r\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\r\n/******/ \t};\r\n/******/\r\n/******/ \t// create a fake namespace object\r\n/******/ \t// mode & 1: value is a module id, require it\r\n/******/ \t// mode & 2: merge all properties of value into the ns\r\n/******/ \t// mode & 4: return value when already ns object\r\n/******/ \t// mode & 8|1: behave like require\r\n/******/ \t__webpack_require__.t = function(value, mode) {\r\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\r\n/******/ \t\tif(mode & 8) return value;\r\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\r\n/******/ \t\tvar ns = Object.create(null);\r\n/******/ \t\t__webpack_require__.r(ns);\r\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\r\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\r\n/******/ \t\treturn ns;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\r\n/******/ \t__webpack_require__.n = function(module) {\r\n/******/ \t\tvar getter = module && module.__esModule ?\r\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\r\n/******/ \t\t\tfunction getModuleExports() { return module; };\r\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\r\n/******/ \t\treturn getter;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// Object.prototype.hasOwnProperty.call\r\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\r\n/******/\r\n/******/ \t// __webpack_public_path__\r\n/******/ \t__webpack_require__.p = \"\";\r\n/******/\r\n/******/\r\n/******/ \t// Load entry module and return exports\r\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/json-config.js\");\r\n/******/ })\r\n/************************************************************************/\r\n/******/ ({\r\n\r\n/***/ \"./src/json-config.js\":\r\n/*!****************************!*\\\r\n  !*** ./src/json-config.js ***!\r\n  \\****************************/\r\n/*! exports provided: JsonConfig */\r\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"JsonConfig\\\", function() { return JsonConfig; });\\nclass JsonConfig {\\r\\n\\r\\n    constructor(json)   {\\r\\n        this.json = json;\\r\\n        this.usedefault = {usedefault:true};\\r\\n    }\\r\\n    \\r\\n    getIndex(parent, path)    {\\r\\n        \\r\\n        var nodes = this.getValue(path);\\r\\n        var result = [];\\r\\n        \\r\\n        parent.map((item, index) => {\\r\\n            nodes.map(node => {\\r\\n                if (item == node) {\\r\\n                    result.push({index:index, node:node});\\r\\n                }\\r\\n            });\\r\\n        });\\r\\n\\r\\n        return result;\\r\\n\\r\\n    }\\r\\n\\r\\n    getValue(path, defaultValue)    {\\r\\n\\r\\n        if (( ! path) || (! this.json))    {\\r\\n            return defaultValue;\\r\\n        }\\r\\n\\r\\n        var pathElements = path.split('/');\\r\\n        var value = this.getItem(this.json, pathElements, defaultValue);\\r\\n        if ((value == null) || (value == this.usedefault))   {\\r\\n            value = defaultValue;\\r\\n        }\\r\\n        return value;\\r\\n\\r\\n    }\\r\\n\\r\\n    getItem(currentNode, pathElements)    {\\r\\n\\r\\n        if (pathElements && (pathElements.length > 0) && currentNode)    {\\r\\n            if (pathElements[0].indexOf('[') > -1)  {\\r\\n                var elements = this.searchItem(currentNode, pathElements[0]);\\r\\n                if (pathElements.length == 1)   {\\r\\n                    return elements;\\r\\n                } else {\\r\\n                    var tmp = [];\\r\\n                    elements.map(element => {\\r\\n                        var ret = this.getItem(element, pathElements.splice(1, pathElements.length));\\r\\n                        if (ret != null )    {\\r\\n                            tmp.push(ret);\\r\\n                        }\\r\\n                    })\\r\\n                    return tmp;\\r\\n                }\\r\\n            }\\r\\n            if (pathElements.length == 1)   {\\r\\n                return currentNode[pathElements[0]];\\r\\n            } else {\\r\\n                return this.getItem(currentNode[pathElements[0]], pathElements.splice(1, pathElements.length));\\r\\n            }\\r\\n        } else {\\r\\n            return null;\\r\\n        }\\r\\n \\r\\n    }\\r\\n\\r\\n    searchItem(currentNode, searchText) {\\r\\n\\r\\n        var path = searchText.split('[');\\r\\n        var search = path[1].substring(0, path[1].length - 1);\\r\\n        var keyValue = search.split('=');\\r\\n        var results = [];\\r\\n\\r\\n        currentNode.map(node => {\\r\\n            if (node[keyValue[0]] == keyValue[1])   {\\r\\n                results.push(node);\\r\\n            }\\r\\n        });\\r\\n\\r\\n        return results;\\r\\n\\r\\n    }\\r\\n\\r\\n}\\n\\n//# sourceURL=webpack://JsonConfig/./src/json-config.js?\");\r\n\r\n/***/ })\r\n\r\n/******/ });\r\n});\n\n//# sourceURL=webpack://Valid88/./node_modules/json-config/lib/json-config.js?");

/***/ }),

/***/ "./src/Valid88.js":
/*!************************!*\
  !*** ./src/Valid88.js ***!
  \************************/
/*! exports provided: Valid88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Valid88\", function() { return Valid88; });\n/* harmony import */ var _messages_ErrorMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/ErrorMessages */ \"./src/messages/ErrorMessages.js\");\n/* harmony import */ var _validators_DateValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validators/DateValidator */ \"./src/validators/DateValidator.js\");\n/* harmony import */ var _validators_MandatoryValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validators/MandatoryValidator */ \"./src/validators/MandatoryValidator.js\");\n/* harmony import */ var _validators_LengthValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validators/LengthValidator */ \"./src/validators/LengthValidator.js\");\n/* harmony import */ var _validators_RegExValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators/RegExValidator */ \"./src/validators/RegExValidator.js\");\n/* harmony import */ var _validators_EmailValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validators/EmailValidator */ \"./src/validators/EmailValidator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst JsonConfig = __webpack_require__(/*! json-config */ \"./node_modules/json-config/index.js\");\r\n\r\nclass Valid88  {\r\n\r\n  constructor() {\r\n    this.register = new Valid88Register();\r\n  }\r\n\r\n  getRegister() {\r\n    return this.register;\r\n  }\r\n\r\n  registerValidationSet(validationSet) {\r\n    this.register.registerValidationSet(validationSet);\r\n  }\r\n\r\n  validateInput(vSetName, payload, params) {\r\n\r\n    var validationSet = this.register.getValidationSet(vSetName);\r\n\r\n    var results = {errors:[]};\r\n\r\n    for (var i = 0; i < validationSet.fields.length; i++) {\r\n\r\n      var fld = validationSet.fields[i];\r\n      var fieldValue = this.getObjectField(payload, fld.field);\r\n\r\n      for (var iVal = 0; iVal < fld.validations.length; iVal++) {\r\n\r\n        if (fld.validations[iVal].composite) {\r\n          this.doCompositeValidation(fld.validations[iVal], fieldValue, fld, params, results);\r\n        } else {\r\n          var validator = this.register.validators[fld.validations[iVal].name];\r\n          this.doValidation(validator, fieldValue, fld, fld.validations[iVal], params, results);\r\n        }\r\n\r\n      }\r\n\r\n    }\r\n\r\n    return results;\r\n\r\n  }\r\n\r\n  doCompositeValidation(composite, fieldValue, field, params, results) {\r\n\r\n    var compValidations = this.register.getCompositeValidation(composite.name);\r\n\r\n    for (var i = 0; i < compValidations.validations.length; i++)  {\r\n      var validator = this.register.validators[compValidations.validations[i].name];\r\n      this.doValidation(validator, fieldValue, field, compValidations.validations[i], params, results);\r\n    }\r\n\r\n  }\r\n\r\n  doValidation(validator, fieldValue, field, validCfg, params, results)  {\r\n    var result = validator.validate(fieldValue, validCfg, field, params);\r\n    if (result) {\r\n      results.status = 'fail';\r\n      results.errors.push({field:{name:field.name, path:field.field}, message:result.error.message, code:result.code});\r\n    }\r\n  }\r\n\r\n  getValidator(type)  {\r\n\r\n  }\r\n\r\n  getObjectField(obj, fields) {\r\n    var cfg = new JsonConfig(obj);\r\n    return cfg.getValue(fields.split('.').join('/'), null);\r\n  }\r\n\r\n  setLocale(locale) {\r\n    this.register.setLocale(locale);\r\n  }\r\n\r\n  setVariables(vars)  {\r\n    this.register.setVariables(vars);\r\n  }\r\n\r\n}\r\n\r\nclass Valid88Register  {\r\n\r\n  constructor() {\r\n    this.errorMessages = new _messages_ErrorMessages__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.validators = [];\r\n    this.validationDef = null;\r\n    this.variables = null;\r\n    new _validators_DateValidator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\r\n    new _validators_MandatoryValidator__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\r\n    new _validators_LengthValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\r\n    new _validators_RegExValidator__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\r\n    new _validators_EmailValidator__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this);\r\n  }\r\n\r\n  getErrorMessages()  {\r\n    return this.errorMessages.messages;\r\n  }\r\n\r\n  getErrorMessage(id) {\r\n    return this.errorMessages.messages[id];\r\n  }\r\n\r\n  getMessageFields()  {\r\n    return this.errorMessages.fields;\r\n  }\r\n\r\n  getMessageField(id)  {\r\n    return this.errorMessages.fields[id];\r\n  }\r\n\r\n  getVariables()  {\r\n    return this.variables;\r\n  }\r\n\r\n  registerValidator(validator) {\r\n    this.validators[validator.name] = validator;\r\n  }\r\n\r\n  registerValidationSet(validationSet) {\r\n    this.validationDef = validationSet;\r\n  }\r\n\r\n  getValidationSet(name)  {\r\n    for (var i = 0; i < this.validationDef.validationsets.length; i++) {\r\n      if (this.validationDef.validationsets[i].name == name)  {\r\n        return this.validationDef.validationsets[i];\r\n      }\r\n    }\r\n  }\r\n\r\n  getCompositeValidation(name)  {\r\n    for (var i = 0; i < this.validationDef.compositevalidations.length; i++) {\r\n      if (this.validationDef.compositevalidations[i].name === name) {\r\n        return this.validationDef.compositevalidations[i];\r\n      }\r\n    }\r\n  }\r\n\r\n  setLocale(locale) {\r\n\r\n    var _this = this;\r\n\r\n    if (locale == null) {\r\n      this.errorMessages.messages = this.errorMessages.defaultMessages;\r\n      this.errorMessages.fields = this.errorMessages.defaultFields;\r\n    } else {\r\n      this.errorMessages.messages = locale.messages;\r\n      this.errorMessages.fields = locale.fields;          \r\n    }\r\n\r\n    Object.keys(this.validators).map(key => {\r\n      _this.validators[key].init();\r\n    });\r\n\r\n  }\r\n\r\n  setVariables(vars)  {\r\n    this.variables = vars;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/Valid88.js?");

/***/ }),

/***/ "./src/messages/ErrorMessages.js":
/*!***************************************!*\
  !*** ./src/messages/ErrorMessages.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorMessages; });\n\r\nclass ErrorMessages  {\r\n    \r\n    constructor()   {\r\n        this.messages = {\r\n            \"MAND_DEFAULT\" :    \"The field '${DEF.label}' must be provided\",\r\n            \"EMAIL_DEFAULT\" :   \"The field '${DEF.label}' isn't a valid email\",\r\n            \"DATE_ATLEAST\" :    \"The field '${DEF.label}' must be at least ${VARIANT.value} ${VARIANT.datepart}\",\r\n            \"DATE_ATMOST\" :     \"The field '${DEF.label}' must be at most ${VARIANT.value} ${VARIANT.datepart}\",\r\n            \"DATE_BEFORE\" :     \"The field '${DEF.label}' must be before ${PRM.refDate}\",\r\n            \"DATE_AFTER\" :      \"The field '${DEF.label}' must be after ${PRM.refDate}\",\r\n            \"REGEX_DEFAULT\" :   \"The field '${DEF.label}' contains invalid characters\",\r\n            \"LENGTH_MAX\" :      \"The field '${DEF.label}' cannot be longer than ${CFG.max} characters`\",\r\n            \"LENGTH_MIN\" :      \"The field '${DEF.label}' must be at least ${CFG.min} characters`\",\r\n        }\r\n        this.fields = {\r\n            \"DATEPART_INTERVALS\": {\"days\":\"days\", \"months\":\"months\", \"years\":\"years\"}\r\n        }\r\n\r\n        this.defaultMessages = this.messages;\r\n        this.defaultFields = this.fields;\r\n    }\r\n\r\n    getMessages()   {\r\n        return this.messages;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/messages/ErrorMessages.js?");

/***/ }),

/***/ "./src/validators/BaseValidator.js":
/*!*****************************************!*\
  !*** ./src/validators/BaseValidator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseValidator; });\nconst JsonConfig = __webpack_require__(/*! json-config */ \"./node_modules/json-config/index.js\");\r\n\r\n\r\nclass BaseValidator {\r\n\r\n  constructor(register, name) {\r\n      // this.markers = ['FLD', 'CFG', 'DEF', 'VARIANT', 'PRM', 'VAR'];\r\n      this.register = register;\r\n      this.name = name;\r\n      register.registerValidator(this);\r\n      this.substitute = this.substitute.bind(this);\r\n  }\r\n\r\n  init(keys)  {\r\n    \r\n    var _this = this;\r\n    var errors = {};\r\n    keys.map(key => {\r\n      errors[key] = {code:key, result:'fail', message:_this.register.getErrorMessages()[key]};\r\n    });\r\n    return errors;\r\n\r\n  }\r\n\r\n  validate(value, validCfg)  {\r\n\r\n  }\r\n\r\n  prepareMessage(err, validCfg, field, params)  {\r\n\r\n    params = (params == null) ? {} : params;\r\n    params.DEF = field;\r\n    params.CFG = validCfg;\r\n    params.VAR = this.register.getVariables();\r\n    params.FLD = this.register.getMessageFields()\r\n\r\n    var jCfg = new JsonConfig(params);\r\n\r\n    var clonedErr = JSON.parse(JSON.stringify(err));\r\n    clonedErr.message = this.substituteFields(clonedErr.message, '', jCfg);\r\n\r\n    return {code:clonedErr.code, error:clonedErr};\r\n\r\n  }\r\n\r\n  substitute(str, items)  {\r\n\r\n    for (var i = 0; i < items.length; i++)  {\r\n      str = str.split('${' + items[i][0] + '}').join(items[i][1]);\r\n    }\r\n\r\n    return str;\r\n\r\n  }\r\n\r\n  substituteMarkerTypes(str, jCfg) {\r\n    this.markers.map(marker => {\r\n      str = this.substituteFields(str, marker, jCfg);\r\n    });\r\n    return str;\r\n  }\r\n\r\n  substituteFields(str, markerName, jCfg) {\r\n\r\n    var startPos = new String(str).indexOf(`$${markerName}{`);\r\n\r\n    while (startPos > -1) {\r\n      var endPos = str.indexOf(\"}\", startPos);\r\n      var field = str.substring(startPos + markerName.length + 2, endPos);\r\n      while (field.indexOf('${') > -1) {\r\n        startPos += field.indexOf(`$${markerName}{`) + 2;\r\n        field = str.substring(startPos + markerName.length + 2, endPos);\r\n      }\r\n      var value = jCfg.getValue(`${field.split('.').join('/')}`, '');\r\n      value = this.substituteFields(value, '', jCfg);\r\n      str = str.substring(0, startPos) + value + str.substring(endPos + 1, str.length);\r\n      startPos = str.indexOf(`$${markerName}{`);\r\n    }\r\n\r\n    return str;\r\n\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/validators/BaseValidator.js?");

/***/ }),

/***/ "./src/validators/DateValidator.js":
/*!*****************************************!*\
  !*** ./src/validators/DateValidator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DateValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass DateValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n      super(register, 'date');\r\n      this.getRefDate = this.getRefDate.bind(this);\r\n      this.variants = {\r\n        atleast:this.doAtLeast, atmost:this.doAtMost, before:this.doBefore, after:this.doAfter\r\n      };\r\n      this.init();\r\n  }\r\n    \r\n  init()  {\r\n    this.errors = super.init(['DATE_ATLEAST','DATE_ATMOST','DATE_BEFORE','DATE_AFTER']);\r\n  }\r\n\r\n  validate(value, validCfg, field, params)  {\r\n\r\n    if (value)  {\r\n      if ( ! (value instanceof Date)) {\r\n        value = new Date(new String(value));\r\n      }\r\n      for (var i = 0; i < validCfg.variants.length; i++)  {\r\n        var variant = validCfg.variants[i];\r\n        var result = this.doValidation(variant, value, validCfg, field, params);\r\n        if (result) {\r\n          return result;\r\n        }\r\n      }\r\n    }\r\n    \r\n  }\r\n\r\n  doValidation(variant, value, validCfg, field, params)  {\r\n\r\n      var func = this.variants[variant.type];\r\n      var result = func.call(this, variant, value, validCfg, field, params);\r\n      if (result) {\r\n        return result;\r\n      }\r\n\r\n  }\r\n\r\n  doAtLeast(variant, value, validCfg, field) {\r\n\r\n    var refDate = this.getRefDate(variant, value);\r\n\r\n    if (refDate.getTime() > (new Date()).getTime()) {\r\n      return this.prepareMessage(this.errors.DATE_ATLEAST, validCfg, field, {VARIANT:variant});\r\n    }\r\n\r\n  }\r\n  \r\n  doAtMost(variant, value, validCfg, field) {\r\n\r\n    var refDate = this.getRefDate(variant, value);\r\n\r\n    if (refDate.getTime() < (new Date()).getTime()) {\r\n      return this.prepareMessage(this.errors.DATE_ATMOST, validCfg, field, {VARIANT:variant});\r\n    }\r\n\r\n  }\r\n\r\n  doBefore(variant, value, validCfg, field, params)  {\r\n    var refDate = params[variant.ref];\r\n    if (value.getTime() > refDate.getTime())  {\r\n      var values = [[\"field.name\", field.name], [\"refDate\", refDate]];\r\n      return this.prepareMessage(this.errors.DATE_BEFORE, validCfg, field, {PRM:{\"refDate\":refDate}});\r\n    }\r\n  }\r\n  \r\n  doAfter(variant, value, validCfg, field, params)  {\r\n    var refDate = params[variant.ref];\r\n    if (value.getTime() < refDate.getTime())  {\r\n      var values = [[\"field.name\", field.name], [\"refDate\", refDate]];\r\n      return this.prepareMessage(this.errors.DATE_AFTER, validCfg, field, {PRM:{\"refDate\":refDate}});\r\n    }\r\n  }\r\n  \r\n  getRefDate(variant, value)  {\r\n    var refDate = new Date(value.getTime());\r\n    if (variant.datepart === 'years') {\r\n      refDate.setFullYear(refDate.getFullYear() + variant.value);\r\n    } else if (variant.datepart === 'months') {\r\n      refDate.setMonth(refDate.getMonth() + variant.value);\r\n    } else if (variant.datepart === 'days') {\r\n      refDate.setDate(refDate.getDate() + variant.value);\r\n    }\r\n    return refDate;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/validators/DateValidator.js?");

/***/ }),

/***/ "./src/validators/EmailValidator.js":
/*!******************************************!*\
  !*** ./src/validators/EmailValidator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmailValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass EmailValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n    super(register, 'email');\r\n    this.invalidChars = '& ';\r\n    this.init();\r\n  }\r\n  \r\n  init()  {\r\n    this.errors = super.init(['EMAIL_DEFAULT']);\r\n  }\r\n    \r\n  validate(value, validCfg, field)  {\r\n    \r\n    if (value)  {\r\n        \r\n        var testValue = value.trim();\r\n        var atPos = testValue.indexOf('@');\r\n        \r\n        var valid = true;\r\n        \r\n        if (atPos < 1) {\r\n            valid = false;\r\n        } else if (testValue.indexOf('.', atPos) < (atPos + 1)) {\r\n            valid = false;\r\n        } else {\r\n            var pattern = new RegExp(\"([\" + this.invalidChars + \"]+)\");\r\n            if (pattern.test(testValue)) {\r\n                valid = false;\r\n            }\r\n        }\r\n        \r\n        return valid ? null : this.prepareMessage(this.errors.EMAIL_DEFAULT, validCfg, field);\r\n\r\n    }\r\n\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/validators/EmailValidator.js?");

/***/ }),

/***/ "./src/validators/LengthValidator.js":
/*!*******************************************!*\
  !*** ./src/validators/LengthValidator.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LengthValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass LengthValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n    super(register, 'minmaxlength');\r\n    this.init();\r\n  }\r\n  \r\n  init()  {\r\n    this.errors = super.init(['LENGTH_MAX','LENGTH_MIN']);\r\n  }    \r\n\r\n  validate(value, validCfg, field)  {\r\n    if (value && validCfg.max && (value.length > validCfg.max))  {\r\n      return this.prepareMessage(this.errors.LENGTH_MAX, validCfg, field);\r\n    }    \r\n    if (value && validCfg.min && (value.length < validCfg.min))  {\r\n      return this.prepareMessage(this.errors.LENGTH_MAX, validCfg, field);\r\n    }    \r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/validators/LengthValidator.js?");

/***/ }),

/***/ "./src/validators/MandatoryValidator.js":
/*!**********************************************!*\
  !*** ./src/validators/MandatoryValidator.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MandatoryValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass MandatoryValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n    super(register, 'mandatory');\r\n    this.init();\r\n  }\r\n  \r\n  init()  {\r\n    this.errors = super.init(['MAND_DEFAULT']);\r\n  }\r\n\r\n  validate(value, validCfg, field)  {\r\n    if ((validCfg.value === true) && ((value == null) || (new String(value).trim().length === 0)))  {\r\n        return this.prepareMessage(this.errors.MAND_DEFAULT, validCfg, field);\r\n    }\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://Valid88/./src/validators/MandatoryValidator.js?");

/***/ }),

/***/ "./src/validators/RegExValidator.js":
/*!******************************************!*\
  !*** ./src/validators/RegExValidator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegExValidator; });\n/* harmony import */ var _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseValidator.js */ \"./src/validators/BaseValidator.js\");\n\r\n\r\nclass RegExValidator extends _BaseValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  constructor(register) {\r\n    super(register, 'regex');\r\n    this.regexPatterns = {alpha:'A-Za-z',numeric:'0-9', latin:'\\\\u0080-\\\\uFFFF'};\r\n    this.init();\r\n  }\r\n  \r\n  init()  {\r\n    this.errors = super.init(['REGEX_DEFAULT']);\r\n  }\r\n\r\n  constructRegexPattern(types, additionalchars) {\r\n\r\n    if ( ! types) {\r\n      return null;\r\n    }\r\n    var pattern = '';\r\n\r\n    types.map(type => {\r\n      pattern += this.regexPatterns[type];\r\n    });\r\n\r\n    if (additionalchars)  {\r\n      pattern += additionalchars;\r\n    }\r\n\r\n    return new RegExp(\"(^[\" + pattern + \"]+)$\");\r\n\r\n  }\r\n\r\n  validate(value, validCfg, field)  {\r\n    \r\n    if (value)  {\r\n\r\n      var pattern = this.constructRegexPattern(validCfg.value.types, validCfg.additionalchars);\r\n      if (pattern) {\r\n        if ( ! pattern.test(value)) {\r\n          return this.prepareMessage(this.errors.REGEX_DEFAULT, validCfg, field);\r\n        }\r\n      }\r\n    \r\n    }\r\n\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://Valid88/./src/validators/RegExValidator.js?");

/***/ })

/******/ });
});