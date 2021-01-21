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
    const error = input.parentNode.querySelector(`.popup__error_${input.id}`);
    if (input.id === 'name' && (input.validity.tooShort || input.validity.tooLong)) {
      error.textContent = 'Введите от 2 до 12 символов';
      return false;
    } if (input.id === 'email' && !validator.isEmail(input.value) && input.value !== '') {
      error.textContent = 'Неправильный формат email';
      return false;
    } if (input.id === 'password' && (input.validity.tooShort || input.validity.tooLong)) {
      error.textContent = 'Введите от 8 до 32 символов';
      return false;
    }
    error.textContent = '';
    return input.validity.valid;
  }

  validateForm() {
    this._inputs.forEach((input) => {
      super._setListeners([
        {
          element: input,
          event: 'input',
          callback: () => {
            this._validateInputElement(input);
            let valid;
            if (this._inputs.reduce((acc, el) => this._validateInputElement(el) && acc, true)
            ) {
              valid = true;
            }
            if (!valid) {
              this._button.setAttribute('disabled', '');
            } else {
              this._button.removeAttribute('disabled');
            }
          },
        },
      ]);
    });
  }

  getInfo() {
    return Array.from(this._inputs).map((el) => el);
  }
}
