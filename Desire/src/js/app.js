import Swiper from "swiper";

const swiper = new Swiper(".swiper", {

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});


const headerBtn = document.querySelector(".header__btn");
const rightsideMenu = document.querySelector(".rightside-menu");
const rightsideMenuClose = document.querySelector(".rightside-menu__close");

headerBtn.addEventListener("click", function () {
  rightsideMenu.classList.remove("rightside-menu--close");
});

rightsideMenuClose.addEventListener("click", function () {
  rightsideMenu.classList.add("rightside-menu--close");
});


