
$(function () {
//图片展示特效
    //特效一：鼠标经过图片半透明效果文字滑动显示
    $(".ulbox1  li .rsp").hide();
    $(".ulbox1  li a").hover(function () {
            $(this).find(".rsp").stop().fadeTo(500, 0.5)
            $(this).find(".text").stop().animate({left: '0'}, {duration: 500})
        },
        function () {
            $(this).find(".rsp").stop().fadeTo(500, 0)
            $(this).find(".text").stop().animate({left: '300'}, {duration: "fast"})
            $(this).find(".text").animate({left: '-300'}, {duration: 0})
        });

    //鼠标经过图片心形从小到大葱透明到清晰的特效
    //第一步：让所有的心的宽度和高度变为0，透明度变为0
    $(".ulbox2 li .chest").css({"opacity": 0});
    $(".ulbox2 li .postext").css({"opacity": 0});
    //第二步： 鼠标进入li显示当前的心形
    $(".ulbox2>li").mouseenter(function () {
        $(this).children(".chest").stop().animate({"opacity": 0.6},800);
        $(this).children(".postext").stop().animate({"opacity": 1},800);
    });
    //第三步： 鼠标离开li隐藏当前的心形
    $(".ulbox2>li").mouseleave(function () {
        $(this).children(".chest").stop().animate({"opacity": 0},500);
        $(this).children(".postext").stop().animate({"opacity": 0},500);
    });

});