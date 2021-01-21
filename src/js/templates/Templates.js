export default {
  popups: {
    popup_signin: `
      <div class="popup__content">
        <img src="../images/close.svg" alt="" class="popup__close close">
        <h3 class="popup__title">Вход</h3>
        <form class="popup__form" name="sign_in">
          <label class="popup__label" for="email">Email</label>
          <input type="email" id="email" name="email" class="popup__input popup__input_type_email" required placeholder="Введите почту">
          <span class="popup__error popup__error_email"></span>
          <label class="popup__label" for="password">Пароль</label>
          <input type="password" id="password" name="password" class="popup__input popup__input_type_password" required
            minlength="8" maxlength="32"placeholder="Введите пароль">
          <span class="popup__error popup__error_password"></span>
          <button type="submit" name="button" class="button button_theme_blue popup__button"
            disabled="disabled" data-action-button="signin">Войти</button>
          <p class="popup__footer">или <a href="#" class="link popup__footer_link signup" data-popup="popup_signup">Зарегистрироваться</a></p>
        </form>
      </div>
    `,
    popup_signup: `
      <div class="popup__content">
        <img src="../images/close.svg" alt="" class="popup__close close">
        <h3 class="popup__title">Регистрация</h3>
        <form class="popup__form" name="sign_up">
          <label class="popup__label" for="email">Email</label>
          <input type="email" id="email" name="email" class="popup__input popup__input_type_email" required placeholder="Введите почту">
          <span class="popup__error popup__error_email"></span>
          <label class="popup__label" for="password">Пароль</label>
          <input type="password" id="password" name="password" class="popup__input popup__input_type_password" required
          minlength="8"  maxlength="32"  placeholder="Введите пароль">
          <span class="popup__error popup__error_password"></span>
          <label class="popup__label" for="name">Имя</label>
          <input type="text" id="name" name="name" class="popup__input popup__input_type_name" required
            minlength="2" maxlength="10" placeholder="Введите своё имя">
          <span class="popup__error popup__error_name"></span>
          <button id="signup_button" type="submit" name="button" class="button button_theme_blue popup__button"
            disabled="disabled" data-action-button="signup">Зарегистрироваться</button>
          <p class="popup__footer">или <a href="#" class="link popup__footer_link signin" data-popup="popup_signin">Войти</a></p>
        </form>
      </div>
    `,
  },
};
