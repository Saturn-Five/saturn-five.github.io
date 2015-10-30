$(document).ready(function () {
    $(".navigation").hide();

    $(".scroller").click(function (e) {
        e.preventDefault();
        var anchor = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(anchor).offset().top }, 500);
    });

    $(window).scroll(function(event) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > $(".splash").height()) {
            if ($(".navigation").is(':hidden')) {
                $(".navigation").fadeIn();
            } else {
                if (scrollTop > $(".contact").offset().top-$(".apps").height()) {
                    $(".navigation > a").css("color", "#FFFFFF");
                } else {
                    $(".navigation > a").css("color", "#FFFF99");
                }
            }
        } else {
            $(".navigation").fadeOut();
        }
    });
});
