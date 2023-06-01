"use strict";

const magicButton = document.querySelector(".js-magic-button");
const image = document.querySelector(".unsplash-image");
const homeMenuItem = document.querySelector(".menu-item");

// ================================================================================

// Мутация элемента по нажатию на кнопку

// ======================================

magicButton.addEventListener("click", () => {
  updateImage();
  // setActiveItem();
  toggleMenuItem();
});

// function updateImage() {
//   image.alt = "cool image";
//   image.src =
//     "https://images.unsplash.com/photo-1557820178-20186da06935?ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80";
// }

// ================================================================================

// Изменение инлайн стиля

// =======================

// magicButton.style.backgroundColor = "#34f541";

// ================================================================================

// Работа с classList

// ==================

// console.log(homeMenuItem);

// homeMenuItem.classList.add('active');

// ================================================================================

// Работа с classList через слушатель событий

// ==========================================

function setActiveItem() {
  homeMenuItem.classList.add("active");
}

function toggleMenuItem() {
  homeMenuItem.classList.toggle("active");
}

// ================================================================================

// Работа с атрибутами

// ===================

function updateImage() {
  image.setAttribute("alt", "cool image");
  image.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1557820178-20186da06935?ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80"
  );
}

// Свои кастомные атрибуты добавлять только через data-'атрибут'
// Чтобы получить доступ к data-атрибуту, необходимо использовать elem.dataset 
// .dataset Хранит набор всех кастомных data-атрибутов
// Чтобы выбрать элемент документа по дата атрибуту, необходимо прописать 
// const button = document.querySelector("button[data-action=magic]");
