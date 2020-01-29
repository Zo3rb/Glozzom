/* global console, alert, confirm, prompt, eval is right */

// for Autoplay youtube video
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

var btn = document.getElementById("frameBtn"),

    myFrame = document.getElementById("frameV");

btn.onclick = function() {
    "use strict";
    myFrame.src = "https://www.youtube.com/embed/3xX2Vs05I8s?autoplay=1";
};

// for slick carousel

$('.slider').slick({
    infinite:true,
    slideToShow: 1,
    slideToScroll:1
  });