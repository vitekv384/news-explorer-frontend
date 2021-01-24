import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor(data) {
    super();
    this.root = document.querySelector('.root');
    this.header = root.querySelector('.header');
    this.sevedArtclesLink = header.querySelector('.nav__item_type_hiden');
  }

  render(props) {
    const { isLoggedIn, userName } = props;
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.header.style.color = this.elementsColor;
    this.header.style.background = this.background;
    this.header.style.boxShadow = this.boxShadow;
    this.savedArticlesButton.classList.add(`${this.headerBtnHiddenClass}`);
    // if (!this.isLoggedIn && this.popupOpenBtnListener) {
    //   this.popupOpenBtnListener(this.loginButton);
    // }
    if (this.isLoggedIn) {
      this.savedArticlesButton.classList.remove(`${this.headerBtnHiddenClass}`);
      this.loginButton.textContent = `${this.userName}`;
      this.loginButton.appendChild(this.logoutIcon);
      this.logoutIcon.classList.remove(`${this.logoutIconClass}_hidden`);
      this.logoutIcon.style['-webkit-filter'] = `${this.filter}`;
      this._setHandlers();
    }
  }
}
