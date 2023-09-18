'use strict';

import { galleryItems } from './gallery-items.js';

import { refs } from './refs.js';

import './css/lightbox.css';

import lightboxTmplt from './lightbox-template.hbs';

export class Modal {
  addLightBoxImage(e) {
    const lightboxRefs = [
      {
        lightboxImageSrc: e.target.getAttribute('data-source'),
        lightboxImageAlt: e.target.alt,
      },
    ];

    const markup = lightboxRefs.map(image => lightboxTmplt(image)).join('');
    refs.lightbox.insertAdjacentHTML('beforeend', markup);
    return this;
  }
  openModal(e) {
    const targetImgSrc = e.target.src;
    for (let i = 0; i < galleryItems.length; i += 1) {
      if (galleryItems[i].preview === targetImgSrc) {
        this.index = i;
        break;
      }
    }
    // console.log(index);

    e.preventDefault();
    if (e.target === e.currentTarget) {
      return;
    }

    refs.lightbox.classList.toggle('is-open');

    window.addEventListener('keydown', e => {
      if (e.code !== 'Escape') {
        return;
      }
      refs.lightbox.remove('is-open');

      window.removeEventListener('keydown', closeModalByEscape());
    });
    return this;
  }
  closeModal() {
    refs.lightbox.classList.remove('is-open');

    window.removeEventListener('keydown', this.closeModalByEscape);
  }
  closeModalByEscape(e) {
    if (e.code !== 'Escape') {
      return;
    }
    this.closeModal();
  }
  closeModalByBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.closeModal();
  }
}

// function openModal(e) {
//   const targetImgSrc = e.target.src;
//   for (let i = 0; i < galleryItems.length; i += 1) {
//     if (galleryItems[i].preview === targetImgSrc) {
//       index = i;
//       break;
//     }
//   }
//   console.log(index);

//   e.preventDefault();
//   if (e.target === e.currentTarget) {
//     return;
//   }

//   refs.lightbox.classList.add('is-open');

//   addLightBoxImage(e);

//   window.addEventListener('keydown', closeModalByEscape);
// }

// function addLightBoxImage(e) {
//     refs.lightboxImage.src = e.target.getAttribute("data-source");
//     refs.lightboxImage.alt = e.target.getAttribute("alt");
//   }

//   function closeModal() {
//     refs.lightbox.classList.remove("is-open");

//     window.removeEventListener("keydown", closeModalByEscape);
//   }

//   function closeModalByEscape(e) {
//     if (e.code !== "Escape") {
//       return;
//     }
//     closeModal();
//   }

//   function closeModalByBackdropClick(event) {
//     if (event.target !== event.currentTarget) {
//       return;
//     }
//     closeModal();
//   }
