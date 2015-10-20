

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


// 轮播

function lunbo(){
	num = 3;
    var i = 0;
    var theInt;
    theInt = null;
    $(".banner .Pic").eq(0).fadeIn(500);
    $(".PicNum .Text").eq(0).addClass("cur");
    $(".PicNum .Text").each(function (i) {
        $(this).click(function () {
            HuanDeng(i);
            Change(i);
        });
    });
    
    
    HuanDeng = function (p) {
        clearInterval(theInt);
        theInt = setInterval(function () {
            p++;
            if (p < num) {
                Change(p);
            } else {
                p = 0;
                Change(p);
            }
        }, 5000);
    };
    HuanDeng(-1);
    function Change(num) {
        $(".banner .Pic").fadeOut(500);
        $(".banner .Pic").eq(num).fadeIn(500);
        $(".PicNum .Text").removeClass("cur");
        $(".PicNum .Text").eq(num).addClass("cur");
    }          
}
