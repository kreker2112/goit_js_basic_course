"use strict";

// Импорт стилей из отдельного файла======================================================

import "./../css/main.css";
import "./../css/promise-template.css";
import "./../css/cart-items.css";

// Импорт ссылок на ДОМ-элементы из отдельного файла======================================

import { refs } from "./promise-intro/refs.js";
// import promiseIntroTemplate from "./promise-intro/promise-intro-tmplt.hbs";

// Импорт промиса из отдельного файла=====================================================

import { promise } from "./promise-intro/promise-example.js";

// const promiseIntroRef = document.querySelector(".promise__intro__list");

// promiseIntroRef.insertAdjacentHTML("beforeend", promiseIntroTemplate());

// Примеры работы с промисами из файла promise-example.js================================

refs.beforePromise.textContent = "before promise";

// Определение функции успеха, которая будет передана в метод then.

const onSuccess = (message) => {
  console.log(message);
};

// Определение функции ошибки, которая будет передана в метод catch.

const onError = (error) => {
  console.error(`error: ${error}`);
};

promise.then(onSuccess).catch(onError);

refs.afterPromise.textContent = "after promise";

// Импорт объекта cart из отдельного файла================================================

import { cart } from "./cart-example/cartAsync.js";
import { items } from "./cart-example/cart-items.js";
import cartItemsTemplate from "./cart-example/cart-items-tmplt.hbs";
const cartItemsRef = document.querySelector(".table__body");

function buildCartItems() {
  const markup = items.map((item) => cartItemsTemplate(item)).join("");
  cartItemsRef.insertAdjacentHTML("beforeend", markup);
}

function buildCartItem(item) {
  const markup = cartItemsTemplate(item);
  cartItemsRef.insertAdjacentHTML("beforeend", markup);
}

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
  buildCartItem(item);
}

console.log("items: ", items);

function updateUIAfterRemove(id) {
  console.log(`Removing with item id ${id}`);
}

// Создание и вызов синхронной функции, которая возвращает мгновенный промис без таймаута==============================

function updateUIAfterUpdate(id) {
  buildCartItems(items);
  console.log(
    `Сначала выполняется эта функция мгновенно после всего синхронного кода: Updating with item id ${id}`
  );
}

cart
  .update("fagw34546344tghfh5")
  .then(updateUIAfterUpdate)
  .catch((error) => {
    console.error(error);
  });

// console.log("items: ", items);

// Импорт массивов, объектов и функций из папки racetrack================================================

// import { race } from "./racetrack/racetrack.js";
// import { horse } from "./racetrack/horses.js";
// import { notifyWhenHorseCrossesFinishLine } from "./racetrack/notify-when-horse-finished.js";
// import { notifyWhenHorseCrashed } from "./racetrack/notify-when-horse-crashed.js";
// import { notifyWhenRaceFinished } from "./racetrack/notifyWhenRaceFinished.js";
// import { horses } from "./racetrack/horses.js";
// import { notifyOnWinner } from "./racetrack/notifyOnWinner.js";
// console.table("Horses: ", horses);

// Примеры работы с методами промисов из файла racetrack.js=======================================

// race(horse)
//   .then(notifyWhenHorseCrossesFinishLine)
//   .catch(notifyWhenHorseCrashed);

// Примеры работы с методами промисов all и race из файла racetrack.js=======================================

// Создаем массив промисов, который будет передан в методы all и race.

// const promises = horses.map((horse) => race(horse));

// Метод all принимает массив промисов и возвращает новый промис, который завершится, когда завершатся все промисы в массиве.

// notifyWhenRaceFinished(promises);

// Метод race принимает массив промисов и возвращает новый промис, который завершится, когда завершится первый промис в массиве.

// notifyOnWinner(promises);

// Импорт примера цепного промиса из отдельного файла===============================================

// import { chainedPromiseExample } from "./Chained_promise/chained-promise.js";

// Примеры работы с цепными промисами из файла chained-promise.js=======================================

// chainedPromiseExample
//   .then((value1) => {
//     console.log("resolve 1 - ", value1);
//     return value1 * 2;
//   })
//   .then((value2) => {
//     console.log("resolve 2 - ", value2);

//     return value2 * 3;
//   })
//   .then((value3) => {
//     console.log("resolve 3 - ", value3);
//     return value3 * 4;
//   })
//   .then((value4) => {
//     console.log("resolve 4 - ", value4);
//     throw new Error("Error in resolve 4");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Примеры работы с бэкендом на примере Fetch API из файла fetchFromSwapi.js=======================================

// fetch("https://swapi.dev/api/planets")
//   .then((response) => response.json())
//   .then((data) => console.log(data.results))
//   .catch((error) => console.error(error));

// Импорт файла геолокации из отдельного файла===============================================

// import { getGeoPosition } from "./geo/geo.js";

// Примеры работы с геолокацией из файла geo.js=======================================

// getGeoPosition()
//   .then((position) => {
//     console.log("Geo position: ", position);
//   })
//   .catch((error) => {
//     console.error(err.message);
//   });

// RAF
// window.requestAnimationFrame()
// Браузер делает отрисовку каждые 16 миллисекунд, если вкладка активна. 1 тик, или одна итерация ивент-лупа - это 16 миллисекунд.
// И каждые 16 миллисекунд браузер будет paintJob - отрисовку на экране ставить. Это используется для анимации.
// К примеру мы хотим сделать анимацию, которая будет двигаться с определенной скоростью.
// Для этого определим функцию const animateBar = () => { bar.style.width = 5; }
// И вызовем ее внутри requestAnimationFrame(animateBar)
// Таким образом, браузер будет вызывать функцию animateBar каждые 16 миллисекунд, и внутри этой функции мы можем менять стили,
// и тем самым создавать анимацию. Но эта функция будет вызываться бесконечно, и чтобы остановить ее, нужно внутри функции
// animateBar добавить условие, которое будет проверять, что ширина bar не больше 100, и если больше, то вызывать функцию
// cancelAnimationFrame(animateBar)
