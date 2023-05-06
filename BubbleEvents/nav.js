"use strict";

const nav = document.querySelector(".js-nav");

nav.addEventListener("click", hadndleClick);

function hadndleClick(e) {
  e.preventDefault();

  console.log('target: ', e.target);
  console.log('currentTarget: ', e.currentTarget);

  if (e.target === e.currentTarget) {
    return;
  }

  const activeLink = e.currentTarget.querySelector(".nav__link--active");

  function activeLinkUpdate(){
    activeLink.classList.remove("nav__link--active");
  }

  // if (activeLink) {
  //   activeLink.classList.remove("nav__link--active");
  // }

  // e.target.classList.add("nav__link--active");



  activeLink ? activeLink.classList.remove("nav__link--active") : e.target.classList.add("nav__link--active");

}
