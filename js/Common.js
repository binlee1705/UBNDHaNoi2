"use strict";

function owlslide(
  num,
  margin,
  autoplay,
  dot,
  nav,
  items,
  animateIn,
  animateOut,
  mouseDrag = true,
  autoplayTimeout = 5000
) {
  var option = {
    items: items[0],
    autoplay: num > items[0] ? autoplay : false,
    autoplayTimeout: autoplayTimeout,
    smartSpeed: 1500,
    loop: num > items[0],
    nav: num > items[0] ? nav : false,
    dots: num > items[0] ? dot : false,
    autoplayHoverPause: true,
    margin: margin[0],
    lazyLoad: true,
    navText: [""],
    animateIn: animateIn,
    animateOut: animateOut,
    mouseDrag: mouseDrag,
    responsive: {
      0: {
        items: items[4],
        margin: margin[4],
        loop: num > items[4],
        autoplay: num > items[4] ? autoplay : false,
        nav: num > items[4] ? nav : false,
        dots: num > items[4] ? dot : false,
      },
      479: {
        items: items[3],
        margin: margin[3],
        loop: num > items[3],
        autoplay: num > items[3] ? autoplay : false,
        nav: num > items[3] ? nav : false,
        dots: num > items[3] ? dot : false,
      },
      767: {
        items: items[2],
        margin: margin[2],
        loop: num > items[2],
        autoplay: num > items[2] ? autoplay : false,
        nav: num > items[2] ? nav : false,
        dots: num > items[2] ? dot : false,
      },
      991: {
        items: items[1],
        margin: margin[1],
        autoplay: num > items[1] ? autoplay : false,
        nav: num > items[1] ? nav : false,
        dots: num > items[1] ? dot : false,
        loop: num > items[1],
      },
      1199: {
        items: items[0],
        margin: margin[0],
        autoplay: num > items[0] ? autoplay : false,
        nav: num > items[0] ? nav : false,
        dots: num > items[0] ? dot : false,
        loop: num > items[0],
      },
    },
  };
  return option;
}
function scrollHead(event) {
  event.preventDefault();
  $("body,html").animate({ scrollTop: 0 }, 1000);
}
$(document).ready(() => {
  $("#bttop").click(function (e) {
    scrollHead(e);
  });
  $(".openList").click(() => {
    $("#menu").toggleClass("ac");
    $(".openList").toggleClass("ac");
    $("#overlay").fadeToggle();
  });
  $("#overlay").click(function () {
    $("#menu").toggleClass("ac");
    $(".openList").toggleClass("ac");
    $("#overlay").fadeToggle();
  });
  $(".openSub").click(function () {
    $(this).next("ul").fadeToggle();
    $(this).next(".menuSub").fadeToggle();
    $(this).toggleClass("ac");
    $(this).parents("li").toggleClass("ac");
  });
  $("html").on("click", ".tabs .tab-links a", function (e) {
    var currentAttrValue = $(this).attr("href");
    $(".tabs " + currentAttrValue)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(this).parents("li").addClass("active").siblings().removeClass("active");
    e.preventDefault();
  });
  $("html").on("change", ".tabs .tab-links", function (e) {
    var currentAttrValue = $(this).val();
    $(".tabs " + currentAttrValue)
      .addClass("active")
      .siblings()
      .removeClass("active");
    e.preventDefault();
  });
  $(".modal").on("shown.bs.modal", function () {
    $(this).trigger("focus");
  });
  $(".toggleSearch").click(function () {
    var $filter = $(this).next(".formFilter");
    $filter.toggleClass("ac");
  });
  $(".marquee").marquee({
    duration: 30000,
    gap: 5,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
  });

  $("#slideMain .group").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [10, 10, 10, 10, 10, 10],
        true,
        true,
        false,
        [1, 1, 1, 1, 1],
        "fadeIn",
        "fadeOut"
      )
    );
  });
  $(".mediaHome .group").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [30, 20, 20, 20, 20, 20],
        true,
        true,
        true,
        [2, 2, 2, 2, 1],
        "",
        ""
      )
    );
  });
  $(".commonSlideBanner").each(function () {
    var checkInside = $(this).parents("#container").hasClass("inside");
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [10, 10, 20, 20, 20, 10],
        true,
        true,
        true,
        [1, checkInside ? 3 : 1, 2, 2, 1],
        "fadeIn",
        "fadeOut"
      )
    );
  });
  $("#session .tab").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [0, 0, 0, 0, 0, 0],
        true,
        true,
        true,
        [4, 3, 2, 2, 1],
        "",
        ""
      )
    );
  });
  $("#news.detail .other .tab-contents .owl-carousel").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [15, 15, 15, 15, 15, 15],
        true,
        true,
        true,
        [4, 4, 3, 3, 2],
        "",
        ""
      )
    );
  });
  $("#donors .owl-carousel").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [20, 20, 20, 20, 20, 20],
        true,
        true,
        true,
        [5, 4, 3, 3, 2],
        "",
        ""
      )
    );
  });
  $(".btnSearchPage").click(function () {
    if ($(this).hasClass("active")) {
      $("#menu .divSearchPage").slideUp();
    } else {
      $("#menu .divSearchPage").slideDown();
    }
    $(this).toggleClass("active");
  });

  loadPageFacebook();
});
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 600) {
    $("#bttop").fadeIn();
  } else {
    if (scrollTop == 0) $("#bttop").fadeOut();
  }
});

$(window).resize(function () {
  loadPageFacebook();
});

function loadPageFacebook() {
  var container_width = $("#pluginShare .facebook").width();
  $("#pageFacebook")
    .html(`<div class="fb-page" data-href="https://www.facebook.com/Vietsports2020" data-tabs="timeline" data-width="${container_width}"
          data-height="570" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
          data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/Vietsports2020" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/Vietsports2020">Vietsports</a>
          </blockquote>
        </div>`);
  FB.XFBML.parse();
}
function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}
var size = parseInt($(".noidung").css("font-size")),
  lineheight = parseInt($(".noidung").css("line-height"));
size || (size = 16);
lineheight || (lineheight = 24);

function Increasenoidung() {
  size++;
  lineheight += 2;
  $(".noidung").css(
    "cssText",
    "font-size:" +
      size +
      "px !important; line-height:" +
      lineheight +
      "px !important"
  );
  $(".noidung")
    .find("*")
    .css(
      "cssText",
      "font-size:" +
        size +
        "px !important; line-height:" +
        lineheight +
        "px !important"
    );
}
function Decreasenoidung() {
  size--;
  lineheight -= 2;
  $(".noidung").css(
    "cssText",
    "font-size:" +
      size +
      "px !important; line-height:" +
      lineheight +
      "px !important"
  );
  $(".noidung")
    .find("*")
    .css(
      "cssText",
      "font-size:" +
        size +
        "px !important; line-height:" +
        lineheight +
        "px !important"
    );
}
function Resetnoidung() {
  size = 16;
  lineheight = 24;
  $(".noidung").css(
    "cssText",
    "font-size:" +
      size +
      "px !important; line-height:" +
      lineheight +
      "px !important"
  );
  $(".noidung")
    .find("*")
    .css(
      "cssText",
      "font-size:" +
        size +
        "px !important; line-height:" +
        lineheight +
        "px !important"
    );
}
function fullSrceenIframe() {
  if ($(".iframe") && $(".iframe").length > 0) {
    $(".iframe,body").toggleClass("fullScreen");
  }
}

function chooseWebsite(ele) {
  var link = ele.val();
  if (link) {
    window.open(link, "_blank");
    ele.val("").trigger("change");
  }
}
