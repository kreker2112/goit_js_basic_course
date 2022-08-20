"use strict";
// =============================================================================
// Вариант 1

// const findLongestWord = function (string) {
//   const wordsArray = string.split(" ");
//   console.log("Массив, из которого надо выбрать самое длинное слово: ", wordsArray);
//   let longestWord = wordsArray[0];
//   //   console.log(longestWord);
//   for (let i = 1; i < wordsArray.length; i += 1) {
//     if (wordsArray[i].length > longestWord.length) {
//       longestWord = wordsArray[i];
//     }
//   }
//   //   console.log(longestWord);
//   return longestWord;
// };

// =============================================================================
// Вариант 2

// const findLongestWord = function (string) {
//   const wordsArray = string.split(" ");
//   console.log("Массив, из которого надо выбрать самое длинное слово: ", wordsArray);
//   let longestWord = wordsArray[0];
//     for (let word of wordsArray) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//    return longestWord;
// };

// Напиши функцию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log('Самое длинное слово: ', findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log('Самое длинное слово: ', findLongestWord("Google do a roll")); // 'Google'

// console.log('Самое длинное слово: ', findLongestWord("May the force be with you")); // 'force'
