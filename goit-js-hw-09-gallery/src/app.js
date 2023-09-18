'use strict';

// * Index variable:

let index;

// * Styles import:

import './css/styles.css';

// * Gallery items import:

import { galleryItems } from './items/gallery-items.js';

//* Refs import:

import { refs } from './js/refs.js';

// * ImageGenerator class import:

import { ImageGeneratorByIndex } from './js/image_generator_by_index.js';

//* Functions:

// Import createImagesGalleryWithPatternString function:

import { createImagesGalleryWithPatternString } from './js/create_images_with_pattern_string.js';

// Modal functions:

function openModal(e) {
  const targetImgSrc = e.target.src;
  for (let i = 0; i < galleryItems.length; i += 1) {
    if (galleryItems[i].preview === targetImgSrc) {
      index = i;
      break;
    }
  }
  console.log(index);

  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  refs.lightbox.classList.add('is-open');

  addLightBoxImage(e);

  window.addEventListener('keydown', closeModalByEscape);
}

function addLightBoxImage(e) {
  refs.lightboxImage.src = e.target.getAttribute('data-source');
  refs.lightboxImage.alt = e.target.getAttribute('alt');
}

function closeModal() {
  refs.lightbox.classList.remove('is-open');

  window.removeEventListener('keydown', closeModalByEscape);
}

function closeModalByEscape(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}

function closeModalByBackdropClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}

//* Callbacks

createImagesGalleryWithPatternString(galleryItems);

//* Event Listeners

refs.gallery.addEventListener('click', openModal);

refs.closeButton.addEventListener('click', closeModal);

refs.lightboxOverlay.addEventListener('click', closeModalByBackdropClick);

window.addEventListener('keydown', e => {
  const newImage = new ImageGeneratorByIndex(index);
  console.log(e.key, ' :Key');
  console.log('Index: ', index);
  switch (e.key) {
    case 'ArrowRight':
      if (index === galleryItems.length - 1) {
        index = -1;
      }
      index += 1;
      newImage.addImageByIndex(index);
      break;

    case 'ArrowLeft':
      if (index === 0) {
        index = galleryItems.length;
      }
      index -= 1;
      newImage.addImageByIndex(index);
      break;
    default:
      console.log('Not correct key');
  }
});
