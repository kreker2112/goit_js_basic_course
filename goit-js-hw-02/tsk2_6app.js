"use strict";

// Напиши скрипт со следующим функционалом:

//  - При загрузке страницы пользователю предлагается в prompt ввести число.
//      Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
//  - Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
//      пока пользователь не нажмет Cancel в prompt.
//  - После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
//      необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//      Используй цикл for или for...of. После чего в консоль
//      выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число,
// попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно,
// после чего снова пользователю предлагается ввести число в prompt.

let input;

const numbers = [];

let total = 0;

const alertMessage = "Было введено некорректное число, попробуйте еще раз";

let sumMessage;

let inputCheckForCorrect;

const emptyArrayAlert = "Ваш массив пуст!";

do {
  input = prompt("Введите число");
  console.log("input: ", input);
  console.log("type of input: ", typeof input);
  inputCheckForCorrect = input;
  inputCheckForCorrect = Number(inputCheckForCorrect);
  const isACorrectNumber = inputCheckForCorrect >= 0;
  if (isACorrectNumber !== true) {
    alert(alertMessage);
  } else {
    if (input !== null) {
      const inputArray = input.split(" ");
      console.log("input array: ", inputArray);
      numbers.push(inputArray);
      console.log("numbers array: ", numbers);
    }
  }
} while (input !== null);

console.log("numbers array after cycle: ", numbers);

for (let number of numbers) {
  number = Number(number);
  total = total + number;
}

if (total != 0) {
  sumMessage = `Общая сумма чисел равна ${total}`;
  alert(sumMessage);
  console.log("sum of numbers array: ", total);
} else {
  alert(emptyArrayAlert);
}
