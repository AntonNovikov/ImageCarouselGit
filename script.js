//https://russianblogs.com/article/6505837039/
// https://unsplash.it/1600/900?random

// https://api.dujin.org/pic/

const increseIcon = document.querySelector(".increase");
increseIcon.addEventListener("click", showImage);
let index = 0;

function showImage(e) {
  
  if (e.path[0].classList.contains("increase")) {
    i = 1;
  } else {
    i = -1;
  }
  index += i;
}
