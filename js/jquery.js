// Open lightbox in Modal
function openModal() {
  $('#carouselIndicators').attr('style', 'display: block !important; position: fixed;z-index: 9999;padding-top: 3%;background-color: black;');
  $('.carousel-inner').attr('style', 'width: 70%; margin:0 auto;');

}

// Close lightbox in Modal
function closeModal() {
  $('#carouselIndicators').removeAttr('style');
  $('.carousel-inner').removeAttr('style');
}

/****Js for Number of room required*/
$(document).ready(function () {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction()
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


  var quantitiy = 0;
  $('.quantity-right-plus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity = parseInt($('#quantity').val());
    $('#quantity').val(quantity + 1);
    // Increment
  });

  $('.quantity-left-minus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity = parseInt($('#quantity').val());
    // Increment
    if (quantity > 0) {
      $('#quantity').val(quantity - 1);
    }
  });

  /** Slick slider */
  $('.regular').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  });

  /**Date-picker**/
  $('.t-datepicker').tDatePicker({
    // icon options
    iconArrowTop: false,
    iconDate: '<i class="li-calendar-empty"></i><i class="li-arrow-right"></i>',
    arrowPrev: '<i class="fa fa-chevron-left"></i>',
    arrowNext: '<i class="fa fa-chevron-right"></i>',
  });

});

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        $(".sticky-navbar a").removeClass("active-nav");
        $(this).addClass("active-nav");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict