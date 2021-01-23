import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(data) {
    super();
    ({
      popupTemplate: this.popupTemplate,
      popupOpen: this.popupOpen,
      formValidator: this.formValidator,
      mainApi: this.api,
    } = data);
    this.root = document.querySelector('.root');
  }

  open() {
    this._setContent();
    this.closeButton = this.popupElement.querySelector('.popup__close');
    this.signLink = this.popupElement.querySelector('.popup__footer_link');
    this.form = this.popupElement.querySelector('.popup__form');
    this.actionButton = this.popupElement.querySelector('.popup__button');
    if (this.form) { this.formValidator(this.form).validateForm(); }
    this._setHendlers();
  }

  _getTemplate() {
    const template = document.createElement('div');
    template.classList.add('popup');
    template.insertAdjacentHTML('afterbegin', this.popupTemplate);
    return template;
  }

  _setHendlers() {
    super._setListeners([
      {
        element: this.closeButton,
        event: 'click',
        callback: () => this._close(),
      },
      {
        element: this.signLink,
        event: 'click',
        callback: () => { this._close(); this.popupOpen(this.signLink.dataset.popup); },
      },
      {
        element: this.actionButton,
        event: 'click',
        callback: (event) => { this._actionData(event); },
      },
    ]);
  }

  _setContent() {
    this.popupElement = this._getTemplate();
    this.root.appendChild(this.popupElement);
  }

  _actionData(event) {
    event.preventDefault();
    const data = this.formValidator(this.form).getInfo();
    const promise = new Promise((resolve, reject) => {
      const res = this.api[`${event.target.dataset.actionButton}`](data);
      if (res) { resolve(res); } else { reject('Ошибка сервера'); }
    });
    promise.then((data) => {
      if (data === 'autorized') {
        // window.location.reload();
      }
      if (data === 'registred') {
        this._close();
        this.popupOpen('popup_massage');
      }
    });
    // .catch((err) => this.getformInstance().setServerError(err.message));
  }

  _close() {
    this._clearContent();
  }

  _clearContent() {
    this.popupElement.parentNode.removeChild(this.popupElement);
  }
}
