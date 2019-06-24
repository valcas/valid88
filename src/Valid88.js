import ErrorMessages from './messages/ErrorMessages';
import DateValidator from './validators/DateValidator';
import MandatoryValidator from './validators/MandatoryValidator';
import LengthValidator from './validators/LengthValidator';
import RegExValidator from './validators/RegExValidator';
import EmailValidator from './validators/EmailValidator';
import EscapeHTMLValidator from './validators/EscapeHTMLValidator';

const JsonConfig = require('json-config');

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

    let ctx = new V88Context({vSetName:vSetName, payload:payload, params:params});

    for (var i = 0; i < validationSet.fields.length; i++) {

      ctx.context.fld = validationSet.fields[i];
      ctx.context.fieldValue = this.getObjectField(ctx.context.payload, ctx.context.fld.field);
      this.doValidationTypes(ctx, ctx.context.fld.validations);
      if (ctx.context.fld.validationsServer)  {
        this.doValidationTypes(ctx, ctx.context.fld.validationsServer);
      }

    }

    return ctx.results;

  }

  doValidationTypes(ctx, validations) {

    for (var iVal = 0; iVal < validations.length; iVal++) {

      if (validations[iVal].composite) {
        this.doCompositeValidation(ctx, validations[iVal]);
      } else {
        var validator = this.register.validators[validations[iVal].name];
        this.doValidation(ctx, validator, validations[iVal]);
      }

    }

  }

  doCompositeValidation(ctx, composite) {

    var compValidations = this.register.getCompositeValidation(composite.name);

    for (var i = 0; i < compValidations.validations.length; i++)  {
      var validator = this.register.validators[compValidations.validations[i].name];
      this.doValidation(ctx, validator, compValidations.validations[i]);
    }

  }

  doValidation(ctx, validator, validCfg)  {
    var result = validator.validate(ctx.context.fieldValue, validCfg, ctx.context.fld, ctx.context.params);
    if (result) {
      if (result.changevalue) {
        ctx.changeValue(result);
      } else {
        ctx.addError(result);
      }
    }
  }

  getValidator(type)  {

  }

  getObjectField(obj, fields) {
    var cfg = new JsonConfig(obj);
    return cfg.getValue(fields.split('.').join('/'), null);
  }

  setLocale(locale) {
    this.register.setLocale(locale);
  }

  setVariables(vars)  {
    this.register.setVariables(vars);
  }

  getClientOnlyValidations()  {
    var vSets = JSON.parse(JSON.stringify(this.register.getValidationSets()));

    for (let vs = 0; vs < vSets.validationsets.length; vs++)  {
      let vSet = vSets.validationsets[vs];
      for (let f = 0; f < vSet.fields.length; f++)  {
        let field = vSet.fields[f];
        if (field.validationsServer) {
          delete field.validationsServer;
        }
      }
    }

    for (let cv = 0; cv < vSets.compositevalidations.length; cv++)  {
      let validation = vSets.compositevalidations[cv];
      if (validation.validationsServer) {
        delete validation.validationsServer;
      }
    }

    return vSets;
  }

}

class V88Context  {

  constructor(cxt) {
    this.results = {errors:[]};
    this.context = cxt;
  }

  addError(result)  {
    this.results.status = 'fail';
    this.results.errors.push({field:{name:this.context.fld.name, path:this.context.fld.field}, message:result.error.message, code:result.code});
  }

  changeValue(result) {
    var cfg = new JsonConfig(this.context.payload);
    cfg.setValue(this.context.fld.field.split('.').join('/'), result.newvalue);
  }

}

class Valid88Register  {

  constructor() {
    this.errorMessages = new ErrorMessages();
    this.validators = [];
    this.validationDef = null;
    this.variables = null;
    new DateValidator(this);
    new MandatoryValidator(this);
    new LengthValidator(this);
    new RegExValidator(this);
    new EmailValidator(this);
    new EscapeHTMLValidator(this);
  }

  getErrorMessages()  {
    return this.errorMessages.messages;
  }

  getErrorMessage(id) {
    return this.errorMessages.messages[id];
  }

  getMessageFields()  {
    return this.errorMessages.fields;
  }

  getMessageField(id)  {
    return this.errorMessages.fields[id];
  }

  getVariables()  {
    return this.variables;
  }

  registerValidator(validator) {
    this.validators[validator.name] = validator;
  }

  registerValidationSet(validationSet) {
    this.validationDef = validationSet;
  }

  getValidationSets() {
    return this.validationDef;
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

  setLocale(locale) {

    var _this = this;

    if (locale == null) {
      this.errorMessages.messages = this.errorMessages.defaultMessages;
      this.errorMessages.fields = this.errorMessages.defaultFields;
    } else {
      this.errorMessages.messages = locale.messages;
      this.errorMessages.fields = locale.fields;          
    }

    Object.keys(this.validators).map(key => {
      _this.validators[key].init();
    });

  }

  setVariables(vars)  {
    this.variables = vars;
  }

}