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

// tarjetas section try

var alturaPantalla = window.innerHeight / 2;
var card = document.querySelector(".try__grid");

window.addEventListener("scroll", function () {
  var alturaTarjeta = card.getBoundingClientRect().top;

  if (alturaTarjeta >= alturaPantalla) {
    card.classList.remove("aparecer__tarjeta");
  } else {
    card.classList.add("aparecer__tarjeta");
  }
});

//tarjetas enjoy

window.addEventListener("scroll", function () {
  let alturaPantalla = window.innerHeight / 3;
  let enjoyText = document.querySelector(".enjoy__text");
  let enjoyCards = document.querySelector(".enjoy__cards");
  var alturaTarjeta = enjoyText.getBoundingClientRect().top;

  if (alturaTarjeta >= alturaPantalla) {
    enjoyText.style.opacity = 0;
    enjoyCards.style.opacity = 0;
  } else {
    enjoyText.style.opacity = 1;

    setTimeout(function () {
      enjoyCards.style.opacity = 1;
    }, 500);
  }
});
