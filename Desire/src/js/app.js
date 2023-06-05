import mixitup from "mixitup";

var mixer = mixitup(".mixitup__box", {
  load: {
    filter: ".living-room-furniture",
  },
});

import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  autoplay: true,
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
