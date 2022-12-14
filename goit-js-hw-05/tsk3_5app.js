"use strict";

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент
// - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

const Storage = function (items) {
  this.items = items;
};

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
 return this.items.push(item);
};

Storage.prototype.removeItem = function (itemName) {
  this.items = this.items.filter((item) => item !== itemName);
 };

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

console.log(storage);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
