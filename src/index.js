import './css/index.css';
import { Popup } from './classes/Popup';

const popupSignup = document.querySelector('#signup');
const popupSignin = document.querySelector('#signin');
const popupMassage = document.querySelector('#massage');
const popupMobile = document.querySelector('#mobile');
const signinOpenButton = document.querySelector('.nav__button_type_unlogin');
const signupOpenButton = document.querySelector('.signup');
const signupButton = document.querySelector('#signup_button');
const signinMobileButton = document.querySelector('.signup_mobile');
const mobilOpenButton = document.querySelector('.header__mobile-button');

const signupPopup = new Popup(popupSignup);
const signinPopup = new Popup(popupSignin);
const massagePopup = new Popup(popupMassage);
const mobilePopup = new Popup(popupMobile);

signinPopup.setEventListener();
signupPopup.setEventListener();
massagePopup.setEventListener();
mobilePopup.setEventListener();

const handlerSignupPopup = () => {
  signupPopup.open();
  signinPopup.close();
};
const handlerSigninPopup = () => {
  signinPopup.open();
  mobilePopup.close();
};
const handlerMassagePopup = () => {
  massagePopup.open();
  signupPopup.close();
};
const handlerMobilePopup = () => {
  mobilePopup.open();
};

signinOpenButton.addEventListener('click', handlerSigninPopup);
signupOpenButton.addEventListener('click', handlerSignupPopup);
signupButton.addEventListener('click', handlerMassagePopup);
mobilOpenButton.addEventListener('click', handlerMobilePopup);
signinMobileButton.addEventListener('click', handlerSigninPopup);
