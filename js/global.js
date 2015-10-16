

// 头部鼠标经过显示导航菜单
$(document).ready(function() {
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



