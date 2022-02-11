$(document).ready(function () {
  // $('input[type="text"]').focus(function () {
  //   $("p").css("color", "red");
  // });
  // $('input[type="text"]').blur(function () {
  //   $("p").css("color", "green");
  // });
  // $("#hide").click(function () {
  //   $("p").hide(1000);
  // });
  // $("#show").click(function () {
  //   $("p").show(1000);
  // });
  // $("#toggle").click(function () {
  //   $("#mahesh").toggle();
  // });
  $("#fade-btn").click(function () {
    $("p").fadeOut(1000);
  });
  $("#fade").click(function () {
    $("p").fadeIn(1000);
  });
  $("#menuButton").click(function () {
    $("p").toggle();
  });
});
