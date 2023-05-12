"use strict";

let index = 0;

import galleryItems from "./gallery-items.js";

//* Refs:

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector(".js-lightbox__overlay"),
  lightboxImage: document.querySelector(".js-lightbox__image"),
};

//* Functions:

function createImagesGalleryWithPatternString() {
  const container = document.querySelector(".js-gallery");
  galleryItems.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      ` <li class="gallery__item js-gallery__item">
      <a
        class="gallery__link"
        href="${item.original}"
      >
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
    );
  });
}

function openModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  refs.lightbox.classList.add("is-open");
  addLightBoxImage(e);
  console.log();
  window.addEventListener("keydown", handleKeyPress);
}

function addLightBoxImage(e) {
  refs.lightboxImage.src = e.target.getAttribute("data-source");
  refs.lightboxImage.alt = e.target.getAttribute("alt");
}

function addLightBoxImageByIndex(index) {
  refs.lightboxImage.src = counter.getImageByIndex(index).source;
  refs.lightboxImage.alt = counter.getImageByIndex(index).alt;
}

function closeModal() {
  refs.lightbox.classList.remove("is-open");

  window.removeEventListener("keydown", handleKeyPress);

  window.removeEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight") {
      return;
    }
    counter.increment();
    counter.getCounterValue();
    counter.getImageByIndex(index);
    addLightBoxImageByIndex(index);
  });

  window.removeEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft") {
      return;
    }
    counter.decrement();
    counter.getCounterValue();
    counter.getImageByIndex(index);
    addLightBoxImageByIndex(index);
  });
}

function handleKeyPress(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeModal();
}

function handleLightboxClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}

// Counter for Index

class Counter {
  constructor(initialValue = 0, step = 1) {
    this.value = initialValue;
    this.step = step;
  }
  increment() {
    this.value += this.step;
  }
  decrement() {
    this.value -= this.step;
  }
  getCounterValue() {
    index = this.value;
  }
  getImageByIndex(index) {
    const imageObjectArray = [];
    const imagesArray = [
      ...refs.gallery.querySelectorAll("img.gallery__image"),
    ];
    for (let i = 0; i < imagesArray.length; i += 1) {
      const imageObject = {
        source: imagesArray[i].getAttribute("data-source"),
        alt: imagesArray[i].getAttribute("alt"),
      };
      imageObjectArray.push(imageObject);
    }
    if (index > imageObjectArray.length) {
      return;
    }
    return imageObjectArray[index];
  }
}

const counter = new Counter();

//* Callbacks

createImagesGalleryWithPatternString(galleryItems);

//* Event Listeners

refs.gallery.addEventListener("click", openModal);

refs.closeButton.addEventListener("click", closeModal);

refs.lightboxOverlay.addEventListener("click", handleLightboxClick);

window.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowRight") {
    return;
  }
  counter.increment();
  counter.getCounterValue();
  counter.getImageByIndex(index);
  addLightBoxImageByIndex(index);
});

window.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowLeft") {
    return;
  }
  counter.decrement();
  counter.getCounterValue();
  counter.getImageByIndex(index);
  addLightBoxImageByIndex(index);
});
