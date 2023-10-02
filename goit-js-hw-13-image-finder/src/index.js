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

// Функция рендера карточек изображений:
function renderImageCard(imagesArr) {
  const markup = imagesArr.map((image) => imageCard(image)).join("");
  refs.gallery.insertAdjacentHTML("beforeend", markup);
}

// Объявление переменных:

let pageNumber = 1;
let currentHits = 0;
let searchQuery = "";

// Функция поиска изображений:

function onSearch(e) {
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
  const imagesResponse = getImages(searchQuery, pageNumber);

  // Вызов цепочки промисов для получения изображений:
  imagesResponse
    .then((images) => {
      // Запись массива изображений из ответа от сервера в переменную:
      const imagesArr = images.data.hits;
      console.log("imagesArr: ", imagesArr);

      // Запись количества найденных изображений в переменную:
      currentHits = images.data.hits.length;
      console.log("currentHits: ", currentHits);

      // Запись общего количества найденных изображений в переменную:
      const totalHits = images.data.totalHits;
      console.log("totalHits: ", totalHits);

      // Проверка на наличие совпадений:
      if (currentHits === 0) {
        return alertNoMatches();
      }

      // Очистка галереи:
      refs.gallery.innerHTML = "";

      // Рендер карточек изображений:
      renderImageCard(imagesArr);

      // Добавление кнопки "Загрузить еще":
      addMoreButton(totalHits);

      // Подписка на событие клика по кнопке "Загрузить еще":
      refs.loadMoreBtn.addEventListener("click", addMoreImagesOnClick);
      // Проверка на последнюю страницу:
      if (totalHits <= pageNumber * 40) {
        refs.loadMoreBtn.classList.remove("is-open");
        warningNoMatches();
      }
    })
    .catch(console.warn);
}

// Функция уведомления об отсутствии совпадений:
function alertNoMatches() {
  Notiflix.Notify.failure(
    "Sorry, there are no images matching your search query. Please try again."
  );
}

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

// Функция добавления изображений при клике на кнопку "Загрузить еще":
function addMoreImagesOnClick() {
  // Увеличение номера страницы на 1 при клике на кнопку "Загрузить еще":
  pageNumber += 1;
  // Запись ответа от сервера в переменную:
  const imagesResponse = getImages(searchQuery, pageNumber);
  // Вызов цепочки промисов для получения изображений:
  imagesResponse
    .then((images) => {
      // Запись массива изображений из ответа от сервера в переменную:
      const imagesArr = images.data.hits;
      // Запись количества найденных изображений в переменную:
      const totalHits = images.data.totalHits;
      // Проверка на наличие совпадений:
      if (currentHits === 0) {
        alertNoMatches();
        return;
      }
      // Рендер карточек изображений:
      renderImageCard(imagesArr);
      // Добавление скролла при клике на кнопку "Загрузить еще":
      const { height: cardHeight } = document
        .querySelector(".gallery")
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2.5,
        behavior: "smooth",
      });
    })
    // Проверка на последнюю страницу:
    .catch(console.warn);
}

// Подписка на событие отправки формы:

refs.searchForm.addEventListener("submit", onSearch);
