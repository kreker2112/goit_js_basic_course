"use strict";

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
  addLightBoxImage(e);
  lighboxClassChangeToOpen();
  // rotateSiblingElementsByArrows();
  console.log()
  window.addEventListener("keydown", handleKeyPress);
}

function lighboxClassChangeToOpen() {
  refs.lightbox.classList.add("is-open");
}

function addLightBoxImage(e) {
  refs.lightboxImage.src = e.target.getAttribute("data-source");
  refs.lightboxImage.alt = e.target.getAttribute("alt");
}

function closeModal() {
  lightboxClassChangeToDefault();
  window.removeEventListener("keydown", handleKeyPress);
}

function lightboxClassChangeToDefault() {
  refs.lightbox.classList.remove("is-open");
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

// function rotateSiblingElementsByArrows(){
//   let imageElementsArray = [];
//   const childrenArray = [...refs.gallery.children];
//   console.log(childrenArray);
//   for(let i = 0; i< childrenArray.length; i+=1){
//     const element = childrenArray[i];
//     const imageElement = element.querySelector('img.gallery__image');
//     return console.log(imageElement);
//   }

// }


//* Callbacks

createImagesGalleryWithPatternString(galleryItems);

//* Event Listeners

refs.gallery.addEventListener("click", openModal);

refs.closeButton.addEventListener("click", closeModal);

refs.lightboxOverlay.addEventListener("click", handleLightboxClick);
