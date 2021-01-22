import './css/index.css';

import Popup from './js/components/Popup';
import Form from './js/components/Form';
import templates from './js/templates/Templates';
import MainApi from './js/api/MainApi';

const formValidator = (form) => new Form(form);
const config = {
  baseUrl: 'https://api.news-app.tk',
};

const mainApi = new MainApi(config);

const popupOpen = (popupName) => {
  new Popup({
    popupTemplate: templates.popups[`${popupName}`],
    popupOpen,
    formValidator,
    mainApi,
  }).open();
};

const popupOpenBtnListener = function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    popupOpen(this.dataset.popup);
  });
};

popupOpenBtnListener(document.querySelector('.button_theme_transparent'));
