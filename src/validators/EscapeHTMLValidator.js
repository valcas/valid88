import BaseValidator from './BaseValidator.js';

export default class EscapeHTMLValidator extends BaseValidator {

  constructor(register) {
    super(register, 'escapeHTML');
    this.init();
  }
  
  init()  {
    this.errors = super.init(['ESC_HTML_DEFAULT']);
  }

  validate(value, validCfg, field)  {
    if ((validCfg.value === true) && ((value != null) || (new String(value).trim().length > 0)))  {
        var escaped = this.escape(new String(value));
        if (escaped != value)   {
            if (validCfg.failOnDiff) {
                return this.prepareMessage(this.errors.ESC_HTML_DEFAULT, validCfg, field);
            } else {
                return {changevalue:true, newvalue:escaped}; 
            }
        }
    }
  }

  escape(str)  {

    return str.replace(/[&<>"']/g, function(m) {
        switch (m) {
        case '&':
            return '&amp;';
        case '<':
            return '&lt;';
        case '>':
            return '&gt;';
        case '"':
            return '&quot;';
        default:
            return '&#039;';
        }
    });
      
  }

}
