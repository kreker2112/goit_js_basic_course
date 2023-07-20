"use strict";

// Импорт стилей из отдельного файла======================================================

import "./../css/main.css";
import "./../css/promise-template.css";
import "./../css/cart-items.css";

// Импорт промиса из отдельного файла=====================================================

import { promiseExample } from "./promise-intro/promise-example.js";

// Примеры работы с промисами из файла promise-example.js================================

// Сначала выполняется:
// Вызов моментального промиса из метода addPromiseIntroMarkup из файла promise-example.js.,
// который возвращает разметку для примера работы с промисами из файла promise-example.js.
// Затем по цепочке вызывает методы then и catch.
// Сначала выполняются асинхронные методы мгновенного вызова промиса после всего синхронного кода, а затем выполняются методы then и catch с таймаутом
// и по его завершению через finally передается синхронный метод addTextAfterPromise.

promiseExample
  .addPromiseIntroMarkup()
  .then(promiseExample.addTextBeforePromise)
  .then(promiseExample.addPromiseText)
  .then(promiseExample.onSuccess)
  .catch(promiseExample.onError)
  .finally(promiseExample.addTextAfterPromise);

// Импорт объекта cart из отдельного файла================================================

import { cart } from "./cart-example/cartAsync.js";

// Примеры работы с промисами из файла cartAsync.js=======================================

// Вызов методов объекта cart из файла cartAsync.js, которые возвращают разметку таблицы с
// товарами из файла items для примера работы с промисами из файла cartAsync.js.

cart.addTableMarkup().then(cart.buildCartItemsMarkup);

// Вызов метода объекта cart из файла cartAsync.js, который добавляет товар в массив items и сразу отрисовывает его в таблице
// И в случае ошибки, выводит ее на экран.

cart.add("Колготки").catch(() => confirm("Wrong input data! Try again!"));

// Примеры работы с методами промисов из файла cartAsync.js=======================================

// const removedItem = cart
//   .remove("fagw34546344tghfh5")
//   .then((id) => {
//     updateUIAfterRemove(id);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function updateUIAfterAdd(item) {
//   buildCartItem(item);
// }

// console.log("items: ", items);

// function updateUIAfterRemove(id) {
//   console.log(`Removing with item id ${id}`);
// }

// Создание и вызов синхронной функции, которая возвращает мгновенный промис без таймаута==============================

// function updateUIAfterUpdate(id) {
//   buildCartItems(items);
//   console.log(
//     `Сначала выполняется эта функция мгновенно после всего синхронного кода: Updating with item id ${id}`
//   );
// }

// cart
//   .update("fagw34546344tghfh5")
//   .then(updateUIAfterUpdate)
//   .catch((error) => {
//     console.error(error);
//   });

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
