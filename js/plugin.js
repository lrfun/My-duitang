

//首页头部鼠标经过显示导航菜单
$(document).ready(function() {
	$('#nav').mouseover(function () {
		$(this).find('#subNav').show();
		$('#navBox').css({"height":"42px","border-bottom":"0","z-index":"1000"});
	})

	$('#subNav').mouseover(function () {
		$(this).show();
		$('#navBox').css({"height":"42px","border-bottom":"0","z-index":"1000"});
	}).mouseout(function(){
		$(this).hide();
		$('#navBox').css({"height":"26px","z-index":"1000","border-bottom":"1px solid #E0E0E0"});
	})

	//首页头部鼠标经过显示关联账号
	$('#relLogin').mouseover(function(){
		$(this).find('#relNum_more').show();
	}).mouseout(function(){
		$(this).find('#relNum_more').hide();
	})

	$('#relNum_more').mouseover(function () {
		$(this).show();		
	}).mouseout(function(){
		$(this).hide();		
	})


})