$(document).ready(function(){

  // $(".header__nav-toggle").click(function () {
  //   $(".header__nav-toggle").addClass("header__nav-toggle--show");
  // });
  //
  // $(".header__nav-toggle--show").click(function () {
  //   $(".header__nav-toggle--show").removeClass("header__nav-toggle--show");
  // });

  // $(".header__nav-toggle").click(function () {
  //   var el = $(".header__nav-toggle");
  //   if (el.hasClass("header__nav-toggle--show")) {
  //     $(this).removeClass(this);
  //     $(this).addClass("header__nav-toggle--close");
  //   }
  //   // else {
  //   //   console.log("333");
  //   //   $(this).removeClass(this);
  //   //   $(this).addClass("header__nav-toggle--close");
  //   // }
  // });

  function showMenu() {
    $(".header__nav-toggle").click(function () {
        if ($(this).hasClass("header__nav-toggle--js")) {
          $(this).toggleClass("header__nav-toggle--close")
        }
        if ($(this).hasClass("header__nav-toggle--close")) {
          $(".header__nav-list").show("fast");
        } else {
          $(".header__nav-list").hide("slow");
        }
    })
  };
  showMenu();




$(".slider").owlCarousel({
  items: 4,
  loop: true,
  margin: 20,
  autoplay: true,
  autoplaySpeed: 1000,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsiveClass:true,
  responsive:{
      0: {
          items :1
      },
      425:{
          items: 2
      },
      768:{
          items:3
      },
      1024:{
          items:4
      }
  }

});

});
