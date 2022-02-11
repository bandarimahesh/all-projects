$(document).ready(function () {
  $("#icon").click(function () {
    console.log("toogler clicked");
    $("ul").toggleClass("show");
  });
});
