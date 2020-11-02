(function() {
  'use strict';

  const openMenuBtn = document.querySelector('.navigation__button');
  const menu = document.querySelector('.navigation__list');
  const CLICKED_BTN_CLASSNAME = 'navigation__button--clicked';
  const OPENED_MENU_CLASSNAME = 'navigation__list--opened';

  openMenuBtn.addEventListener('click', () => {
    menu.classList.toggle(OPENED_MENU_CLASSNAME);
    openMenuBtn.classList.toggle(CLICKED_BTN_CLASSNAME);
  })
}())