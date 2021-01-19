import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(data) {
    super();
    ({
      popupTemplate: this.popupTemplate,
      popupOpen: this.popupOpen,
      formValidator: this.formValidator,
    } = data);
    this.root = document.querySelector('.root');
  }

  open() {
    this._setContent();
    this.closeButton = this.popupElement.querySelector('.popup__close');
    this.signupButton = this.popupElement.querySelector('.signup');
    this.signinButton = this.popupElement.querySelector('.signin');
    this.form = this.popupElement.querySelector('.popup__form');
    this.formValidator(this.form)._validateForm();
    this._setHendlers();
  }

  _getTemplate() {
    const template = document.createElement('div');
    template.classList.add('popup');
    template.insertAdjacentHTML('afterbegin', this.popupTemplate);
    return template;
  }

  _setHendlers() {
    console.log(this.signupButton);
    super._setListeners([
      {
        element: this.closeButton,
        event: 'click',
        callback: () => this._close(),
      },
      {
        element: this.signupButton,
        event: 'click',
        callback: () => { this._close(); this.popupOpen(this.signupButton.dataset.popup); },
      },
      {
        element: this.signinButton,
        event: 'click',
        callback: () => { this._close(); this.popupOpen(this.signinButton.dataset.popup); },
      },
    ]);
  }

  _setContent() {
    this.popupElement = this._getTemplate();
    this.root.appendChild(this.popupElement);
  }

  _close() {
    this._clearContent();
  }

  _clearContent() {
    this.popupElement.parentNode.removeChild(this.popupElement);
  }
}
