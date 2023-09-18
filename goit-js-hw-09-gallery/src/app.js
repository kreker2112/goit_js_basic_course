'use strict';

import { galleryItems } from './gallery-items.js';

import './styles.css';

let index;

// * ImageGenerator
class ImageGeneratorByIndex {
  getImageByIndex(index) {
    const imageObjectArray = [];
    const imagesArray = [
      ...refs.gallery.querySelectorAll('img.gallery__image'),
    ];
    for (let i = 0; i < imagesArray.length; i += 1) {
      const imageObject = {
        source: imagesArray[i].getAttribute('data-source'),
        alt: imagesArray[i].getAttribute('alt'),
      };
      imageObjectArray.push(imageObject);
    }

    return imageObjectArray[index];
  }
  addImageByIndex(index) {
    refs.lightboxImage.src = this.getImageByIndex(index).source;
    refs.lightboxImage.alt = this.getImageByIndex(index).alt;
  }
}

const imageGenerator = new ImageGeneratorByIndex();

//* Refs:

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector('.js-lightbox__overlay'),
  lightboxImage: document.querySelector('.js-lightbox__image'),
};

//* Functions:

function createImagesGalleryWithPatternString() {
  const container = document.querySelector('.js-gallery');
  galleryItems.forEach(item => {
    container.insertAdjacentHTML(
      'beforeend',
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
    </li>`,
    );
  });
}

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
        return;
      }
      index += 1;
      newImage.addImageByIndex(index);
      break;

    case 'ArrowLeft':
      if (index === 0) {
        return;
      }
      index -= 1;
      newImage.addImageByIndex(index);
      break;
    default:
      console.log('Not correct key');
  }
});
