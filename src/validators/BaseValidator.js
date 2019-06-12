export default class BaseValidator {

  constructor(register, name) {
      this.name = name;
      register.registerValidator(this);
  }

  validate(value, validCfg)  {

  }

}