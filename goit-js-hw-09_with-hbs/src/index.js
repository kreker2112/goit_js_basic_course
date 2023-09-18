'use strict';

// Plugins import

// Files import for build/dev

import './css/lightbox.css';

import './css/styles.css';

import './css/gallery.css';

import { buildImagesGallery } from './build_images-gallery.js';

import { Modal } from './lightbox.js';

import galleryItemsTmplt from './gallery-items.hbs';

import lightboxTmplt from './lightbox-template.hbs';

import { galleryItems } from './gallery-items.js';

import { refs } from './refs.js';

// Console Logs

// console.log(galleryItemsTmplt);

// console.log(galleryItems);

// Images Gallery

buildImagesGallery(galleryItems);

// Lightbox

let index;

const modal = new Modal();

console.dir(modal.openModal);

refs.gallery.addEventListener('click', modal.openModal);

refs.gallery.addEventListener('click', modal.addLightBoxImage);
