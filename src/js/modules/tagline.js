// Закрытие крестика тэглайна

function tagline() {
  const closeTaglineBtn = document.querySelector(".tagline__close"); // находим по классу
  const tagline = document.querySelector(".tagline"); // находим сам тэглайн

  closeTaglineBtn.onclick = function() {
    // навешиваем событие "по клику"
    tagline.remove(); // удаляем элемент
  };
} // оборачиваем в функицию чтобы ее потом экспортировать

export default tagline;
