'use strict';

import menu from '../menu-list/menu.json';

import menuTemplate from '../templates/menu-item.hbs';

import { refs } from './refs.js';

export function buildMenu() {
  const markup = menu.map(item => menuTemplate(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}
