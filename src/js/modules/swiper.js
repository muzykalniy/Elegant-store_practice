// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

function swiperFunc() {
  // import styles bundle
  // import "swiper/css/bundle"; - отключаем чтобы переподключить файлы с node modules swiper.scss swiper-vars
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}

export default swiperFunc;
