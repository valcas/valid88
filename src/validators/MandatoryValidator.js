import BaseValidator from './BaseValidator.js';

export default class MandatoryValidator extends BaseValidator {

  constructor(register) {
    super(register, 'mandatory');
    this.init();
  }
  
  init()  {
    this.errors = super.init(['MAND_DEFAULT']);
  }

  validate(value, validCfg, field)  {
    if ((validCfg.value === true) && ((value == null) || (new String(value).trim().length === 0)))  {
        return this.prepareMessage(this.errors.MAND_DEFAULT, validCfg, field);
    }
  }

}
