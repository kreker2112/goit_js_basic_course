'use strict';

import { refs } from './refs.js';

export class ImageGeneratorByIndex {
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
