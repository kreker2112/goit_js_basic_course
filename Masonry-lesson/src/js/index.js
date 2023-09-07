"use strict";
// Импорт библиотеки Masonry для создания сетки из элементов
import Masonry from "masonry-layout";
// Импорт библиотеки imagesLoaded для проверки загрузки изображений
import imagesLoaded from "imagesloaded";
// Импорт функции makeGridItem для создания элемента сетки
import makeGridItem from "./makeGridItem";
// Импорт стилей
import "./../css/styles.css";

import { galleryItems } from "./gallery-items";

// Создание экземпляра Masonry
const masonryInstance = new Masonry("#gallery", {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  gutter: 10,
  percentPosition: true,
  transitionDuration: "0.15s",
  stagger: 20,
});

// Создание экземпляра imagesLoaded и Отслеживание загрузки изображений

imagesLoaded("#gallery").on("progress", () => {
  console.log("imagesLoadedInstance.onProgress called");
  masonryInstance.layout();
});

// Создание элемента сетки и добавление его в DOM и экземпляр Masonry для его последующей обработки

const newImgUrl =
  "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80.jpg";

const newGridItem = makeGridItem(newImgUrl, "palms");

document.querySelector("#gallery").appendChild(newGridItem);

masonryInstance.appended(newGridItem);

// Создание элементов сетки на основе массива и добавление их в DOM и экземпляр Masonry для их последующей обработки

function addNewImagesToMasonry(imgsArr) {
  // Создание элементов сетки на основе массива
  const elements = imgsArr.map((item) =>
    makeGridItem(item.original, item.description)
  );
  //  Добавление элементов в DOM
  document.querySelector("#gallery").append(...elements);
  // Добавление элементов в экземпляр Masonry
  masonryInstance.addItems(elements);
  // Отслеживание загрузки изображений
  imagesLoaded("#gallery").on(
    "progress",
    masonryInstance.layout.bind(masonryInstance)
  );
}

addNewImagesToMasonry(galleryItems);

// Создание элемента сетки и добавление его в DOM и экземпляр Masonry для его последующей обработки через внешний API

fetch(
  "https://pixabay.com/api/?key=39315149-fad4768c6404d095435b55e12&q=yellow+flowers&image_type=photo&orientation=horizontal&per_page=12"
)
  .then((response) => response.json())
  .then(({ hits }) => {
    // webformatURL - это свойство объекта, которое содержит ссылку на маленькое изображение
    const elements = hits.map((hit) => makeGridItem(hit.webformatURL));
    // Добавление элементов в DOM
    document.querySelector("#gallery").append(...elements);
    // Добавление элементов в экземпляр Masonry для слежения за ними
    masonryInstance.addItems(elements);
    // Отслеживание загрузки изображений
    imagesLoaded("#gallery").on(
      "progress",
      masonryInstance.layout.bind(masonryInstance)
    );
  });
