import BaseComponent from './BaseComponent';

const validator = require('validator');

export default class Form extends BaseComponent {
  constructor(form) {
    super();
    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll('input'));
    this._button = this._form.querySelector('button');
  }

  _validateInputElement(input) {
    console.log(input);
    if (input.id === 'name' && (input.validity.tooShort || input.validity.tooLong)) {
      return false;
    } if (input.id === 'email' && validator.isEmail(input.value)) {
      return false;
    } if (input.id === 'password' && (input.validity.tooShort || input.validity.tooLong)) {
      return false;
    }
    return true;
  }

  _validateForm() {
    this._inputs.forEach((input) => {
      super._setListeners([
        {
          element: input,
          event: 'input',
          callback: () => this._validateInputElement(input),
        },
      ]);
      let valid;
      if (this._inputs.reduce((acc, el) => this._validateInputElement(el) && acc, true)
      ) {
        valid = false;
      }
      if (!valid) {
        this._button.setAttribute('disabled', 'disabled');
      } else {
        this._button.removeAttribute('disabled');
      }
    });
  }
}
