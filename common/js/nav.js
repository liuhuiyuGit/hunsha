$(function(){

//nav 
var lastPosion=0;
$("#nav_right>ul>li").mouseenter(function(){
	$("#cloud").animate({"left":$(this).index()*110},200);
}).click(function(){
	lastPosion=$(this).index()*110;
	$("#cloud").css("left",lastPosion);
});
$("#nav_right").mouseleave(function(){
	$("#cloud").animate({"left":lastPosion},200);
});
});