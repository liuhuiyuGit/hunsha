$(function () {
    //电话，QQ固定更随事件
    $(".qq").mouseenter(function () {
        $(this).stop().animate({"width": "200px"}, 300).css("background-color", "#D62010");
    });
    $(".qq").mouseleave(function () {
        $(this).stop().animate({"width": "45px"}, 100, function () {
            $(this).css("background-color", "#DEDEDE")
        });
    });
    $(".phone").mouseenter(function () {
        $(this).stop().animate({"width": "200px"}, 300).css("background-color", "#D62010");
    });
    $(".phone").mouseleave(function () {
        $(this).stop().animate({"width": "45px"}, 100, function () {
            $(this).css("background-color", "#DEDEDE");
        });
    });
    $(".Top").mouseenter(function () {
        $(this).stop().animate({"width": "200px"}, 300).css("background-color", "#D62010");
    });
    $(".Top").mouseleave(function () {
        $(this).stop().animate({"width": "45px"}, 100, function () {
            $(this).css("background-color", "#DEDEDE");
        });
    });
//返回顶部

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".Top").fadeIn(1);
        } else {
            $(".Top").fadeOut(1);
        }
    });
    $(".Top").click(function () {
        $('html,body').animate({scrollTop: '0px'}, 500);
    });
});