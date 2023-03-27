// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const categoriesContainer = document.querySelector("ul");

console.log(categoriesContainer);

ingredients.forEach((ingredient) => {
  const container = document.createElement("li");
  container.classList.add([ingredient]);
  container.textContent = [ingredient];

  return categoriesContainer.appendChild(container);
});
