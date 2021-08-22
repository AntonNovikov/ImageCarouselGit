//https://www.youtube.com/embed/-5yNF2J0Coc

//https://russianblogs.com/article/6505837039/
// https://unsplash.it/1600/900?random

// https://api.dujin.org/pic/

const increseIcon = document.querySelector(".increase");
const decreseIcon = document.querySelector(".decrease");
increseIcon.addEventListener("click", showImage);
decreseIcon.addEventListener("click", showImage);
let index = 0;

showImage();

function showImage(e) {
  if (e === undefined) {
    i = 0;
  } else if (e.path[0].classList.contains("increase")) {
    i = 1;
  } else if (e.path[0].classList.contains("decrease")) {
    i = -1;
  }

  index += i;

  const images = document.querySelectorAll(".image");
  const dots = document.querySelectorAll(".dot");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (let i = 0; i < images.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (index > images.length - 1) index = 0;
  if (index < 0) index = images.length - 1;

  images[index].style.display = "block";

  dots[index].className += " active";
}
