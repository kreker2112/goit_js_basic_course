'use strict';

import { galleryItems } from './../items/gallery-items.js';

export function createImagesGalleryWithPatternString() {
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
