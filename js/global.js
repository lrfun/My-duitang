

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
    var vwidth=$(".bannerBar banner_img").width();
    var Index=0;
    var theInt=null;
    var num=5;
    $(".prev_dian").eq(Index).addClass("cur");
    $(".btn").each(function(){
      $(this).click(function(){
        var pi=$(this).attr("data-id");
        if(pi=="pre"){
          Index--;
          if(Index<0){
            Index=4;
          }     
          scrolling();
          change();          
          return false;
        }
        if(pi=="next"){
          Index++;
          if(Index>4){
            Index=0;
          }      
          scrolling();
          change();     
          return false;
        }
      });
    });
    $(".prev_dian").each(function(){
      $(this).click(function(){
        var kolid=$(this).attr("data-id");
        Index=kolid;
        scrolling();
        change();    
      });
    });
    function scrolling() {
        clearInterval(theInt);
        theInt = setInterval(function () {
            Index++;
            if (Index < num) {
                change();
            } else {
                Index = 0;
                change();
            }
        }, 5000);
    }
    scrolling(-1);

    function change(){
      var idleft=Index*vwidth;
      $(".container .imgBox").animate({marginLeft:-idleft},500);
      $(".prev_dian").removeClass("cur").eq(Index).addClass("cur"); 
    }



     
    //  function DY_scroll(wraper, prev_page, next_page){
    //     var wrap = $(wraper);
    //     var prev = $(prev_page);
    //     var next = $(next_page);
    //     var img = wrap.find('.bannerBar');
    //     var w = img.find('.banner_img').outerWidth(true); 

    //     //点击圆点轮播
    //     $(".banner_num .banner_text li").each(function () {
    //         $(this).click(function () {
    //             var index=$(this).index();
    //             var mal=index*w;
    //             $(this).addClass("cur").siblings('li').removeClass('cur');
    //             img.animate({'margin-left':-mal+"px"});

    //         });
    //     });   

    //     //点击箭头轮播  
    //     next.click(function(){
    //         img.animate({'margin-left': -w}, function(){
    //             img.find('.banner_img').eq(0).appendTo(img);                               
    //             img.css({'margin-left': 0});                
    //         });
    //     });
    //     prev.click(function(){
    //         img.find('.banner_img:last').prependTo(img);
    //         img.css({'margin-left': -w});
    //         img.animate({'margin-left': 0});
    //     });      
    // }
    // DY_scroll('.banner', '.ban_up', '.ban_down');
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




