import './css/index.css';

import Popup from './js/components/Popups';
import Form from './js/components/Form';
import templates from './js/templates/Templates';

const formValidator = (form) => new Form(form);

const popupOpen = (popupName) => {
  new Popup({
    popupTemplate: templates.popups[`${popupName}`],
    popupOpen,
    formValidator,
  }).open();
};

const popupOpenBtnListener = function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    popupOpen(this.dataset.popup);
  });
};

popupOpenBtnListener(document.querySelector('.button_theme_transparent'));
