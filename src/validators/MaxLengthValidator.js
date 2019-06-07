import BaseValidator from './BaseValidator.js';

export default class MaxLengthValidator extends BaseValidator {

  constructor(register) {
    super(register, 'maxlength');
  }

  validate(value, validCfg, field)  {
    if (value && (value.length > validCfg.length))  {
      return {result:'fail', message:`the field '${field.name}' cannot be longer than ${validCfg.length} characters`};
    }    
  }

}