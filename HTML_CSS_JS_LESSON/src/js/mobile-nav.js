"use strict";

export class mobileNavScript {
  constructor() {
    this.refs = {
      navBtn: document.querySelector(".mobile-nav-btn"),
      nav: document.querySelector(".mobile-nav"),
      menuIcon: document.querySelector(".nav-icon"),
      fade: document.querySelector(".mobile-nav-fade"),
    };
  }
  toggleMobileNav() {
    this.refs.nav.classList.toggle("mobile-nav--open");
    this.refs.fade.classList.toggle("mobile-nav-fade--open");
    this.refs.menuIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
  }
  bindEvents() {
    this.refs.navBtn.addEventListener("click", this.toggleMobileNav.bind(this));
    this.refs.fade.addEventListener("click", this.toggleMobileNav.bind(this));
  }
}
