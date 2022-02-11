const hamburger = document.querySelector(".hamburger");
const menuShow = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

hamburger.addEventListener("click", function () {
  menuShow.classList.toggle("hide");
});
