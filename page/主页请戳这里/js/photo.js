/**
 * Created by Administrator on 2016/10/2 0002.
 */
//局部清晰文件开始
$(document).ready(function () {
    /* This code is executed after the DOM has been completely loaded */

    // Assigning the jQuery object to a variable for speed:
    var main = $('#main');

    // Setting the width of the photoshoot area to 
    // 1024 px or the width of the document - whichever is smallest:

    main.width(Math.min(1080, $(document).width()));

    // Creating an array with four possible backgrounds and their sizes:

    var pics = new Array(
        {url: 'images/img/11.jpg', size: {x: 1080, y: 720}},
        {url: 'images/img/22.jpg', size: {x: 1080, y: 720}},
        {url: 'images/img/33.jpg', size: {x: 1080, y: 720}},
        {url: 'images/img/44.jpg', size: {x: 1080, y: 720}},
        {url: 'images/img/55.jpg', size: {x: 1080, y: 720}}
    );

    // Choosing a random picture to be passed to the PhotoShoot jQuery plug-in:

    var bg = pics[Math.floor(Math.random() * 5)];

    // Creating an options object (try tweeking the variables):

    var opts = {
        image: bg.url,
        onClick: shoot,
        opacity: 0.8,
        blurLevel: 5
    }

    // Converting the #main div to a photoShoot stage:

    main.photoShoot(opts);

    // Adding the album holder to the stage:
    $('<div class="album">').html('<div class="slide" />').appendTo(main);


    // Our own shoot function (it is passed as onClick to the options array above):

    function shoot(position) {
        // This function is called by the plug-in when the button is pressed

        // Setting the overlay's div to white will create the illusion of a camera flash:
        main.find('.overlay').css('background-color', 'white');

        // The flash will last for 100 milliseconds (a tenth of the second):
        setTimeout(function () {
            main.find('.overlay').css('background-color', '')
        }, 100);

        // Creating a new shot image:
        var newShot = $('<div class="shot">').width(150).height(100);

        newShot.append($('<img src="' + bg.url + '" width="' + (bg.size.x / 2) + '" height="' + (bg.size.y / 2) + '" />').css('margin', -position.top * 0.5 + 'px 0 0 -' + position.left * 0.5 + 'px'));

        // Removing the fourth shot (the count starts from 0):
        $('.shot').eq(4).remove();

        // Adding the newly created shot to the album div, but moved 160px to the right.
        // We start an animation to slide it in view:

        newShot.css('margin-right', -160).prependTo('.album .slide').animate({marginRight: 0}, 'fast');
    }

});
//局部清晰文件结束

$(function () {
    // 遮罩特效
    $("#kcon img").hover(function () {

        $("#kcon img").not($(this)).stop().animate({"opacity": "0.5"}, 300);
    }, function () {
        $("#kcon img").not($(this)).stop().animate({"opacity": "1"}, 300);
    });
    
    // //第三层图片区域特效
    $(".box .aa").mouseover(function () {
        $(this).css("opacity", 1).siblings(".aa").css("opacity", 0.3);
    }).mouseout(function () {
        $(".box .aa").css("opacity", 1);
    });

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


    //小火箭
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $(".huojian").fadeIn(300);
        } else {
            $(".huojian").fadeOut(300);
        }
    });
    $(".huojian").on("click", function () {
        $("body,html").animate({"scrollTop": "0px"}, 800);
    })
});


/*旋转图片区域开始*/
$(document).ready(function () {
    var slideShow = $('#slideShow'),
        ul = slideShow.find('ul'),
        li = ul.find('li'),
        cnt = li.length;
    updateZindex();

    if ($.support.transform) {

        li.find('img').css('rotate', function (i) {
            // Rotating the images counterclockwise
            return (-90 * i) + 'deg';
        });
        slideShow.bind('rotateContainer', function (e, direction, degrees) {
            slideShow.animate({
                width: 510,
                height: 510,
                marginTop: 0,
                marginLeft: 0
            }, 'fast', function () {
                if (direction == 'next') {
                    $('#slideShow li:first').fadeOut('slow', function () {
                        $(this).remove().appendTo(ul).show();
                        updateZindex();
                    });
                }
                else {
                    var liLast = $('#slideShow li:last').hide().remove().prependTo(ul);
                    updateZindex();
                    liLast.fadeIn('slow');
                }

                slideShow.animate({
                    rotate: Math.round($.rotate.radToDeg(slideShow.css('rotate')) + degrees) + 'deg'
                }, 'slow').animate({
                    width: 490,
                    height: 490,
                    marginTop: 10,
                    marginLeft: 10
                }, 'fast');
            });
        });

        slideShow.bind('showNext', function () {
            slideShow.trigger('rotateContainer', ['next', 90]);
        });

        slideShow.bind('showPrevious', function () {
            slideShow.trigger('rotateContainer', ['previous', -90]);
        });
    }

    else {
        slideShow.bind('showNext', function () {
            $('#slideShow li:first').fadeOut('slow', function () {
                $(this).remove().appendTo(ul).show();
                updateZindex();
            });
        });

        slideShow.bind('showPrevious', function () {
            var liLast = $('#slideShow li:last').hide().remove().prependTo(ul);
            updateZindex();
            liLast.fadeIn('slow');
        });
    }

    $('#previousLink').click(function () {
        if (slideShow.is(':animated')) {
            return false;
        }

        slideShow.trigger('showPrevious');
        return false;
    });

    $('#nextLink').click(function () {
        if (slideShow.is(':animated')) {
            return false;
        }

        slideShow.trigger('showNext');
        return false;
    });

    function updateZindex() {

        ul.find('li').css('z-index', function (i) {
            return cnt - i;
        });
    }

});

