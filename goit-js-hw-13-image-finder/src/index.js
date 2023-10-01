"use strict";

import "./css/styles.css";

import Notiflix from "notiflix";

import { getImages } from "./js/get-images.js";

import imageCard from "./templates/photo-card.hbs";

import { refs } from "./js/refs.js";

function onSearch(e) {
  e.preventDefault();
  const input = document.querySelector(".search-form__input");
  console.log(input.value);
  getImages(input.value)
    .then((images) => {
      const imagesArr = images.data.hits;
      console.log(imagesArr);
      if (imagesArr.length === 0) {
        alertNoMatches();
      }
      refs.gallery.innerHTML = "";
      refs.gallery.insertAdjacentHTML("beforeend", renderImageCard(imagesArr));
    })
    .catch(console.warn);
}

function renderImageCard(imagesArr) {
  const markup = imagesArr.map((image) => imageCard(image)).join("");
  return markup;
}

function alertNoMatches() {
  Notiflix.Notify.failure(
    "Sorry, there are no images matching your search query. Please try again."
  );
}

refs.searchForm.addEventListener("submit", onSearch);
