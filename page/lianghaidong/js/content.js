/**
 * Created by HD on 2016/12/14.
 */

//气泡跟随鼠标浮动效果
$(function () {
    $(document).mousemove(function (e) {
        //创建一个新的div
        var newDiv=$("<div></div>");
        newDiv.addClass("mouseDiv");
        newDiv.css("backgroundColor",getRandomColor());
        $("body").append(newDiv);
        //设置div的位置
        var pageX=e.pageX-newDiv.width()/2+Math.random()*50;
        var pageY=e.pageY-newDiv.height()/2+Math.random()*50;
        newDiv.css({"left":pageX,"top":pageY});
        var json={
            "width":0,
            "height":0,
            "opacity":1
        };
        newDiv.animate(json,function () {
            $(".mouseDiv").remove();
        });

    });
    function getRandomColor() {
        var color=parseInt(Math.random()*16777216).toString(16);
        while(color.length<6){
            color="0"+color;
        }
        return "#"+color;
    }
});


//旋转木马
$(function () {
    var config = [
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
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
            opacity: 0.2,
            zIndex: 2
        }//4
    ];
    var flag=true;//控制图片完成继续下一张
    //获取所有li
    var lis=$("#wrap>#slide>ul>li");
    //为每个li标签分配对应的图片
    function assign() {
        lis.each(function (i) {
            $(lis[i]).stop().animate(config[i],function () {
                flag=true;
            });
        });
    }
    assign();
    //为wrap注册鼠标进入事件
    $("#wrap").mouseover(function(){
        $("#arrow").stop().animate({"opacity":1});
    }).mouseout(function(){
        $("#arrow").stop().animate({"opacity":0});
    });
    //为arrow的左右按钮注册点击事件
    $("#arrow>#arrRight").click(function(){
        if(flag){
            flag=false;
            config.push(config.shift());
            assign();
        }
    });
    $("#arrow>#arrLeft").click(function(){
        if(flag){
            flag=false;
            config.unshift(config.pop());
            assign();
        }
    });
});
//旋转木马结束

//动态切换手风琴开始

$(function () {
    var datas2=[{"src":"url(images/qsfq1.jpg) no-repeat"},{"src":"url(images/qsfq2.jpg) no-repeat"},{"src":"url(images/qsfq3.jpg) no-repeat"},{"src":"url(images/qsfq4.jpg) no-repeat"},{"src":"url(images/qsfq5.jpg) no-repeat"}];
    var datas1=[{"src":"url(images/tsfq1.jpg) no-repeat"},{"src":"url(images/tsfq2.jpg) no-repeat"},{"src":"url(images/tsfq3.jpg) no-repeat"},{"src":"url(images/tsfq4.jpg) no-repeat"},{"src":"url(images/tsfq5.jpg) no-repeat"}];
    loadthemes(datas1);
    $(".kind1").mouseover(function () {
        $(this).css("backgroundColor","red");
        if($(".themesPart>ul")){
            $(".themesPart>ul").remove();
        }
        loadthemes(datas1);
    }).mouseout(function () {
        $(this).css("backgroundColor","");
    });
    $(".kind2").mouseover(function () {
        $(this).css("backgroundColor","red");
        if($(".themesPart>ul")){
            $(".themesPart>ul").remove();
        }
        loadthemes(datas2);
    }).mouseout(function () {
        $(this).css("backgroundColor","");
    });
    function loadthemes(datas) {
        $("<ul></ul>").appendTo($(".themesPart"))
        for(var key in datas){
            $("<li></li>").appendTo($(".themesPart>ul"));
        }
        $(".themesPart>ul").children("li").each(function (i) {
            $(this).css("background",datas[i].src);
            $(this).mouseover(function () {
                $(this).stop().animate({"width":800}).siblings("li").stop().animate({"width":100});
            }).mouseout(function () {
                $(this).stop().animate({"width":240}).siblings("li").stop().animate({"width":240});
            });
        });
    }
});

//动态切换手风琴结束


//动态添加隐藏层
$(function () {
    $(".cus-content>a").mouseover(function () {
        $(this).children("img").stop().animate({"width":"270px","height":"270px"},function () {
            if($(".cus-content>a>div")){
                $(".cus-content>a>div").remove();
            }
            var width=$(this).parent().width();
            var height=$(this).parent().height();
            var divObj=$("<div></div>");
            var json={"width":width,"height":height,"backgroundColor":"orange","position":"absolute","top":"12.5%","left":"12.5%","zIndex":2,"opacity":0.5,"borderRadius":"50%","lineHeight":"200px","textAlign":"center","fontSize":"20px","color":"red"};
            divObj.css(json);
            divObj.text("执子之手与子偕老");
            divObj.appendTo($(this).parent());
        })
    }).mouseout(function () {
        $(this).children("img").stop().animate({"width":"250px","height":"250px"});
        $(".cus-content>a>div").remove();
    }).click(function () {
        if($(".mask")){
            $(".mask").remove();
        }
        //创建一个div
        var divObj=$("<div></div>");
        //克隆当前点击的图片
        var cloneImg=$(this).find("img").clone();
        cloneImg.css({"width":300,"height":300});
        divObj.append(cloneImg);
        divObj.addClass("mask");
        divObj.css({"position":"absolute","zIndex":1000,"width":450,"height":450,"backgroundColor":"#2D303F","top":225,"left":375,"opacity":0.8});
        cloneImg.css({"position":"absolute","top":80,"left":80})
        $(".cus-content").append(divObj);
        divObj.dblclick(function () {
            $(this).animate({"width":0,"height":0,"opacity":0});
            $(this).remove();
        }).mousedown(function () {
            $(this).mousemove(function (e) {
                var left=e.pageX-$(".cus-content").offset().left;
                var top=e.pageY-$(".cus-content").offset().top;
                left=left-225;
                top=top-225;
                left=left>0?left:0;
                top=top>0?top:0;
                left=left>750?750:left;
                top=top>450?450:top;
               $(this).css({"left":left,"top":top});
            })
        });
    });
});
//动态添加隐藏层结束
