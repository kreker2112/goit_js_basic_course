"use strict";

const tagList = document.querySelector(".js-tags");

tagList.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  const element = e.target;
  element.classList.toggle("tags__item--active");
}
