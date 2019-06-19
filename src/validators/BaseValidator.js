const JsonConfig = require('json-config');


export default class BaseValidator {

  constructor(register, name) {
      // this.markers = ['FLD', 'CFG', 'DEF', 'VARIANT', 'PRM', 'VAR'];
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

  prepareMessage(err, validCfg, field, params)  {

    params = (params == null) ? {} : params;
    params.DEF = field;
    params.CFG = validCfg;
    params.VAR = this.register.getVariables();

    var jCfg = new JsonConfig(params);

    var clonedErr = JSON.parse(JSON.stringify(err));
    clonedErr.message = this.substituteFields(clonedErr.message, '', jCfg);

    return {code:clonedErr.code, error:clonedErr};

  }

  substitute(str, items)  {

    for (var i = 0; i < items.length; i++)  {
      str = str.split('${' + items[i][0] + '}').join(items[i][1]);
    }

    return str;

  }

  substituteMarkerTypes(str, jCfg) {
    this.markers.map(marker => {
      str = this.substituteFields(str, marker, jCfg);
    });
    return str;
  }

  substituteFields(str, markerName, jCfg) {

    var startPos = new String(str).indexOf(`$${markerName}{`);

    while (startPos > -1) {
      var endPos = str.indexOf("}", startPos);
      var field = str.substring(startPos + markerName.length + 2, endPos);
      var value = jCfg.getValue(`${field.split('.').join('/')}`, '');
      value = this.substituteFields(value, '', jCfg);
      str = str.substring(0, startPos) + value + str.substring(endPos + 1, str.length);
      startPos = str.indexOf(`$${markerName}{`, startPos);
    }

    return str;

  }

}