"use strict";

// Импорт стилей из отдельного файла======================================================

import "./../css/main.css";
import "./../css/header.css";
import "./../css/promise-template.css";

// Импорт ссылок на ДОМ-элементы из отдельного файла======================================

import { refs } from "./promise-intro/refs.js";

// Импорт промиса из отдельного файла=====================================================

import { promise } from "./promise-intro/promise-example.js";

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

// Импорт объекта cart из отдельного файла================================================

import { cart } from "./cart-example/cartAsync.js";
import { items } from "./cart-example/cart-items.js";

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
  console.log(`Updating with item ${item.name} and id ${item.id}`);
}

function updateUIAfterRemove(id) {
  console.log(`Removing with item id ${id}`);
}

console.log("items: ", items);

// Импорт массивов, объектов и функций из папки racetrack================================================

import { race } from "./racetrack/racetrack.js";
import { horse } from "./racetrack/horses.js";
import { notifyWhenHorseCrossesFinishLine } from "./racetrack/notify-when-horse-finished.js";
import { notifyWhenHorseCrashed } from "./racetrack/notify-when-horse-crashed.js";
import { notifyWhenRaceFinished } from "./racetrack/notifyWhenRaceFinished.js";
import { horses } from "./racetrack/horses.js";
import { notifyOnWinner } from "./racetrack/notifyOnWinner.js";
console.table("Horses: ", horses);

// Примеры работы с методами промисов из файла racetrack.js=======================================

race(horse)
  .then(notifyWhenHorseCrossesFinishLine)
  .catch(notifyWhenHorseCrashed);

// Примеры работы с методами промисов all и race из файла racetrack.js=======================================

// Создаем массив промисов, который будет передан в методы all и race.

const promises = horses.map((horse) => race(horse));

// Метод all принимает массив промисов и возвращает новый промис, который завершится, когда завершатся все промисы в массиве.

notifyWhenRaceFinished(promises);

// Метод race принимает массив промисов и возвращает новый промис, который завершится, когда завершится первый промис в массиве.

notifyOnWinner(promises);

// Импорт примера цепного промиса из отдельного файла===============================================

import { chainedPromiseExample } from "./Chained_promise/chained-promise.js";

// Примеры работы с цепными промисами из файла chained-promise.js=======================================

chainedPromiseExample
  .then((value1) => {
    console.log("resolve 1 - ", value1);
    return value1 * 2;
  })
  .then((value2) => {
    console.log("resolve 2 - ", value2);

    return value2 * 3;
  })
  .then((value3) => {
    console.log("resolve 3 - ", value3);
  })
  .then((value4) => {
    console.log("resolve 4 - ", value4);
    throw new Error("Error in resolve 4");
  })
  .catch((error) => {
    console.log(error);
  });
