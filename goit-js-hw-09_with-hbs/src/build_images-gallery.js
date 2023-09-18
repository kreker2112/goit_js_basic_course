'use strict';

import galleryItemsTmplt from './gallery-items.hbs';

import { galleryItems } from './gallery-items.js';

import { refs } from './refs.js';

// buildImagesGallery(galleryItems);

export function buildImagesGallery() {
  const markup = galleryItems.map(image => galleryItemsTmplt(image)).join('');

  // console.log(markup);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
