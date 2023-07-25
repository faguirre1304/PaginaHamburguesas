const dots = document.querySelectorAll(".dot__item");
const slide = document.querySelector(".carrusel__flex");

dots.forEach((cadaPunto, i) => {
  dots[i].addEventListener("click", function () {
    posicion = i;
    operacion = posicion * (-100 / 3);

    slide.style.transform = `translateX(${operacion}%)`;
    dots.forEach((cadaPunto, i) => {
      dots[i].classList.remove("dotActivo");
    });
    dots[i].classList.add("dotActivo");
  });
});
