/**
 * Created by HD on 2016/12/13.
 */
$(function () {
    //获取相框的宽度
    var imgWidth=$(".banner>.screen").width();
    //定义一个全局变量用来存储索引
    var pic=0;
    var maxIndex=$(".banner>.screen>ul").children("li").length;
   //获取ul中所有li,遍历生成对应数量的li添加到ol中
    $(".banner>.screen>ul").children("li").each(function (i) {
        //获取ol
        $(".banner>.screen>ol").append($("<li></li>"));
        $(".banner>.screen>ol").on("mouseover","li",function () {
            //给当前li添加类样式 移除兄弟元素的类样式
           $(this).addClass("current").siblings("li").removeClass("current");
            pic=$(this).index();
            $(".banner>.screen>ul").stop().animate({"left":-pic*imgWidth});
        });
    });
    //设置ol的第一个li的颜色为默认类样式
    $(".banner>.screen>ol>li:first").addClass("current");
    //复制ul中第一个li添加到ul中
    $(".banner>.screen>ul>li:first").clone().appendTo($(".banner>.screen>ul"));
    var timer=setInterval(clickHandler,1500);
    //给banner注册鼠标进入和离开事件
    $(".banner").on("mouseover",function () {
       $(".banner>#arr").stop().show();
       clearInterval(timer);
    }).on("mouseout",function () {
        $(".banner>#arr").stop().hide();
        timer=setInterval(clickHandler,1500);
    });
    //给左右按钮注册点击事件
    $("#right").on("click",clickHandler);
    function clickHandler(){
        if(pic==maxIndex){
            pic=0;
            $(".banner>.screen>ul").css("left",-pic*imgWidth);
        }
        pic++;
        $(".banner>.screen>ul").stop().animate({"left":-pic*imgWidth});
        if(pic==maxIndex){
            //给ol中第一个li添加类样式
            $(".banner>.screen>ol>li:first").addClass("current");
            //移除ol中最后一个li的类样式
            $(".banner>.screen>ol>li:last").removeClass("current");
        }else{
            $(".banner>.screen>ol>li:eq("+pic+")").addClass("current").siblings("li").removeClass("current");
        }
    }
    $("#left").on("click",function () {
        if(pic==0){
            pic=maxIndex;
            $(".banner>.screen>ul").css("left",-pic*imgWidth);
        }
        pic--;
        $(".banner>.screen>ul").stop().animate({"left":-pic*imgWidth});
        $(".banner>.screen>ol>li:eq("+pic+")").addClass("current").siblings("li").removeClass("current");
    });
});