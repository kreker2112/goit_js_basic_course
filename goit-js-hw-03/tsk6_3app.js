"use strict";

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение
// свойства name). Возвращает общую стоимость продукта (цена * количество).

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
  for (const product of allProdcuts) {
    const propertiesOfProduct = Object.keys(product);
    const nameOfProduct = product[propertiesOfProduct[0]];
    const priceOfProduct = product[propertiesOfProduct[1]];
    const quantityOfProduct = product[propertiesOfProduct[2]];
    if (nameOfProduct === productName) {
      totalPrice = priceOfProduct * quantityOfProduct;
    }
  }
  return `Total price of product "${productName}" is "${totalPrice}"`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
