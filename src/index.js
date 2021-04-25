import menuItemsTemplate from './template.hbs';
import menu from './menu.json';

const darkTheme = 'dark-theme';

const menuItemsList = document.querySelector('.js-menu');
const markup = menuItemsTemplate(menu);

menuItemsList.insertAdjacentHTML('beforeend', markup);

const switchInput = document.querySelector('#theme-switch-toggle');

const bodyPage = document.querySelector('body');

switchInput.addEventListener('change', event => {
  bodyPage.classList.toggle(darkTheme);
  const isDarkTheme = bodyPage.classList.contains(darkTheme);
  localStorage.setItem(darkTheme, isDarkTheme);
});

window.onload = () => {
  setDarkTheme();
};

function setDarkTheme() {
  const isDarkTheme = localStorage.getItem(darkTheme) === 'true';

  if (isDarkTheme) {
    bodyPage.classList.toggle(darkTheme);
    switchInput.checked = isDarkTheme;
  }
}
