"use strict";

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const nameInput = document.querySelector("input");

const nameOutput = document.querySelector("span");

function spanUpdate() {
  if (nameInput.value !== "") {
    return (nameOutput.textContent = nameInput.value);
  }
  nameOutput.textContent = "незнакомец";
}

nameInput.addEventListener("input", spanUpdate);

// Можно ли решить этот пример через тернарный оператор?