(function ($) {

    var div = document.createElement('div'),
        divStyle = div.style,
        support = $.support;

    support.transform =
        divStyle.MozTransform === '' ? 'MozTransform' :
            (divStyle.MsTransform === '' ? 'MsTransform' :
                (divStyle.WebkitTransform === '' ? 'WebkitTransform' :
                    (divStyle.OTransform === '' ? 'OTransform' :
                        false)));
    support.matrixFilter = !support.transform && divStyle.filter === '';
    div = null;

    $.cssNumber.rotate = true;
    $.cssHooks.rotate = {
        set: function (elem, value) {
            var _support = support,
                supportTransform = _support.transform,
                cos, sin,
                centerOrigin;

            if (typeof value === 'string') {
                value = toRadian(value);
            }

            $.data(elem, 'transform', {
                rotate: value
            });

            if (supportTransform) {
                elem.style[supportTransform] = 'rotate(' + value + 'rad)';

            } else if (_support.matrixFilter) {
                cos = Math.cos(value);
                sin = Math.sin(value);
                elem.style.filter = [
                    "progid:DXImageTransform.Microsoft.Matrix(",
                    "M11=" + cos + ",",
                    "M12=" + (-sin) + ",",
                    "M21=" + sin + ",",
                    "M22=" + cos + ",",
                    "SizingMethod='auto expand'",
                    ")"
                ].join('');

                // From pbakaus's Transformie http://github.com/pbakaus/transformie
                if (centerOrigin = $.rotate.centerOrigin) {
                    elem.style[centerOrigin == 'margin' ? 'marginLeft' : 'left'] = -(elem.offsetWidth / 2) + (elem.clientWidth / 2) + "px";
                    elem.style[centerOrigin == 'margin' ? 'marginTop' : 'top'] = -(elem.offsetHeight / 2) + (elem.clientHeight / 2) + "px";
                }
            }
        },
        get: function (elem, computed) {
            var transform = $.data(elem, 'transform');
            return transform && transform.rotate ? transform.rotate : 0;
        }
    };
    $.fx.step.rotate = function (fx) {
        $.cssHooks.rotate.set(fx.elem, fx.now + fx.unit);
    };

    function radToDeg(rad) {
        return rad * 180 / Math.PI;
    }

    function toRadian(value) {
        if (value.indexOf("deg") != -1) {
            return parseInt(value, 10) * (Math.PI * 2 / 360);
        } else if (value.indexOf("grad") != -1) {
            return parseInt(value, 10) * (Math.PI / 200);
        }
        return parseFloat(value);
    }

    $.rotate = {
        centerOrigin: 'margin',
        radToDeg: radToDeg
    };

})(jQuery);

//手风琴图片
$(function () {
    var lis = $("#productWrap li");
    var arr = [];
    for (var i = 0; i < lis.length; i++) {
        var li = lis[i];
        $(li).slideDown();
    }
    $("#productWrap li").mouseenter(function () {
        $(this).stop(true, true).animate({"width": "800px"}).siblings().stop(true).animate({"width": "100px"});
        $(this).find(".lidiv").stop(true, true).animate({"width": "800px", "opacity": 1});
        //$(".lidiv").stop(true).animate({"width": "800px"})
    })
    $("#productWrap li").mouseleave(function () {
        $(this).find(".lidiv").stop().animate({"width": "240px", "opacity": 0.6}, 1500);

    })

    $("#productWrap>ul").mouseleave(function () {
        $("#productWrap li").stop(false, false).animate({"width": "240px"});
    });
});