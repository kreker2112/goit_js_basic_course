"use strict";

// Импорт промиса из отдельного файла=====================================================

import { promise } from "./promise-intro/promise-example.js";

// Импорт объекта cart из отдельного файла================================================

import { cart } from "./cart-example/cartAsync.js";

// Импорт объектов race и horse из отдельного файла================================================

import { race } from "./racetrack/racetrack.js";
import { horse } from "./racetrack/horses.js";
import { notifyWhenHorseCrossesFinishLine } from "./racetrack/notify-when-horse-finished.js";
import { notifyWhenHorseCrashed } from "./racetrack/notify-when-horse-crashed.js";

// Импорт стилей из отдельного файла======================================================

import "./../css/main.css";
import "./../css/header.css";
import "./../css/promise-template.css";

// Импорт ссылок на ДОМ-элементы из отдельного файла======================================

import { refs } from "./promise-intro/refs.js";

// Примеры работы с промисами из файла promise-template.js================================

refs.beforePromise.textContent = "before promise";

const onSuccess = (message) => {
  console.log(message);
};

const onError = (error) => {
  console.error(`error: ${error}`);
};

promise.then(onSuccess).catch(onError);

refs.afterPromise.textContent = "after promise";

// Примеры работы с методами промисов из файла cartAsync.js=======================================

const addedItem = cart
  .add("Дроид")
  .then((id) => {
    updateUIAfterAdd(id);
  })
  .catch((error) => {
    console.log(error);
  });

const removedItem = cart
  .remove("fagw34546344tghfh5")
  .then((id) => {
    updateUIAfterRemove(id);
  })
  .catch((error) => {
    console.log(error);
  });

function updateUIAfterAdd(item) {
  console.log(`Updating with item id ${item.name}`);
}

function updateUIAfterRemove(id) {
  console.log(`Removing with item id ${id}`);
}

// Примеры работы с методами промисов из файла racetrack.js=======================================

race(horse)
  .then(notifyWhenHorseCrossesFinishLine)
  .catch(notifyWhenHorseCrashed);
