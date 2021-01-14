export default {
  popups: {
    popup_signin: `
    <div class="popup__content">
        <img src="../images/close.svg" alt="" class="popup__close close">
        <h3 class="popup__title">Вход</h3>
        <form class="popup__form" name="sign_in">
          <label class="popup__label" for="email">Email</label>
          <input type="email" id="email" name="email" class="popup__input popup__input_type_email" minlength="2"
            maxlength="30" required placeholder="Введите почту">
          <span class="popup__error popup__error-email">Неправильный формат email</span>
          <label class="popup__label" for="password">Пароль</label>
          <input type="password" id="password" name="password" class="popup__input popup__input_type_password" required
            placeholder="Введите пароль">
          <span class="popup__error popup__error-password">Неправильный формат пароля</span>
          <button type="submit" name="button" class="button button_theme_blue popup__button"
            disabled="disabled">Войти</button>
          <p class="popup__footer">или <a href="#" class="link popup__footer_link signup">Зарегистрироваться</a></p>
        </form>
      </div>
    `,
  },
};
