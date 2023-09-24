"use strict";

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

// const delay = ms => {
//   // Твой код
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// ====================================================================================================================

// Объявление функции logger, которая выводит в консоль строку в формате "Resolved after ${ms}ms", где ${ms} - это время выполнения промиса.

const logger = (time) => console.log(`Resolved after ${time}ms`);

// Объявление функции delay, которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.

const delay = (ms) => {
  // Объявление промиса с помощью конструктора Promise.
  return new Promise((resolve, reject) => {
    // Вызов функции setTimeout, которая переводит промис в состояние "resolved" через ms миллисекунд.
    setTimeout(() => {
      // Объявление переменной success, которая принимает значение "true" или "false" в зависимости от того, является ли аргумент функции delay числом.
      const success = !isNaN(ms);
      // Если аргумент функции delay не является числом, то промис переходит в состояние "rejected" и возвращает строку "Error!".
      // Если аргумент функции delay является числом, то промис переходит в состояние "resolved" и возвращает значение аргумента функции delay.
      success ? resolve(ms) : reject("Error!");
    }, ms);
  });
};

// Вызовы функции для проверки

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
