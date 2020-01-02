$(function () {

    //带缩略图的轮播图
    // var imgBig = ["images/hunsha/01.jpg", "images/slide2_big.jpg", "images/slide3_big.jpg", "images/slide1_big.jpg", "images/slide2_big.jpg", "images/slide3_big.jpg", "images/slide1_big.jpg", "images/slide2_big.jpg", "images/slide3_big.jpg"];
    //鼠标点击缩略图显示对应的图片
    $("#slideBot>.center>ul>li").click(function () {
        $(".newsbox h3").text("");
        $(".newsbox p").text("");
        $(".newsbox").css({"opacity":0,"left":"-300px"});
        //获取当前li下图片的li的图片的src付给大图的src
        var hrf = $(this).children("img").attr("src");
        $("#smallImg").attr("src", hrf);
        $("#bigImg").attr("src", hrf);
        $(".newsbox h3").text($(this).children("img").attr("alt"));
        $(".newsbox p").text($(this).children("img").attr("title"));
        $(".newsbox").animate({"left":"0","opacity":1},1000);
    });
    //为缩略图左右箭头注册点击事件
    var ppc = 0;//记录缩略图的索引
    $("#slideL").on("click", function () {

        if (ppc == 0) {
            ppc = 5;
            $("#slideBot>.center>ul").css("left", -816);
        }
        ppc--;
        $("#slideBot>.center>ul").stop().animate({"left": -(ppc + 1) * 136}, 500);


    });
    $("#slideR").on("click", function () {

        var ww = parseInt($("#slideBot>.center>ul").css("left"));
        // alert(ww);
        if (ww <= (-796)) {
            ppc = 0;
            $("#slideBot>.center>ul").css("left", -136);
        }
        ppc++;
        $("#slideBot>.center>ul").stop().animate({"left": -(ppc + 1) * 136}, 500);


    });

    $("#smallImg").click(function (e) {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $("#bigImg").attr("src", $(this).attr("src"));
        //设置bigImg的div的样式
        /*
         *width: 600px;
         height: 375px;
         left: 375px;
         top: 320px;
         opacity: 0--------1;渐渐的变成1
         visibility: visible;
         * */
        var width = $("#smallImg").width();
        var height = $("#smallImg").height();
        $(".bigImg").css({
            "width": width,
            "height": height,
            "left": 0,
            "top": 0,
            "opacity": 1,
            "visibility": "visible"
        }, 200);

// console.log(e.pageX);
//鼠标在$(".bigImg")中移出事件

        $(".bigImg").mousemove(function (e) {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            // var e=e||window.event;
            // console.log(e.pageX);
            //大图   $("#bigImg")  相对于大盒子的定位的
            var mouseX = e.pageX;//鼠标的x坐标
            var mouseY = e.pageY;//鼠标的y坐标

            var left = $(".slideTop").offset().left;
            var top = $(".bigImg").offset().top;
            var x = mouseX - left;
            var y = mouseY - top;
            console.log("mouseY=====" + mouseY + "top:======" + top + "suoleuSlide:top===" + $(".suoleuSlide").offset().top);

            //获取大图的宽和高
            var w = $("#bigImg").width();
            var h = $("#bigImg").height();


            var X = x * w / width - width / 2;
            var Y = y * h / $(".bigImg").height() - height / 2;
            // X=X>=0?0:X;
            // Y=Y>=0?0:Y;
            X = X < 0 ? 0 : X;
            Y = Y < 0 ? 0 : Y;
            X = X > (710) ? 710 : X;
            Y = Y > (h - $(".bigImg").height()) ? (h - $(".bigImg").height()) : Y;
            console.log(X + "========" + Y);
            $("#bigImg").css({"opacity": 1, "left": -(X) + "px", "top": -Y + "px"});

        });

    });
    //鼠标离开大图所在的盒子，让其变为原来的样式
    $(".bigImg").mouseleave(function () {

        $(".bigImg").css({
            "opacity": 0,
            "width": 0,
            "height": 0,
            "visibility": "hidden"
        });

    });


});
