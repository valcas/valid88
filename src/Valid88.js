import DateValidator from './validators/DateValidator';
import MandatoryValidator from './validators/MandatoryValidator';
import MaxLengthValidator from './validators/MaxLengthValidator';
import RegExValidator from './validators/RegExValidator';

const JsonConfig = require('json-config').JsonConfig;

export class Valid88  {

  constructor() {
    this.register = new Valid88Register();
  }

  getRegister() {
    return this.register;
  }

  registerValidationSet(validationSet) {
    this.register.registerValidationSet(validationSet);
  }

  validateInput(vSetName, payload, params) {

    var validationSet = this.register.getValidationSet(vSetName);

    var results = {errors:[]};

    for (var i = 0; i < validationSet.fields.length; i++) {

      var fld = validationSet.fields[i];
      var fieldValue = this.getObjectField(payload, fld.field);

      for (var iVal = 0; iVal < fld.validations.length; iVal++) {

        if (fld.validations[iVal].composite) {
          this.doCompositeValidation(fld.validations[iVal], fieldValue, fld, params, results);
        } else {
          var validator = this.register.validators[fld.validations[iVal].name];
          this.doValidation(validator, fieldValue, fld, fld.validations[iVal], params, results);
        }

      }

    }

    return results;

  }

  doCompositeValidation(composite, fieldValue, field, params, results) {

    var compValidations = this.register.getCompositeValidation(composite.name);

    for (var i = 0; i < compValidations.validations.length; i++)  {
      var validator = this.register.validators[compValidations.validations[i].name];
      this.doValidation(validator, fieldValue, field, compValidations.validations[i], params, results);
    }

  }

  doValidation(validator, fieldValue, field, validCfg, params, results)  {
    var result = validator.validate(fieldValue, validCfg, field, params);
    if (result) {
      results.status = 'fail';
      results.errors.push({field:{name:field.name, path:field.field}, message:result.message});
    }
  }

  getValidator(type)  {

  }

  getObjectField(obj, fields) {
    var cfg = new JsonConfig(obj);
    return cfg.getValue(fields.split('.').join('/'), null);
  }

}

class Valid88Register  {

  constructor() {
    this.validators = [];
    this.validationDef = null;
    new DateValidator(this);
    new MandatoryValidator(this);
    new MaxLengthValidator(this);
    new RegExValidator(this);
  }

  registerValidator(validator) {
    this.validators[validator.name] = validator;
  }

  registerValidationSet(validationSet) {
    this.validationDef = validationSet;
  }

  getValidationSet(name)  {
    for (var i = 0; i < this.validationDef.validationsets.length; i++) {
      if (this.validationDef.validationsets[i].name == name)  {
        return this.validationDef.validationsets[i];
      }
    }
  }

  getCompositeValidation(name)  {
    for (var i = 0; i < this.validationDef.compositevalidations.length; i++) {
      if (this.validationDef.compositevalidations[i].name === name) {
        return this.validationDef.compositevalidations[i];
      }
    }
  }

}