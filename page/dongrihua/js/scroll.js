// JavaScript Document
$('.ddw').val(0);
$('.ddw2').val(0);
setTimeout(function(){
    $('.num').eq(0).find('.pp').stop().animate({'top':'100px','opacity':'1'},1000,function () {
        $('.num').eq(0).find('h3').stop().animate({'top':'120px'},1000);
    })
},1000);


$(function(){
    $('.num_box').mousewheel(function(event, delta) {
        var aaaa=$('.ddw2').val();
        if (aaaa == 1){
            return;
        }
        qpgd(delta);
    });
});
function qpgd(a){
    var z =$('.ddw').val();
    b = parseInt(z);
    c = $('.num').length;
    if(a<0){
        if(-b==c-1){
            return;
        }
        b-=1;
        $('.ddw2').val(1);
    }else if(a>0){
        if(-b==0){
            return;
        }
        b+=1;
        $('.ddw2').val(1);
    }
    if(-b==0){
        $('.num').eq(1).find('.pp').animate({'top':'0','opacity':'0'},1000);
        setTimeout(function(){
            $('.num').eq(0).find('.pp').animate({'top':'100px','opacity':'1'},1000);
        },1600);
    }else if(-b==1){
        $('.num').eq(0).find('.pp h3 .divs').animate({'top':'0','opacity':'0'},1000);
        $('.num').eq(2).find('.pp h3 .divs').animate({'top':'0','opacity':'0'},1000);
        setTimeout(function(){
            $('.num').eq(1).find('.pp').animate({'top':'100px','opacity':'1',"opacity":1},1000);
        },1600);

    }else if(-b==2){
        $('.num').eq(1).find('.pp').animate({'top':'0','opacity':'0'},1000);
        $('.num').eq(3).find('.pp').animate({'top':'0','opacity':'0'},1000);
        setTimeout(function(){
            $('.num').eq(2).find('.pp').animate({'top':'100px','opacity':'1'},1000);
        },1600);
    }else if(-b==3){
        $('.num').eq(2).find('.pp').animate({'top':'0','opacity':'0'},1000);
        // $('.num').eq(4).find('.pp').animate({'top':'0','opacity':'0'},1000);
        setTimeout(function(){
            $('.num').eq(3).find('.pp').animate({'top':'100px','opacity':'1'},1000);
        },1600);
    }


    $('.ddw').val(b);
    $('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
    var single_hh = $(window).height();
    click_hh =-single_hh*b;
    $('.num_box').animate({'bottom': click_hh},1000);
    setTimeout(function(){
        $('.ddw2').val(0);
    },1400);
}
$('.fixed_r li').eq(0).addClass('on');
$('.fixed_r li').click(function(){
    var b = $(this).index();
    $(this).addClass('on').siblings('li').removeClass('on');
    $('.ddw').val(-b);


    /*---------------------*/
    if(b==0){
        $('.num').eq(1).find('.pp').animate({'top':'0','opacity':'0'},1000);
        setTimeout(function(){
            $('.num').eq(0).find('.pp').animate({'top':'100px','opacity':'1'},1000);
        },1600);
    }else if(b==1){
        $('.num').eq(0).find('.pp').animate({'top':'0','opacity':'0'},1000);
        $('.num').eq(2).find('.pp').animate({'top':'0','opacity':'0'},1000);
        setTimeout(function(){
            $('.num').eq(1).find('.pp').animate({'top':'100px','opacity':'1'},1000);
        },1600);
    }else if(b==2){
        $('.num').eq(1).find('.pp').animate({'top':'0','opacity':'0'},1000);
        $('.num').eq(3).find('.pp').animate({'top':'0','opacity':'0'},1000);
        setTimeout(function(){
            $('.num').eq(2).find('.pp').animate({'top':'100px','opacity':'1'},1000);
        },1600);
    }else if(b==3){
        $('.num').eq(2).find('.pp').animate({'top':'0','opacity':'0'},1000);
        // $('.num').eq(4).find('.pp').animate({'top':'0','opacity':'0'},1000);
        setTimeout(function(){
            $('.num').eq(3).find('.pp').animate({'top':'100px','opacity':'1'},1000);
        },1600);
    }

    /*---------------------*/

    var single_hh = $(window).height();
    click_hh =single_hh*b;
    $('.num_box').animate({'bottom': click_hh},1000);
})
function quanp(){
    var single_hh = $(window).height();
    var single_ww = $(window).width();
    $('.num').height(single_hh);
    $('.num li.item').width(single_ww);
}
quanp();
$(window).resize(function(){
    if (typeof indexSlides != 'undefined' && indexSlides.reformat)
        indexSlides.reformat();
    quanp();
});