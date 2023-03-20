"use strict";

// array.map()

const numbers = [1, 2, 3, 4, 5];

const products = [
  { id: "id-1", label: "Apples", price: 100, quantity: 50 },
  { id: "id-2", label: "Bananas", price: 120, quantity: 70 },
  { id: "id-3", label: "Lemons", price: 70, quantity: 30 },
];
// const users = [...

const log = (array) => console.table(array);

// / *
//   *map
//   */

// Изменение массива чисел

const doubled = numbers.map((number) => {
  return number * 2;
});

log(numbers);
log(doubled);

// Создание нового массива со значением одинакового свойства из предыдущего массива

const labels = products.map((product) => {
  return product.label;
});

log(labels);

// Создание нового массива на базе оригинального с изменением свойства

const updatedProducts = products.map((product) => {
  return {
    ...product,
    price: product.price * 1.1,
  };
});

log(updatedProducts);