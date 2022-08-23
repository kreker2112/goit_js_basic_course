"use strict";

// =======================================================================
Вариант 1

// const calculateEngravingPrice = function (message, pricePerWord) {
//     let totalPrice = 0;
//     // console.log(message);
//     // console.log(pricePerWord);
//     const messageArray = message.split(" ");
//     // console.log(messageArray);
//     // console.log(messageArray.length);
//     for (let words of messageArray){
//             totalPrice += pricePerWord;
//     }
//     return totalPrice;
//   }

// ========================================================================
// Вариант 2

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let totalPrice;
//   console.log(message);
//   console.log(pricePerWord);
//   const messageArray = message.split(" ");
//   console.log(messageArray);
//   console.log(messageArray.length);
//   totalPrice = messageArray.length * pricePerWord;
//   return totalPrice;
// }
// =========================================================================

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки
// всех слов в строке.

// const calculateEngravingPrice = function(message, pricePerWord) {
//     // твой код
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120
