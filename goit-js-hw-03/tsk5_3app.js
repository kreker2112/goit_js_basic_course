"use strict";

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений
// определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

// Вариант 1

// const getAllPropValues = function (arr, prop) {
//   let propValues = [];
//   for (const product of products) {
//     const productPropertiesArray = Object.keys(product);
//     for (const propertie of productPropertiesArray) {
//       if (propertie === prop) {
//         propValues.push(product[propertie]);
//       }
//     }
//   }
//   return propValues;
// };

// Вариант 2 (Правильный)

const getAllPropValues = function (arr, prop) {
    let propValues = [];
    for (const product of products) {
      propValues.push(product[prop])
    }
    return propValues;
  };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
