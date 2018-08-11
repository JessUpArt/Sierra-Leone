$(".bar").on("click",function() {

if ($(".fas").hasClass("fa-bars")) {
  $(".mobile").css("display","flex");
  $(".fas").toggleClass("fa-bars fa-times");
  $("#title").slideUp();
}
  else {
    $(".mobile").css("display","none");
      $(".fas").toggleClass("fa-times fa-bars");
      $("#title").slideDown();

  }


})
