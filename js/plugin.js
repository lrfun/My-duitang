

$(document).ready(function() {

// 头部鼠标经过显示导航菜单
	$('#nav').mouseover(function () {
		$(this).find('#subNav').show();		
	}).mouseout(function(){
		$(this).find('#subNav').hide();
	});

	$('#subNav').mouseover(function () {
		$(this).show();		
	}).mouseout(function(){
		$(this).hide();		
	});

	//头部鼠标经过显示关联账号
	$('#relLogin').mouseover(function(){
		$(this).find('#relNum_more').show();
	}).mouseout(function(){
		$(this).find('#relNum_more').hide();
	});

	$('#relNum_more').mouseover(function () {
		$(this).show();		
	}).mouseout(function(){
		$(this).hide();		
	});

    //首页轮播
     function DY_scroll(wraper, prev, next){
        wraper = $(wraper);
        prev = $(prev);
        next = $(next);
        img = wraper.find('.bannerBar');
        w = img.find('.banner_img').outerWidth(true);      
        next.click(function(){
            img.animate({'margin-left': -w}, function(){
                img.find('.banner_img').eq(0).appendTo(img);
                img.css({'margin-left': 0});
            });
        });
        prev.click(function(){
            img.find('.banner_img:last').prependTo(img);
            img.css({'margin-left': -w});
            img.animate({'margin-left': 0});
        });      
    }
    DY_scroll('.banner', '.ban_up', '.ban_down');
});

// $(document).ready(function() {
// 	show_Sub(nav,subNav);
// 	showSub(relLogin,relNum_more);
// });

// function show_Sub(a,b){
// 	$('#a').mouseover(function(){
// 		$(this).find('#b').show();
// 	}).mouseout(function(){
// 		$(this).find('#b').hide();
// 	});
// 	$('#b').mouseover(function(){
// 		$(this).show();
// 	}).mouseout(function(){
// 		$(this).hide();
// 	})

// }



