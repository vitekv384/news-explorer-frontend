import './css/index.css';

import Popup from './js/components/Popups';
import templates from './js/templates/Templates';

const popupOpen = (popupName) => {
  new Popup({
    popupTemplate: templates.popups[`${popupName}`],
  }).open();
};

const popupOpenBtnListener = function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    popupOpen(this.dataset.popup);
  });
};

popupOpenBtnListener(document.querySelector('.button_theme_transparent'));
