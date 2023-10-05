"use strict";

// Импорт стилей:

import "./css/styles.css";

// Импорт библиотеки для уведомлений:

import Notiflix from "notiflix";

// Импорт функции для получения изображений:

import { getImages } from "./js/get-images.js";

// Импорт шаблона карточки изображения:

import imageCard from "./templates/photo-card.hbs";

// Импорт ссылок на элементы:

import { refs } from "./js/refs.js";

// Импорт библиотеки для модального окна:

import SimpleLightbox from "simplelightbox";

// Импорт стилей для модального окна:

import "simplelightbox/dist/simple-lightbox.min.css";

// // Импорт библиотеки для ленивой загрузки:

import { lazyLoad } from "./js/lazy-load.js";

// ========================================================================================

// Функция рендера карточек изображений:
function renderImageCard(imagesArr) {
  const markup = imagesArr.map((image) => imageCard(image)).join("");
  refs.gallery.insertAdjacentHTML("beforeend", markup);
}

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

// Объявление переменных:

let pageNumber = 1;
let currentHits = 0;
let searchQuery = "";

// Функция поиска изображений:

async function onSearch(e) {
  e.preventDefault();

  // Запись значения инпута в переменную:
  searchQuery = e.currentTarget.searchQuery.value;

  // Запись количества страниц в переменную:
  pageNumber = 1;

  // Проверка на пустой запрос:
  if (searchQuery === "") {
    return Notiflix.Notify.failure("Please enter a search query!");
  }

  // Запись ответа от сервера в переменную:
  const imagesResponse = await getImages(searchQuery, pageNumber);

  // Запись количества найденных изображений в переменную:
  currentHits = imagesResponse.data.hits.length;
  console.log("currentHits: ", currentHits);

  // Запись общего количества найденных изображений в переменную:
  const totalHits = imagesResponse.data.totalHits;
  console.log("totalHits: ", totalHits);

  // Запись массива изображений из ответа от сервера в переменную:
  const imagesArr = imagesResponse.data.hits;
  console.log("imagesArr: ", imagesArr);

  // Добавление кнопки "Загрузить еще":
  addMoreButton(totalHits);

  try {
    // Вызов функции уведомления об успешном поиске:
    successSearch(totalHits);

    // Проверка на наличие совпадений:
    checkNoMatches();

    // Очистка галереи:
    refs.gallery.innerHTML = "";

    // Рендер карточек изображений:
    renderImageCard(imagesArr);

    // Добавление модального окна:
    lightbox.refresh();

    // Подписка на событие клика по кнопке "Загрузить еще":
    refs.loadMoreBtn.addEventListener("click", addMoreImagesOnClick);

    // Проверка на последнюю страницу:
    checkForLastPage(totalHits);

    // Активация ленивой загрузки:
    activateLazyLoad();
  } catch (error) {
    console.log(error);
  }
}

// Функция уведомления об успешном поиске:
function successSearch(totalHits) {
  if (totalHits > 0) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
  }
}

// Функция уведомления об отсутствии совпадений:
function checkNoMatches() {
  if (currentHits === 0) {
    return Notiflix.Notify.failure(
      "Sorry, there are no images matching your search query. Please try again."
    );
  }
}

// Функция уведомления о достижении последней страницы:
function warningNoMatches() {
  Notiflix.Notify.warning(
    "We're sorry, but you've reached the end of search results."
  );
}

// Функция добавления кнопки "Загрузить еще":
function addMoreButton(totalHits) {
  if (totalHits < 40) {
    return;
  }
  refs.loadMoreBtn.classList.add("is-open");
}

// Функция проверки на последнюю страницу:
function checkForLastPage(totalHits) {
  if (totalHits <= pageNumber * 40) {
    refs.loadMoreBtn.classList.remove("is-open");
    warningNoMatches();
  }
}

// ========================================================================================

// Функция добавления изображений при клике на кнопку "Загрузить еще":
async function addMoreImagesOnClick() {
  // Увеличение номера страницы на 1 при клике на кнопку "Загрузить еще":
  pageNumber += 1;

  // Запись ответа от сервера в переменную:
  const imagesResponse = await getImages(searchQuery, pageNumber);

  // Запись массива изображений из ответа от сервера в переменную:
  const imagesArr = imagesResponse.data.hits;
  console.log("currentHits after LoadMore: ", currentHits * pageNumber);

  // Запись количества найденных изображений в переменную:
  const totalHits = imagesResponse.data.totalHits;
  console.log("totalHits after LoadMore: ", totalHits);

  try {
    // Проверка на наличие совпадений:
    checkNoMatches(currentHits);

    // Рендер карточек изображений:
    renderImageCard(imagesArr);

    // Добавление модального окна:
    lightbox.refresh();

    // Проверка на последнюю страницу:
    checkForLastPage(totalHits);

    // Добавление скролла при клике на кнопку "Загрузить еще":
    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2.5,
      behavior: "smooth",
    });

    // Активация ленивой загрузки:
    activateLazyLoad();
  } catch (error) {
    console.log(error);
  }
}

// Подписка на событие отправки формы поиска:

refs.searchForm.addEventListener("submit", onSearch);

// ========================================================================================

// Функция активации ленивой загрузки:
function activateLazyLoad() {
  // Запись всех изображений в переменную:
  const images = document.querySelectorAll(".gallery img");

  // Применение ленивой загрузки к каждому изображению:
  images.forEach((image) => {
    lazyLoad(image);
  });
}
