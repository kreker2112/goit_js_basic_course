"use strict";

const makeGridItem = (imgSrc, altDesc) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = altDesc;
  gridItem.appendChild(img);
  return gridItem;
};

export default makeGridItem;
