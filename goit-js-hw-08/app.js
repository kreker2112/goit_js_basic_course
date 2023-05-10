"use strict";

const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

//* Refs:

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector(".js-lightbox"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector('.js-lightbox__overlay'),
  lightboxImage: document.querySelector('.js-lightbox__image')
};

//* Functions:

function createImagesGalleryWithPatternString() {
  const container = document.querySelector(".js-gallery");
  galleryItems.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      ` <li class="gallery__item">
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
    </li>`
    );
  });
}

function addLightboxIsOpen(e) {
  e.preventDefault();
  console.log(e.target);
  openModal(e);
}

function openModal(e) {
  lighboxClassChangeToOpen();
  console.log(refs.lightbox);
  addLightBoxImage(e);
  window.addEventListener("keydown", handleKeyPress);
}

function lighboxClassChangeToOpen (){
  refs.lightbox.classList.remove("lightbox");
  refs.lightbox.classList.add("lightbox.is-open");
}

function addLightBoxImage(e){
refs.lightboxImage.src = e.target.getAttribute('data-source');
refs.lightboxImage.alt = e.target.getAttribute('alt');
}

function closeModal() {
  lightboxClassChangeToDefault();
  console.log(refs.lightbox);
  window.removeEventListener("keydown", handleKeyPress);
}

function lightboxClassChangeToDefault(){
  refs.lightbox.classList.remove("lightbox.is-open");
  refs.lightbox.classList.add("lightbox");
}

function handleKeyPress(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeModal();
}

function handleLightboxClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}

//* Callbacks

createImagesGalleryWithPatternString(galleryItems);

//* Event Listeners

refs.gallery.addEventListener("click", addLightboxIsOpen);

refs.closeButton.addEventListener('click', closeModal);

refs.lightboxOverlay.addEventListener("click", handleLightboxClick);


