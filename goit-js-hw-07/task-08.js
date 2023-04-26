"use strict";

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const renderButton = document.querySelector('button[data-action="render"]');

const destroyButton = document.querySelector('button[data-action="destroy"]');

const input = document.querySelector("input");

const divContainer = document.getElementById("boxes");

function createBoxes(amount) {
  const container = document.createDocumentFragment();
  const basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    container.appendChild(div);
  }
  divContainer.appendChild(container);
}

function destroyBoxes() {
  divContainer.textContent = "";
}

function random() {
  return Math.floor(Math.random() * 230);
}

function inputAmount (){
  destroyBoxes()
  const amount = input.value;
  createBoxes(amount)
}

renderButton.addEventListener("click", inputAmount);

destroyButton.addEventListener("click", destroyBoxes);

