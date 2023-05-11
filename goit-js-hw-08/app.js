"use strict";

import galleryItems from './gallery-items.js';

//* Refs:

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector(".js-lightbox"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector('.js-lightbox__overlay'),
  lightboxImage: document.querySelector('.js-lightbox__image')
};

//* Functions:

function createImagesGalleryWithPatternString() {
  const container = document.querySelector(".js-gallery");
  galleryItems.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      ` <li class="gallery__item">
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

function addLightboxIsOpen(e) {
  e.preventDefault();
  openModal(e);
}

function openModal(e) {
  lighboxClassChangeToOpen();
  addLightBoxImage(e);
  window.addEventListener("keydown", handleKeyPress);
}

function lighboxClassChangeToOpen (){
  refs.lightbox.classList.remove("lightbox");
  refs.lightbox.classList.add("lightbox.is-open");
}

function addLightBoxImage(e){
refs.lightboxImage.src = e.target.getAttribute('data-source');
refs.lightboxImage.alt = e.target.getAttribute('alt');
}

function closeModal() {
  lightboxClassChangeToDefault();
  window.removeEventListener("keydown", handleKeyPress);
}

function lightboxClassChangeToDefault(){
  refs.lightbox.classList.remove("lightbox.is-open");
  refs.lightbox.classList.add("lightbox");
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

//* Callbacks

createImagesGalleryWithPatternString(galleryItems);

//* Event Listeners

refs.gallery.addEventListener("click", addLightboxIsOpen);

refs.closeButton.addEventListener('click', closeModal);

refs.lightboxOverlay.addEventListener("click", handleLightboxClick);


