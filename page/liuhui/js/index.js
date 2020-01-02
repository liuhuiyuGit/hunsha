/**
 * Created by Liu on 2016/12/14.
 */

$(window).load(function () {
    var ww=$(window).width();
    var lis1 = $("#box>.screen>ul").children("li");
    lis1.width(ww);
    $("#box").width(ww);
    $(".screen").width(ww);
});

$(function () {

    //鼠标移动效果  小星星的效果开始
    var stararr = ["#FFFC82", "#B8F1FD", "#ADF1B9", "#C99BDC", "#FFACFC"];
    document.onmousemove = function (e) {
        var star = document.createElement("div");
        star.className = "star";
        var num = Math.floor(Math.random() * 5);
        star.style.backgroundColor = stararr[num];
        document.body.appendChild(star);

        star.style.left = getPageX(e) + Math.random() * 50 - 20 + "px";
        star.style.top = getPageY(e) + Math.random() * 50 - 20 + "px";
        $(star).animate({
            "width": 0,
            "height": 0
        }, 500, function () {
            $(star).remove();
        });
    };
    function getPageX(e) {
        var x = e.clientX;
        return scroll().left + x;
    }

    function getPageY(e) {
        var y = e.clientY;
        return scroll().top + y;
    }

    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

//鼠标移动效果  小星星的效果结束

    //轮播图部分
    //获取相框的宽度
    var imgWidth = $("#screen").width();
    //获取ul下所有li
    var lis = $("#screen>ul").children("li");
    var ols = $("#screen>ol").children("li");
    var ww=$(window).width();

    lis.width(ww);
    $("#screen").width(ww);
    $("#banner").width(ww);
    var pic = 0;
    //ol中图片
    $(".screen>ol>li").mouseover(function () {
        //获取当前li对应的index
        pic = $(this).index();
        $(this).css("border", "2px solid pink").siblings("li").css("border", "none");
        $("#screen>ul").stop().animate({"left": -pic * ww});
    });
    // }
    //让ol中ol的第一个li标签默认背景色
    $("#screen>ol").children("li:eq(0)").css("border", "2px solid pink");


    //复制ul中li的第一个li添加到ul最后
    $("#screen>ul").children("li:eq(0)").clone().appendTo($("#screen>ul"));
    var timer = setInterval(clickHandler, 1500);
    //给box注册鼠标进入和离开事件
    $("#banner").mouseover(function () {
        $("#arr").show();
        clearInterval(timer);
    }).mouseout(function () {
        $("#arr").hide();
        timer = setInterval(clickHandler, 1500);
    });
    //给左右按钮注册鼠标点击事件
    $("#right").click(clickHandler);

    $("#left").click(function () {
        if (pic == 0) {
            pic = $("#screen>ul").children("li").length - 1;
            $("#screen>ul").css("left", -pic * ww);
        }
        pic--;
        $("#screen>ul").stop().animate({"left": -pic * ww});
        $("#screen>ol").children("li:eq(" + pic + ")").siblings("li").css("backgroundColor", "")
        $("#screen>ol").children("li:eq(" + pic + ")").css("border", "2px solid pink");
    });
    function clickHandler() {
        if (pic == $("#screen>ul").children("li").length - 1) {
            pic = 0;
            $("#screen>ul").css("left", -pic * ww);
        }
        pic++;
        $("#screen>ul").stop().animate({"left": -pic * ww});
        if (pic == $("#screen>ul").children("li").length - 1) {
            $("#screen>ol").children("li:eq(0)").css("border", "2px solid pink");
            $("#screen>ol").children("li").last().css("border", "");
        } else {
            $("#screen>ol").children("li:eq(" + pic + ")").siblings("li").css("border", "")
            $("#screen>ol").children("li:eq(" + pic + ")").css("border", "2px solid pink");
        }
    }


    //婚纱展示部分


    $("#weddingdress_show>ul>li>img").mouseenter(function () {
        getBig($(this), true)

    })
    $("#weddingdress_show>ul>li>img").mouseleave(function () {
        getBig($(this), false)

    })
    //ele为图片的 jQuery对象，bool 为true 为放大    false为缩小
    //图片和父盒子必须有定位，父盒子大小固定，不能靠图片撑开
    function getBig(ele, bool) {
        var imgW = parseInt(ele.parent().css("width"));
        var imgH = parseInt(ele.parent().css("height"));

        if (bool) {
            var josn = {
                "width": imgW * 11 / 10,
                "height": imgH * 11 / 10,
                "top": -imgH / 20,
                "left": -imgW / 20
            }


            ele.stop().animate(josn, 1000)
        } else {
            var josn1 = {"width": imgW, "height": imgH, "top": 0, "left": 0}
            ele.stop().animate(josn1, 1000)
        }

    }

//tab切换
    $(".wrapper>.tab>li").mouseover(function () {
        //鼠标当前移入的li标签的兄弟元素移除类样式
        $(this).siblings("li").removeClass("active");
        //鼠标当前移入的li标签添加类样式
        $(this).addClass("active");

        var index = $(this).index();
        //获取
        $(".modules>div").removeClass("show");
        $(".modules>div:eq(" + index + ")").addClass("show");
    });


    //手风琴
    $("#module1>ul>li").mouseover(function () {
        $(this).css("width", "800px").siblings("li").css("width", "80px")

    }).mouseout(function () {
        $("#module1>ul>li").css("width", "200px")
    });


    //高亮显示

    $("#moudle2>ul>li").mouseover(function () {
        //排他
        $("#moudle2>ul>li").css("opacity", "0.3");
        //当前鼠标移入的li标签透明度为1
        $(this).css("opacity", "1");


    });
//  鼠标离开事件
    $("#moudle2").mouseout(function () {
        //所有的li标签透明度为1
        $("#moudle2>ul>li").css("opacity", "1");
        console.log("made");
    });
});













