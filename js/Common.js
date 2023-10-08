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
  $(".newsHot-right .group").marquee({
    duration: 20000,
    gap: 0,
    delayBeforeStart: 0,
    direction: "up",
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
  });

  $("#newsHot .newsHot-left .group").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [10, 10, 10, 10, 10, 10],
        true,
        true,
        false,
        [1, 1, 1, 1, 1],
        "",
        ""
      )
    );
  });
  $(".commonSlideBanner ").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [10, 10, 10, 10, 10, 10],
        true,
        false,
        false,
        [1, 1, 1, 1, 1],
        "fadeIn",
        "fadeOut"
      )
    );
  });
  $("#galleryRight .group ").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [10, 10, 10, 10, 10, 10],
        true,
        false,
        false,
        [1, 1, 1, 1, 1],
        "",
        ""
      )
    );
  });
  $("#galleryHome .group").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [0, 0, 0, 0, 0, 0],
        true,
        false,
        false,
        [5, 5, 5, 5, 5],
        "",
        ""
      )
    );
  });

  $(".voteStar span").hover(function () {
    var pa = $(this).parents(".voteStar");
    var index = $(this).index() + 1;
    $(".voteStar span").removeClass("active");
    for (var i = 0; i < index; i++) {
      pa.find("span").eq(i).addClass("active");
    }
    pa.find(".starPoint").val(index);
  });
});
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 600) {
    $("#bttop").fadeIn();
  } else {
    if (scrollTop == 0) $("#bttop").fadeOut();
  }
});

$(window).resize(function () {});

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
