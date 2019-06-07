import BaseValidator from './BaseValidator.js';

export default class RegExValidator extends BaseValidator {

  constructor(register) {
    super(register, 'regex');
    this.regexPatterns = {alpha:'A-Za-z',numeric:'0-9', latin:'\\u0080-\\uFFFF'};
  }

  constructRegexPattern(types, additionalchars) {

    if ( ! types) {
      return null;
    }
    var pattern = '';

    types.map(type => {
      pattern += this.regexPatterns[type];
    });

    if (additionalchars)  {
      pattern += additionalchars;
    }

    return new RegExp("(^[" + pattern + "]+)$");

  }

  validate(value, validCfg, field)  {
    
    if (value)  {

      var pattern = this.constructRegexPattern(validCfg.value.types, validCfg.additionalchars);
      if (pattern) {
        if ( ! pattern.test(value)) {
          return {result:'fail', message:`the field '${field.name}' contains invalid characters`};
        }
      }
    
    }

  }

}