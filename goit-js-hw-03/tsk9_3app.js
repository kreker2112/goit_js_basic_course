"use strict";

/*
 *Есть два массива names и prices с именами и ценами товаров.
 *Напишите функцию combine(names, prices), которая получает
 *эти два массива и возвращает массив объектов со свойствами name и price.
 */

const names = [
  "Радар",
  "Сканер",
  "Дроид",
  "Захват",
  "Двигатель",
  "Топливный бак",
];

const prices = [1000, 2000, 1500, 2700, 1600, 8000];

const combine = function (names, prices) {
  const productsArr = [];
  for (let i = 0; i < names.length; i += 1) {
    const productObj = {
      name: names[i],
      price: prices[i],
    };
    productsArr.push(productObj);
  }
  return productsArr;
};

const products = combine(names, prices);

console.table(products);

// Вернуть объект всех продуктов со свойствами name: price

// const combine = function (names, prices) {
//   let propName;
//   let price;
//   let productObj;
//   for (let i = 0; i < names.length; i += 1) {
//     propName = names[i];
//     price = prices[i];
//     console.log(propName, price);
//     productObj = {
//       [propName]: price,
//     };
//     console.log(productObj);
//   }

//   return productObj;
// };

// const products = combine(names, prices);

// console.table(products);
