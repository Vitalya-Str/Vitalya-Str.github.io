import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();

const menuBody = document.querySelector(".menu__body");
const iconMenu = document.querySelector(".icon-menu");
const bottomHeaderColumn = document.querySelector(".bottom-header__column");

iconMenu.addEventListener("click", () => {
  menuBody.classList.toggle("_active");
  iconMenu.classList.toggle("_active");
  bottomHeaderColumn.classList.toggle("_active");
});
