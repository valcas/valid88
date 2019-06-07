export default class BaseValidator {

  constructor(register, name) {
      this.name = name;
      console.log('register:' + register)
      register.registerValidator(this);
  }

  validate(value, validCfg)  {

  }

}
