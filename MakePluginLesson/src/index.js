'use strict';

// Plugins import

// import Siema from 'siema';

// import { Notyf } from 'notyf';
// import 'notyf/notyf.min.css';

// Files import for build/dev

// import message from './js/message';

// import arrow from './js/arrow';

// import Timer from './js/timer';
// import './css/timer.css';

// import image from './images/japan.jpg';

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

// console.log(message);

// console.log(arrow(5, 20));

// console.log(basicLightbox);

// My Timer

// new Timer({
//   element: document.querySelector('#timer-1'),
//   initialValue: 10,
//   step: 5,
// });
// new Timer({
//   element: document.querySelector('#timer-2'),
//   initialValue: 1,
//   step: 2,
// });

// Siema

// const siemaGallery1 = new Siema({
//   selector: '#gallery-1',
//   duration: 200,
//   easing: 'ease-out',
//   perPage: 1,
//   startIndex: 0,
//   draggable: true,
//   multipleDrag: true,
//   threshold: 20,
//   loop: false,
//   rtl: false,
//   onInit: () => {},
//   onChange: () => {},
// });

// document
//   .querySelector('.prev')
//   .addEventListener('click', () => siemaGallery1.prev());
// document
//   .querySelector('.next')
//   .addEventListener('click', () => siemaGallery1.next());

// //   Notyf

// const notyf = new Notyf();

// notyf.error('You must fill out the form before moving forward');

// notyf.success('Your changes have been successfully saved!');

// basicLightbox

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);

// instance.show();

const refs = {
  gallery: document.querySelector('.js-gallery'),
};

buildImagesGallery(galleryItems);

function buildImagesGallery() {
  const markup = galleryItems.map(image => galleryItemsTmplt(image)).join('');

  console.log(markup);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
