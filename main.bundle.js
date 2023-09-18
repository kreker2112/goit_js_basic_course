/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./gallery-items.js
var galleryItems = [{
  preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
  description: "Hokkaido Flower"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
  description: "Container Haulage Freight"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
  description: "Aerial Beach View"
}, {
  preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
  original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
  description: "Flower Blooms"
}, {
  preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
  original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
  description: "Alpine Mountains"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
  description: "Mountain Lake Sailing"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
  description: "Alpine Spring Meadows"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
  description: "Nature Landscape"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
  description: "Lighthouse Coast Sea"
}];
;// CONCATENATED MODULE: ./app.js


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var index;

// * ImageGenerator
var ImageGeneratorByIndex = /*#__PURE__*/function () {
  function ImageGeneratorByIndex() {
    _classCallCheck(this, ImageGeneratorByIndex);
  }
  _createClass(ImageGeneratorByIndex, [{
    key: "getImageByIndex",
    value: function getImageByIndex(index) {
      var imageObjectArray = [];
      var imagesArray = _toConsumableArray(refs.gallery.querySelectorAll('img.gallery__image'));
      for (var i = 0; i < imagesArray.length; i += 1) {
        var imageObject = {
          source: imagesArray[i].getAttribute('data-source'),
          alt: imagesArray[i].getAttribute('alt')
        };
        imageObjectArray.push(imageObject);
      }
      return imageObjectArray[index];
    }
  }, {
    key: "addImageByIndex",
    value: function addImageByIndex(index) {
      refs.lightboxImage.src = this.getImageByIndex(index).source;
      refs.lightboxImage.alt = this.getImageByIndex(index).alt;
    }
  }]);
  return ImageGeneratorByIndex;
}();
var imageGenerator = new ImageGeneratorByIndex();

//* Refs:

var refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector('.js-lightbox__overlay'),
  lightboxImage: document.querySelector('.js-lightbox__image')
};

//* Functions:

function createImagesGalleryWithPatternString() {
  var container = document.querySelector('.js-gallery');
  galleryItems.forEach(function (item) {
    container.insertAdjacentHTML('beforeend', " <li class=\"gallery__item js-gallery__item\">\n      <a\n        class=\"gallery__link\"\n        href=\"".concat(item.original, "\"\n      >\n        <img\n          class=\"gallery__image\"\n          src=\"").concat(item.preview, "\"\n          data-source=\"").concat(item.original, "\"\n          alt=\"").concat(item.description, "\"\n        />\n      </a>\n    </li>"));
  });
}
function openModal(e) {
  var targetImgSrc = e.target.src;
  for (var i = 0; i < galleryItems.length; i += 1) {
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
window.addEventListener('keydown', function (e) {
  var newImage = new ImageGeneratorByIndex(index);
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
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map