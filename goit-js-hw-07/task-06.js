"use strict";

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным. */

// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.getElementById("validation-input");

const textLength = input.getAttribute("data-length");

function addValidClassList() {
  input.classList.remove("invalid");
  input.classList.add("valid");
}

function addInalidClassList() {
  input.classList.remove("valid");
  input.classList.add("invalid");
}

function validationInput() {
  textLength <= input.value.length ? addValidClassList() : addInalidClassList();
}

input.addEventListener("blur", validationInput);

console.log(input);