import BaseValidator from './BaseValidator.js';

export default class DateValidator extends BaseValidator {

  constructor(register) {
      super(register, 'date');
      this.getRefDate = this.getRefDate.bind(this);
      this.variants = {
        atleast:this.doAtLeast, atmost:this.doAtMost, before:this.doBefore, after:this.doAfter
      };
      this.init();
  }
    
  init()  {
    this.errors = super.init(['DATE_ATLEAST','DATE_ATMOST','DATE_BEFORE','DATE_AFTER']);
  }

  validate(value, validCfg, field, params)  {

    if (value)  {
      if ( ! (value instanceof Date)) {
        value = new Date(new String(value));
      }
      for (var i = 0; i < validCfg.variants.length; i++)  {
        var variant = validCfg.variants[i];
        var result = this.doValidation(variant, value, validCfg, field, params);
        if (result) {
          return result;
        }
      }
    }
    
  }

  doValidation(variant, value, validCfg, field, params)  {

      var func = this.variants[variant.type];
      var result = func.call(this, variant, value, validCfg, field, params);
      if (result) {
        return result;
      }

  }

  doAtLeast(variant, value, validCfg, field) {

    var refDate = this.getRefDate(variant, value);

    if (refDate.getTime() > (new Date()).getTime()) {
      return this.prepareMessage(this.errors.DATE_ATLEAST, validCfg, field, {VARIANT:variant});
    }

  }
  
  doAtMost(variant, value, validCfg, field) {

    var refDate = this.getRefDate(variant, value);

    if (refDate.getTime() < (new Date()).getTime()) {
      return this.prepareMessage(this.errors.DATE_ATMOST, validCfg, field, {VARIANT:variant});
    }

  }

  doBefore(variant, value, validCfg, field, params)  {
    var refDate = params[variant.ref];
    if (value.getTime() > refDate.getTime())  {
      var values = [["field.name", field.name], ["refDate", refDate]];
      return this.prepareMessage(this.errors.DATE_BEFORE, validCfg, field, {PRM:{"refDate":refDate}});
    }
  }
  
  doAfter(variant, value, validCfg, field, params)  {
    var refDate = params[variant.ref];
    if (value.getTime() < refDate.getTime())  {
      var values = [["field.name", field.name], ["refDate", refDate]];
      return this.prepareMessage(this.errors.DATE_AFTER, validCfg, field, {PRM:{"refDate":refDate}});
    }
  }
  
  getRefDate(variant, value)  {
    var refDate = new Date(value.getTime());
    if (variant.datepart === 'years') {
      refDate.setFullYear(refDate.getFullYear() + variant.value);
    } else if (variant.datepart === 'months') {
      refDate.setMonth(refDate.getMonth() + variant.value);
    } else if (variant.datepart === 'days') {
      refDate.setDate(refDate.getDate() + variant.value);
    }
    return refDate;
  }

}