import BaseValidator from './BaseValidator.js';

export default class DateValidator extends BaseValidator {

  constructor(register) {
      super(register, 'date');
      this.getRefDate = this.getRefDate.bind(this);
      this.variants = {
        atleast:this.doAtLeast, atmost:this.doAtMost, before:this.doBefore, after:this.doAfter
      };
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
      return {result:'fail', message:`the field '${field.name}' must be at least ${variant.value} ${variant.datepart}`};
    }

  }
  
  doAtMost(variant, value, validCfg, field) {

    var refDate = this.getRefDate(variant, value);

    if (refDate.getTime() < (new Date()).getTime()) {
      return {result:'fail', message:`the field '${field.name}' must be at most ${variant.value} ${variant.datepart}`};
    }

  }

  doBefore(variant, value, validCfg, field, params)  {
    var refDate = params[variant.ref];
    if (value.getTime() > refDate.getTime())  {
      return {result:'fail', message:`the field '${field.name}' must be before ${refDate}`};
    }
  }
  
  doAfter(variant, value, validCfg, field, params)  {
    var refDate = params[variant.ref];
    if (value.getTime() < refDate.getTime())  {
      return {result:'fail', message:`the field '${field.name}' must be after ${refDate}`};
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