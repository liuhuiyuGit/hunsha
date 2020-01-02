$(function () {

//轮播的函数
//鼠标进入小圆点，显示对应的图片
//
    var pic = 0;
    var imgW = parseInt($("#lunbo ul li").width());
    var timer = null;
    $("#lunbo .ollist span").click(function () {


        $(this).addClass('cur').siblings('span').removeClass('cur');
        //让对应的图片显示
        $("#lunbo ul").stop().animate({"left": -imgW * ($(this).index())}, 500);
        pic = $(this).index();
    });
//添加定时器
    timer = setInterval(playNext, 2000);
//鼠标进入	lunbo让按钮层渐渐的显示 离开渐渐的隐藏
    $("#num_0").mouseover(function () {
        $("#arr").fadeIn(800);
        clearInterval(timer);
    }).mouseout(function () {
        $("#arr").fadeOut(1000);
        timer = setInterval(playNext, 2000);
    });
    ;
//为左右按钮添加点击事件
    $("#left").click(function () {
        if(pic==0){
            pic= $("#lunbo ul li").length - 1;
        $("#lunbo ul").css("left",-pic*imgW+"px");
    }
        pic--;
        $("#lunbo ul").stop().animate({"left":-pic*imgW});
        //修改li按钮类样式
        $("#lunbo .ollist span").removeClass("cur");
        $("#lunbo .ollist span:eq(" + pic + ")").addClass("cur");
    });
    $("#right").click(function () {
        playNext();
    });
    function playNext() {
        if (pic == $("#lunbo ul li").length - 1) {
            pic = 0;
            $("#lunbo ul").css("left", "0");
        }
        pic++;
        // $("#lunbo ul").animate({"left":-imgW*pic},1000);
        $("#lunbo ul").animate({"left": -imgW * (pic)}, 500);

        if (pic == $("#lunbo ul li").length - 1) {
            $("#lunbo .ollist span:first").addClass('cur').siblings('span').removeClass('cur');

        } else {
            $("#lunbo .ollist span:eq(" + pic + ")").addClass('cur').siblings('span').removeClass('cur');
        }
    }


});
