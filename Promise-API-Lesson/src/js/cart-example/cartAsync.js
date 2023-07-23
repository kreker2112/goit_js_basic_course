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
  // Объявляем метод отрисовки строки товара, добавленного в массив items объекта cart, в общую таблицу=======================================
  buildCartItem(item) {
    const markup = cartItemTemplate(item);
    return Promise.resolve(
      document
        .getElementById("table-body")
        .insertAdjacentHTML("beforeend", markup)
    );
  },
  // Объявляем метод добавления товара в массив items объекта cart=======================================
  add(itemName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success =
          typeof itemName === "string" &&
          itemName.length > 0 &&
          isNaN(itemName);

        const item = {
          id: uniqid("goods-", "-new"),
          name: itemName,
        };
        success
          ? resolve(this.items.push(item), this.buildCartItem(item))
          : reject((error) => alert(error));
      }, 1000);
    });
  },
  // Объявляем метод удаления товара из массива items объекта cart=======================================
  remove(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const findItem = this.items.find((item) => item.name === name);

        findItem
          ? resolve(
              (this.items = this.items.filter((item) => item.name !== name)),
              this.updateTableAfterRemove(name)
            )
          : reject((error) => alert(error));
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
  updateTableAfterRemove(name) {
    const trArr = [...document.querySelectorAll(".cart__row")];
    trArr.forEach((tr) => {
      if (tr.children[2].textContent === name) {
        tr.remove();
      }
    });
  },
  successAddMsg(itemName) {
    return Promise.resolve(
      setTimeout(() => {
        alert(`Товар ${itemName} добавлен в корзину!`);
      }, 2000)
    );
  },
  successRemoveMsg(name) {
    return Promise.resolve(
      setTimeout(() => {
        alert(`Товар ${name} удален из корзины!`);
      }, 2000)
    );
  },
};
