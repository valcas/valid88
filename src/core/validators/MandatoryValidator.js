import BaseValidator from './BaseValidator.js';

export default class MandatoryValidator extends BaseValidator {

  constructor(register) {
    super(register, 'mandatory');
  }

  validate(value, validCfg, field)  {
    if ((validCfg.value === true) && ((value == null) || (new String(value).trim().length === 0)))  {
        return {result:'fail', message:`the field '${field.name}' must be provided`};
    }
  }

}
