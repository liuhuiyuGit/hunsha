/**
 * Created by GUOLIN on 2016/12/13.
 */
//页面加载事件
$(function () {
//奇思妙想标题
    $(".qsmx .title_center h3").css({"transform":"translateX(0)","opacity":"1"});
    $(".qsmx .title_center p").css({"transform":"translateX(0)","opacity":"1"});

//顶部轮播    
    //获取ul移动宽度
    var imgWidth=parseInt($(".screen").css("width"));
    //获取ul
    var ul=$(".screen>ul:eq(0)");
    //获取ul中的li
    var lis=$(".screen>ul>li");
    //获取ol
    var ol=$(".screen>ol:eq(0)");
    var pic=0;
    //遍历li
    for(var i=0;i<lis.length;i++){
        //为ol添加li按钮
        var liObj=$("<li></li>");//创建li
        liObj.attr("index",i);//为li设置索引
        ol.append(liObj);//把li追加到ol最后
        //为li按钮注册鼠标进入事件
        liObj.click(olClickHandle);
    }
    function olClickHandle() {
        //为当前li按钮添加类样式，为其他按钮去除类样式
        $(this).addClass("current").siblings("li").removeClass();
        //获取当前按钮index
        pic=parseInt($(this).attr("index"));
        //ul移动到对应图片位置
        $(".screen>ul>li:eq("+pic+")").fadeIn(700).siblings("li").fadeOut(1);
    }
    $(".screen>ul>li:eq(0)").fadeIn(1);
    //让ol中的第一个ol应用类样式
    $(".screen>ol>li:eq(0)").addClass("current");

    var setId=setInterval(clickHandle,4000);
    //为box注册鼠标进入离开事件
    $("#box").mouseover(function () {
        $("#arr").show(500);
        clearInterval(setId);
    }).mouseout(function () {
        $("#arr").hide(500);
        setId=setInterval(clickHandle,4000);
    });
    //为左右按钮注册点击事件

    $("#right").click(clickHandle);
    function clickHandle() {
        if(pic==($(".screen>ul>li").length-1)){
            pic=0;
            $(".screen>ul>li:eq(0)").fadeIn(700).siblings("li").fadeOut(1);
        }else {
            pic++;
            $(".screen>ul>li:eq("+pic+")").fadeIn(700).siblings("li").fadeOut(1);
        }
        //修改li按钮类样式
        ol.children("li").removeClass();
        ol.children("li:eq("+pic+")").addClass("current");
    }
    $("#left").click(function () {
        if(pic==0){
            pic=$(".screen>ul>li").length-1;
            $(".screen>ul>li:eq("+($(".screen>ul>li").length-1)+")").fadeIn(700).siblings("li").fadeOut(1);
        }else {
            pic--;
            $(".screen>ul>li:eq("+pic+")").fadeIn(700).siblings("li").fadeOut(1);
        }
        //修改li按钮类样式
        ol.children("li").removeClass();
        ol.children("li:eq("+pic+")").addClass("current");
    });


//高端定制
    $(".btn_img>a").mouseover(function () {
        var lj=$(this).attr("title");
        $(".bigImg>img").attr("src",lj);
        $(this).addClass("current").siblings().removeClass();
    });




//天马行空
    $(".sxsy_content li").mouseover(function () {
        $(this).children(".mask").stop().slideDown(200);
        $(this).children(".sxsy_text").stop().slideDown(200);
    });

    $(".sxsy_content li").mouseout(function () {
        $(this).children(".mask").stop().slideUp(200);
        $(this).children(".sxsy_text").stop().slideUp(200);
    });
    



//滚动到一个栏目时，标题动画    
    $(window).scroll(function () {
        var scrollTop=$(document).scrollTop();
        // console.log(scrollTop);
        if(scrollTop>1000){
            $(".sxsy .title_center h3").css({"transform":"translateX(0)","opacity":"1"});
            $(".sxsy .title_center p").css({"transform":"translateX(0)","opacity":"1"});
        }

        if(scrollTop>1650){
            $(".gddz .title_center h3").css({"transform":"translateX(0)","opacity":"1"});
            $(".gddz .title_center p").css({"transform":"translateX(0)","opacity":"1"});
        }
    });
    

//礼物
    $(window).scroll(function () {
        var height=$(document).scrollTop();
        $(".sp_gift").animate({"height":250+height},30);
        $(".a_giftBox").animate({"top":200+height},30);
    });
    
    
//
    $(".a_giftBox").click(function () {
        alert("还想要礼品，你想多了！！！");
    });
    
    
});



//气泡
// $(function () {
//     $(document).mousemove(function (e) {
//         //创建一个新的div
//         var newDiv=$("<div></div>");
//         newDiv.addClass("mouseDiv");
//         newDiv.css("backgroundColor",getRandomColor());
//         $("body").append(newDiv);
//         //设置div的位置
//         var pageX=e.pageX-newDiv.width()/2+Math.random()*50;
//         var pageY=e.pageY-newDiv.height()/2+Math.random()*50;
//         newDiv.css({"left":pageX,"top":pageY});
//         var json={
//             "width":0,
//             "height":0,
//             "opacity":1
//         };
//         newDiv.animate(json,function () {
//             $(".mouseDiv").remove();
//         });
//
//     });
//     function getRandomColor() {
//         var color=parseInt(Math.random()*16777216).toString(16);
//         while(color.length<6){
//             color="0"+color;
//         }
//         return "#"+color;
//     }
// });





