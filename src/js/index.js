// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

// Закрытие крестика
import tagline from "./modules/tagline.js";
tagline();

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
// import "swiper/css/bundle"; - отключаем чтобы переподключить файлы с node modules swiper.scss swiper-vars
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
