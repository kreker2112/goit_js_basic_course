"use strict";

const nav = document.querySelector(".js-nav");

console.log(nav);

nav.addEventListener("click", hadndleClick);

function hadndleClick(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const activeLink = e.currentTarget.querySelector(".nav__link--active");

  if (activeLink) {
    activeLink.classList.remove("nav__link--active");
  }

  e.target.classList.add("nav__link--active");
}
