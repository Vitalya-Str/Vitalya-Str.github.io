import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();

const menuBody = document.querySelector(".menu__body");
const iconMenu = document.querySelector(".icon-menu");

iconMenu.addEventListener("click", () => {
  menuBody.classList.toggle("_active");
  iconMenu.classList.toggle("_active");
});
