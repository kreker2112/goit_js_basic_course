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

// Определение ссылок на кнопки ДОМ-элемента из отдельного файла======================================

const addItemBtn = document.querySelector('button[data-action="add_item"]');
const deleteItemBtn = document.querySelector(
  'button[data-action="delete_item"]'
);

// Обработчики событий на кнопках ДОМ-элемента из отдельного файла======================================

// Вызов метода объекта cart с промисами из файла cartAsync.js, который добавляет товар в массив items и сразу отрисовывает его в таблице
// И в случае ошибки, выводит ее на экран.

addItemBtn.addEventListener("click", () => {
  const addElement = document.getElementById("add__item__input");
  const itemName = addElement.value;
  cart
    .add(itemName)
    .catch(() => alert("Wrong input data! Try again!"))
    .then(cart.successAddMsg(itemName))
    .finally(() => (addElement.value = ""));
});

// Вызов метода объекта cart с промисами из файла cartAsync.js, который удаляет товар из массива items и сразу отрисовывает новую таблицу
// И в случае ошибки, выводит ее на экран.

deleteItemBtn.addEventListener("click", () => {
  const deleteElement = document.getElementById("delete__item__input");
  const name = deleteElement.value;
  cart
    .remove(name)
    .then(cart.updateTableAfterRemove)
    .catch(() => alert("This product is not in the list! Try again!"))
    .then(cart.successRemoveMsg(name))
    .finally(() => (deleteElement.value = ""));
});

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

// Примеры работы с бэкендом на примере Fetch API из файла fetchFromSwapi.js=======================================

fetch("https://swapi.dev/api/planets")
  .then((response) => response.json())
  .then((data) => console.log(data.results))
  .catch((error) => console.error(error));

// Импорт файла геолокации из отдельного файла===============================================

import { getGeoPosition } from "./geo/geo.js";

// Примеры работы с геолокацией из файла geo.js=======================================

getGeoPosition()
  .then((position) => {
    console.log("Geo position: ", position);
  })
  .catch((error) => {
    console.error(err.message);
  });

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
