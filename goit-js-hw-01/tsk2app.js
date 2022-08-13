"use strict";

const totalQuantity = 100;

let orderedQuantity = prompt("Введите количество товара");

const approveMessage = "Заказ оформлен, с вами свяжется менеджер";

const falseMessage =
  "На данный момент мы не имеем такого количества данного товара. Можете оставить заявку для бронирования при ближайшей поставке";

const cancelMessage = "Заказ отменён!";

const min = 1;

const max = totalQuantity;

const isOrderedACorrectNumber = orderedQuantity >= 0;

console.log("Заказано до приведения к числу: ", orderedQuantity);

console.log("Тип Заказаного до приведения к числу: ", typeof orderedQuantity);

orderedQuantity = Number(orderedQuantity);

console.log("Заказано после приведения к числу: ", typeof orderedQuantity);

console.log(
  "Является ли введенная информация числом: ",
  isOrderedACorrectNumber
);

if (isOrderedACorrectNumber === false) {
  orderedQuantity = prompt(
    "Введено неверные данные, введите, пожалуйста, количество товара"
  );
  orderedQuantity = Number(orderedQuantity);
}

console.log("Заказано после приведения к числу: ", typeof orderedQuantity);

const isOrderedInRange = orderedQuantity > min && orderedQuantity < max;

console.log("Заказ в пределах остатков: ", isOrderedInRange);

if (orderedQuantity === 0) {
  alert(cancelMessage);
} else if (isOrderedInRange === false) {
  alert(falseMessage);
} else if (isOrderedInRange === true) {
  confirm(approveMessage);
}
console.log("Заказано: ", orderedQuantity);

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе)
//                                                                    и ordered (единиц товара в заказе).
// Сравни эти значения и по результатам выведи:
//     -    Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
//     -    В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.
