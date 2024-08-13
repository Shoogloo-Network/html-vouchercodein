//User login/signup====================
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {
  //search=====================
  $(".mobile-search").click(function (e) {
    e.preventDefault(); // Prevent the default action of the anchor tag
    $(".mobile-search-container").slideToggle();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.mobile-search-container').fadeOut();
    }
  });

  //menu=====================
  $(".open-left").click(function (e) {
    e.preventDefault(); // Prevent the default action of the anchor tag
    $("#menu").slideToggle();
  });


  
});




