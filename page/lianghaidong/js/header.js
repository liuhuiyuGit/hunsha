/**
 * Created by HD on 2016/12/13.
 */
$(function () {
   $(window).scroll(function () {
      if($(document).scrollTop()>0){
          var left=$(".header").offset().left;
          $(".header").css({"position":"fixed","top":0,"left":left,"zIndex":100});
          $(".banner").css("marginTop",$(".header").height());
      }else{
          $(".header").css("position","static");
          $(".banner").css("marginTop",0);
      }
   });
});