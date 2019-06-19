import BaseValidator from './BaseValidator.js';

export default class EmailValidator extends BaseValidator {

  constructor(register) {
    super(register, 'email');
    this.invalidChars = '& ';
    this.init();
  }
  
  init()  {
    this.errors = super.init(['EMAIL_DEFAULT']);
  }
    
  validate(value, validCfg, field)  {
    
    if (value)  {
        
        var testValue = value.trim();
        var atPos = testValue.indexOf('@');
        
        var valid = true;
        
        if (atPos < 1) {
            valid = false;
        } else if (testValue.indexOf('.', atPos) < (atPos + 1)) {
            valid = false;
        } else {
            var pattern = new RegExp("([" + this.invalidChars + "]+)");
            if (pattern.test(testValue)) {
                valid = false;
            }
        }
        
        return valid ? null : this.prepareMessage(this.errors.EMAIL_DEFAULT, validCfg, field);

    }

  }

}