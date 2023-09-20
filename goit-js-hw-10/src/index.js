'use strict';

import './css/styles.css';

import { Theme } from './js/states_library.js';

import { refs } from './js/refs.js';

import { buildMenu } from './js/menu-builder.js';

function lightTheme() {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function darkTheme() {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
}

function themeSwitcher() {
  localStorage.getItem('theme') === Theme.DARK ? lightTheme() : darkTheme();
}

function themeLoader() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.themeSwitch.checked = true;
    darkTheme();
  }
}

themeLoader();

refs.themeSwitch.addEventListener('change', themeSwitcher);

buildMenu();
