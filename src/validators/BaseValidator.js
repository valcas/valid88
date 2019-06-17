export default class BaseValidator {

  constructor(register, name) {
      this.register = register;
      this.name = name;
      register.registerValidator(this);
      this.substitute = this.substitute.bind(this);
  }

  init(keys)  {
    
    var _this = this;
    var errors = {};
    keys.map(key => {
      errors[key] = {code:key, result:'fail', message:_this.register.getErrorMessages()[key]};
    });
    return errors;

  }

  validate(value, validCfg)  {

  }

  prepareMessage(err, items)  {

    var clonedErr = JSON.parse(JSON.stringify(err));
    clonedErr.message = this.substitute(clonedErr.message, items);
    // clonedErr.message = this.substituteFields(clonedErr.message, 'FIELD');
    return {code:clonedErr.code, error:clonedErr};

  }

  substitute(str, items)  {

    for (var i = 0; i < items.length; i++)  {
      str = str.split('${' + items[i][0] + '}').join(items[i][1]);
    }

    return str;

  }

  // substituteFields(str, markerName) {

  //   var startPos = str.indexOf(`$${markerName}{`);

  //   while (startPos > -1) {
  //     var endPos = str.indexOf("}", startPos);
  //     var field = str.substring(startPos + markerName.length + 2, endPos);
  //     var value = this.register.getMessageField([field]);
  //     str = str.substring(startPos) + value + str.substring(endPos + 1, str.length);
  //   }

  //   return str;

  // }

}