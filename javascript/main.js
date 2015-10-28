$(document).ready(function (){
    $(".scroller").click(function (e) {
        // Stop the link execution
        e.preventDefault();
        var anchor = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(anchor).offset().top }, 500);
    });
});
