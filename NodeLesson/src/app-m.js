'use strict';

// Node module

// const messageModule = require('./message');

// console.log(messageModule);

// console.log(messageModule.getMessage());

// const { getMessage } = require('./message');

// console.log(getMessage());

// ECMAScript module

// Дефолтный экспорт

import getMessage from './message.js';

// Именованый экспорт

import { fetchArticles, authUser }  from './api.js';

console.log(getMessage());

fetchArticles();

authUser();

// Экспорт объекта

import * as API from './api.js';

console.log(API);