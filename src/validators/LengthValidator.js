import BaseValidator from './BaseValidator.js';

export default class LengthValidator extends BaseValidator {

  constructor(register) {
    super(register, 'minmaxlength');
    this.init();
  }
  
  init()  {
    this.errors = super.init(['LENGTH_MAX','LENGTH_MIN']);
  }    

  validate(value, validCfg, field)  {
    if (value && validCfg.max && (value.length > validCfg.max))  {
      return this.prepareMessage(this.errors.LENGTH_MAX, [["field.name", field.name],["max", validCfg.max]]);
    }    
    if (value && validCfg.min && (value.length < validCfg.min))  {
      return this.prepareMessage(this.errors.LENGTH_MAX, [["field.name", field.name],["min", validCfg.min]]);
    }    
  }

}