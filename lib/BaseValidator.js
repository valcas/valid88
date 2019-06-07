"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseValidator =
/*#__PURE__*/
function () {
  function BaseValidator(register, name) {
    _classCallCheck(this, BaseValidator);

    this.name = name;
    console.log('register:' + register);
    register.registerValidator(this);
  }

  _createClass(BaseValidator, [{
    key: "validate",
    value: function validate(value, validCfg) {}
  }]);

  return BaseValidator;
}();

exports["default"] = BaseValidator;