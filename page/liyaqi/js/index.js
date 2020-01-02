/**
 * Created by YQ on 2016/12/13.
 */
$(function () {



    //左侧固定栏

    // $(".qq").mouseenter(function () {
    //     $(this).stop().animate({"width":"200px"}).css("background-color","#D62010");
    // });
    // $(".qq").mouseleave(function () {
    //     $(this).stop().animate({"width":"45px"}, function () {
    //         $(this).css("background-color","#DEDEDE")
    //     });
    // });
    // $(".phone").mouseenter(function () {
    //     $(this).stop().animate({"width":"200px"}).css("background-color","#D62010");
    // });
    // $(".phone").mouseleave(function () {
    //     $(this).stop().animate({"width":"45px"}, function () {
    //         $(this).css("background-color","#DEDEDE");
    //     });
    // });








    //标题部分
    $(".head-nav>ul>li>a").mouseenter(function () {
        $(this).children("i").show().css("color", "#EF4423");
        $(this).children("span").hide();
    });
    $(".head-nav>ul>li").mouseleave(function () {
        $(this).find("i").hide();
        $(this).find("span").show();
    });

    //��������dl�������Ƴ�
    $(".head-nav li a").mouseenter(function () {
        $(this).next().stop().slideDown(500);
        $(this).next().children("dd").mouseenter(function () {
            $(this).css("color", "#EF4423");
        });
        $(this).next().children("dd").mouseleave(function () {
            $(this).css("color", "");
        });
    });
    $(".head-nav li").mouseleave(function () {
        $(this).children("a").next().stop().slideUp(500);
    });


//大的轮播图
    //获取相框的宽度
    var imgWidth = $("#box>.screen").width();
    //获取ul下所有li
    var ww=$(window).width();
    var lis1 = $("#box>.screen>ul").children("li");
    lis1.width(ww);
    $("#box").width(ww);
    $(".screen").width(ww);
    var pic = 0;
    //遍历所有li
    for (var i = 0; i < lis1.length; i++) {
        var olList = $("<li></li>");
        olList.appendTo($("#box>.screen>ol"));
        olList.mouseover(function () {
            //获取当前li对应的index
            pic = $(this).index();
            $(this).css("backgroundColor", "pink").siblings("li").css("backgroundColor", "");
            $("#box>.screen>ul").stop().animate({"left": -pic * ww});
        });
    }
    //让ol中ol的第一个li标签默认背景色
    $("#box>.screen>ol").children("li:eq(0)").css("backgroundColor", "pink");
    //复制ul中li的第一个li添加到ul最后
    $("#box>.screen>ul").children("li:eq(0)").clone().appendTo($("#box>.screen>ul"));
    var timer = setInterval(clickHandler, 2000);
    //给box注册鼠标进入和离开事件
    $("#box").mouseover(function () {
        $("#arr").show();
        clearInterval(timer);
    }).mouseout(function () {
        $("#arr").hide();
        timer = setInterval(clickHandler, 2000);
    });
    //给左右按钮注册鼠标点击事件
    $("#right").click(clickHandler);

    $("#left").click(function () {
        if (pic == 0) {
            pic = $("#box>.screen>ul").children("li").length - 1;
            $("#box>.screen>ul").css("left", -pic * ww);
        }
        pic--;
        $("#box>.screen>ul").stop().animate({"left": -pic * ww});
        $("#box>.screen>ol").children("li:eq(" + pic + ")").siblings("li").css("backgroundColor", "")
        $("#box>.screen>ol").children("li:eq(" + pic + ")").css("backgroundColor", "pink");
    });
    function clickHandler() {
        if (pic == $("#box>.screen>ul").children("li").length - 1) {
            pic = 0;
            $("#box>.screen>ul").css("left", -pic * ww);
        }
        pic++;
        $("#box>.screen>ul").stop().animate({"left": -pic * ww});
        if (pic == $("#box>.screen>ul").children("li").length - 1) {
            $("#box>.screen>ol").children("li:eq(0)").css("backgroundColor", "pink");
            $("#box>.screen>ol").children("li").last().css("backgroundColor", "");
        } else {
            $("#box>.screen>ol").children("li:eq(" + pic + ")").siblings("li").css("backgroundColor", "")
            $("#box>.screen>ol").children("li:eq(" + pic + ")").css("backgroundColor", "pink");
        }
    }


    // 手风琴部分

    $(".accordion .accordion-b li").mouseenter(function () {

        $(this).stop().animate({"width":"600px"},500);
        $(this).siblings("li").stop().animate({"width": "100px"},500);
    }).mouseleave(function () {
        $(".accordion .accordion-b li").stop().animate({"width":"100px"});
        $(".accordion .accordion-b li:eq(2)").stop().animate({"width":"600px"});
    });


// 婚纱礼服部分
//
    $(".dress-l").mouseover(function () {
        $(".dress-l>span").stop().slideDown(500);
    }).mouseout(function () {
        $(".dress-l>span").stop().slideUp(500);
    });


    $(".dress ul li").mouseover(function () {

        $(this).siblings("li").children("span").hide();
        $(this).children("span").slideDown(500);

    }).mouseout(function () {
        $(".dress ul li").children("span").hide();
    });


// 图片的放大
    $(".dress>ul img").mouseover(function () {
        getBig($(this), true);

    });
    $(".dress>ul img").mouseout(function () {
        getBig($(this), false);

    });
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


            ele.stop().animate(josn, 1000);
        } else {
            var josn1 = {"width": imgW, "height": imgH, "top": 0, "left": 0};
            ele.stop().animate(josn1, 1000);
        }

    }


    // 旋转木马部分
    var config = [
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.3,
            zIndex: 2
        },//0
        {
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            zIndex: 3
        },//1
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.3,
            zIndex: 2
        }//4
    ];
    var wrap = document.getElementById("wrap");
    var slide = wrap.children[0];
    var ul = slide.children[0];
    var arrow = slide.children[1];
    var lis = ul.children;
    var arrowL = arrow.children[0];
    var arrowR = arrow.children[1];
    change();
    var flag = true;
    arrowR.onclick = function () {
        if (flag) {
            flag = false;
            var temp = config.shift();
            config.push(temp);
            change();
        }
    };
    arrowL.onclick = function () {
        if (flag) {
            flag = false;
            var temp = config.pop();
            config.unshift(temp);
            change();
        }
    };
    function change() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
        ;
    };


    
    
    
    // 美图展示

    $(".bottom .bb li").mouseover(function () {
        $(this).children("span").hide();
        $(this).siblings("li").children("span").show();


        // $(this).children("a").css({"position":"absolute","zIndex":"200","width":"400","height":"400"});

    }).mouseout(function () {
        $(".bottom .bb li").children("span").hide();

    });
    
    
    
    
    //鼠标移动效果  小星星的效果
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
    
    
    
    
    
    
    
    
    
    
    
    function animate(tag, obj, fn) {
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
//            k----������----attr
//            obj[k]---����ֵ----target
            var flag = true;
            for (k in obj) {
                if (k == "opacity") {
                    var leader = getStyle(tag, k) * 100;
                    var target = obj[k] * 100;
                    var step = (target - leader) / 10;
                    step = target > leader ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    tag.style[k] = leader / 100;
                } else if (k == "zIndex") {
                    tag.style.zIndex = obj[k];
                } else {
                    var leader = parseInt(getStyle(tag, k)) || 0;
                    var target = obj[k];
                    var step = (target - leader) / 10;
                    step = target > leader ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    tag.style[k] = leader + "px";
                }
                if (target != leader) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(tag.timer);
                if (typeof fn == "function") {
                    fn();
                }
            }
        }, 17)
    }

    function getStyle(tag, attr) {
        return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
    }

    // console.log($(window).width());
});