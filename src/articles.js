import './css/articles.css';
import './css/index.css';
import { Popup } from './classes/Popup';

const popupMobile = document.querySelector('#mobile');
const mobilOpenButton = document.querySelector('.header__mobile-button');

const mobilePopup = new Popup(popupMobile);

mobilePopup.setEventListener();

const handlerMobilePopup = () => {
  mobilePopup.open();
};

mobilOpenButton.addEventListener('click', handlerMobilePopup);
