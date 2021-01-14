import BaseComponent from './BaseComponent';

export default class Popup {
  constructor(data) {
    ({
      popupTemplate: this.popupTemplate,
    } = data);
    this.root = document.querySelector('.root');
  }

  open() {
    this._setContent();
  }

  _getTemplate() {
    const template = document.createElement('div');
    template.classList.add('popup');
    template.insertAdjacentHTML('afterbegin', this.popupTemplate);

    return template;
  }

  _setContent() {
    this.popupElement = this._getTemplate();
    this.root.appendChild(this.popupElement);
  }
}
