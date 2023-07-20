"use strict";

// Импорт модуля uniqid для генерации уникальных идентификаторов=========================

import uniqid from "uniqid";

// Импорт ссылок на ДОМ-элементы из отдельного файла======================================

import { refs } from "../refs/refs.js";

// Иморт массива items из отдельного файла=============================================

import { items } from "./cart-items";

// Импорт шаблона разметки тела таблицы из отдельного файла===================================================

import cartItemsTableTemplate from "./cart-items-table-tmplt.hbs";

// Импорт шаблона разметки добавления товара из отдельного файла===================================================

import cartItemTemplate from "./cart-item-tmplt.hbs";

// Объявление объекта cart=============================================================

export const cart = {
  // Добавляем массив items в объект cart из импорта===============================================
  items,
  // Объявляем метод добавления разметки таблицы в объект cart=======================================
  addTableMarkup() {
    const markup = cartItemsTableTemplate();
    return Promise.resolve(
      refs.promiseLesson.insertAdjacentHTML("beforeend", markup)
    );
  },
  // Объявляем метод добавления разметки товаров в таблицу из массива items объекта cart=======================================
  buildCartItemsMarkup() {
    const markup = items.map((item) => cartItemTemplate(item)).join("");
    return Promise.resolve(
      document
        .getElementById("table-body")
        .insertAdjacentHTML("beforeend", markup)
    );
  },
  // Объявляем метод отрисовки строки товара в общую таблицу, добавленного в массив items объекта cart=======================================
  buildCartItem(item) {
    const markup = cartItemTemplate(item);
    document
      .getElementById("table-body")
      .insertAdjacentHTML("beforeend", markup);
  },
  // Объявляем метод добавления товара в массив items объекта cart=======================================
  add(itemName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        const item = {
          id: uniqid("goods-", "-new"),
          name: itemName,
        };
        success
          ? resolve(this.items.push(item), this.buildCartItem(item))
          : reject((error) => confirm(error));
      }, 1000);
    });
  },
  // Объявляем метод удаления товара из массива items объекта cart=======================================
  remove(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.items = this.items.filter((item) => item.id !== id);

        resolve(id);
      }, 300);
    });
  },
  // Пример синхронной функции, которая возвращает мгновенный промис без таймаута
  // Promise.resolve позволяет взять синхронную функцию, по результату которой необходимо вызвать какое-то действие, но она ничего не
  // возвращает и превратить ее в функцию, которая возвращает промис и позволяет внешнему коду использовать ее результат
  // Она выполняется после всего синхронного кода, асинхронно, но мгновенно==============================
  // !!!!!!!!!!! Статический метод Reject в промисах практически никогда не используется, поскольку промис реджектится когда произошла какая-то ошибка
  // !!!!!!!!!!! и в этом случае мы можем использовать статический метод Catch, который отлавливает ошибку и выполняет какой-то код.
  update(id) {
    return Promise.resolve(id);
  },
};
