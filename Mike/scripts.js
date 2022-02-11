$(document).ready(function () {
  $(".menu-btn").click(function () {
    $("ul").toggleClass("show");
  });
});

// let menuBtn = document.querySelector(".menu-btn");
// let menu = document.querySelector(".menu");

// menuBtn.addEventListener("click", function () {
//   menu.classList.toggle("active");
// });

// console.log(menuBtn);

var typed = new Typed(".element", {
  strings: ["This is a JavaScript library", "This is an ES6 module"],
  smartBackspace: true, // Default value
});
