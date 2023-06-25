'use strict';

// Plugins import

// Files import for build/dev

import image from './images/japan.jpg';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import './css/styles.css';

import './css/gallery.css';

// import './css/lightbox.css';

import galleryItemsTmplt from './gallery-items.hbs';

import { galleryItems } from './gallery-items.js';

// Console Logs

console.log(galleryItemsTmplt);

console.log(galleryItems);

// basicLightbox

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);

// instance.show();

// Images Gallery

const refs = {
  gallery: document.querySelector('.js-gallery'),
};

buildImagesGallery(galleryItems);

function buildImagesGallery() {
  const markup = galleryItems.map(image => galleryItemsTmplt(image)).join('');

  console.log(markup);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
