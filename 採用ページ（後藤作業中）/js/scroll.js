$(function () {
  $(window).on("load scroll resize", function () {

    var st = $(window).scrollTop();
    var wh = $(window).height();

    $('.sec-scroll-point').each(function (i) {
      var tg = $(this).offset().top;
      var id = $(this).attr('id');

      if (st > tg  - wh + (wh / 2)) {
        $(".content-link").removeClass("is-active");
        var link = $(".content-link[href *= " + id +"]");
        $(link).addClass("is-active");
      }
    });

  });

});