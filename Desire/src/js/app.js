const headerBtn = document.querySelector(".header__btn");
const rightsideMenu = document.querySelector(".rightside-menu");
const rightsideMenuClose = document.querySelector(".rightside-menu__close");

headerBtn.addEventListener("click", function () {
  rightsideMenu.classList.remove("rightside-menu--close");
});

rightsideMenuClose.addEventListener("click", function () {
  rightsideMenu.classList.add("rightside-menu--close");
});

// document.body.addEventListener("click", function (e) {
  

//   if(!e.closest('.rightside-menu') && !e.closest('.rightside-menu--close')) {
//     rightsideMenu.classList.add("rightside-menu--close");
//   }
// });
