import menuItemsTemplate from './template.hbs';
import menu from './menu.json';

const menuItemsList = document.querySelector('.js-menu');
const markup = menuItemsTemplate(menu);

menuItemsList.insertAdjacentHTML('beforeend', markup);
