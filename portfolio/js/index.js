$(document).ready(function () {
  $(".menu-toogler").click(function () {
    $("ul").toggleClass("show");
  });
});

var typed = new Typed(".typing", {
  strings: [
    " Developer...",
    "Freelancer...",
    "Blogger...",
    "Designer...",
    " Youtuber...",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
