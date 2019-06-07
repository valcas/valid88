"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DateValidator = _interopRequireDefault(require("./validators/DateValidator.js"));

var _MandatoryValidator = _interopRequireDefault(require("./validators/MandatoryValidator.js"));

var _MaxLengthValidator = _interopRequireDefault(require("./validators/MaxLengthValidator.js"));

var _RegExValidator = _interopRequireDefault(require("./validators/RegExValidator.js"));

var _JsonConfig = _interopRequireDefault(require("./JsonConfig.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Valid88 =
/*#__PURE__*/
function () {
  function Valid88() {
    _classCallCheck(this, Valid88);

    this.register = new Valid88Register();
  }

  _createClass(Valid88, [{
    key: "getRegister",
    value: function getRegister() {
      return this.register;
    }
  }, {
    key: "registerValidationSet",
    value: function registerValidationSet(validationSet) {
      this.register.registerValidationSet(validationSet);
    }
  }, {
    key: "validateInput",
    value: function validateInput(setname, payload) {
      var validationSet = this.register.getValidationSet(setname);

      for (var i = 0; i < validationSet.fields.length; i++) {
        var fld = validationSet.fields[i];
        var fieldValue = this.getObjectField(payload, fld.field);
        console.log(fieldValue);

        for (var iVal = 0; iVal < fld.validations.length; iVal++) {
          if (fld.validations[iVal].composite) {
            this.doCompositeValidation(fld.validations[iVal], fieldValue);
          } else {
            console.log('doing validation: ' + fld.validations[iVal].name);
            var validator = this.register.validators[fld.validations[iVal].name];
            this.doValidation(validator, fieldValue, fld.validations[iVal]);
          }
        }
      }
    }
  }, {
    key: "doCompositeValidation",
    value: function doCompositeValidation(composite, fieldValue) {
      var compValidations = this.register.getCompositeValidation(composite.name);

      for (var i = 0; i < compValidations.validations.length; i++) {
        var validator = this.register.validators[compValidations.validations[i].name];
        this.doValidation(validator, fieldValue, compValidations.validations[i]);
      }
    }
  }, {
    key: "doValidation",
    value: function doValidation(validator, fieldValue, validCfg) {
      var result = validator.validate(fieldValue, validCfg);

      if (result === false) {
        console.log('error in validation :' + validCfg.name + " for value :" + fieldValue);
      }
    }
  }, {
    key: "getValidator",
    value: function getValidator(type) {}
  }, {
    key: "getObjectField",
    value: function getObjectField(obj, fields) {
      var cfg = new _JsonConfig["default"](obj);
      var ret = cfg.getValue(fields.split('.').join('/'), null); // var ret = obj;
      // for (var i = 0; i < fields.length; i++) {
      //   ret = ret[fields[i]];
      // }

      return ret;
    }
  }]);

  return Valid88;
}();

exports["default"] = Valid88;

var Valid88Register =
/*#__PURE__*/
function () {
  function Valid88Register() {
    _classCallCheck(this, Valid88Register);

    this.validators = [];
    this.validationDef = null;
    new _DateValidator["default"](this);
    new _MandatoryValidator["default"](this);
    new _MaxLengthValidator["default"](this);
    new _RegExValidator["default"](this);
  }

  _createClass(Valid88Register, [{
    key: "registerValidator",
    value: function registerValidator(validator) {
      this.validators[validator.name] = validator;
    }
  }, {
    key: "registerValidationSet",
    value: function registerValidationSet(validationSet) {
      this.validationDef = validationSet;
    }
  }, {
    key: "getValidationSet",
    value: function getValidationSet(name) {
      for (var i = 0; i < this.validationDef.validationsets.length; i++) {
        if (this.validationDef.validationsets[i].name == name) {
          console.log('here:' + this.validationDef.validationsets[i]);
          return this.validationDef.validationsets[i];
        }
      }
    }
  }, {
    key: "getCompositeValidation",
    value: function getCompositeValidation(name) {
      for (var i = 0; i < this.validationDef.compositevalidations.length; i++) {
        if (this.validationDef.compositevalidations[i].name === name) {
          return this.validationDef.compositevalidations[i];
        }
      }
    }
  }]);

  return Valid88Register;
}();