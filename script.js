$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
    });
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  var typed = new Typed(".typing", {
    strings: ["Post Graduate", "Software Engineer", "Programmer"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: ["React.js Developer", "Python Developer", "Compitive Programmer"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true,
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  $(".read-more-btn").click(function () {
    const moreText = $(".more-text");
    const dots = $(".dots");

    if (moreText.is(":visible")) {
      moreText.hide();
      dots.show();
      $(this).html('Read more <i class="fas fa-angle-double-right"></i>');
    } else {
      moreText.show();
      dots.hide();
      $(this).html('Read less <i class="fas fa-angle-double-up"></i>');
    }
  });
});
