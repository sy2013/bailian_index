//点击注册  跳转注册页面 
$(".register").click(function(){
	location.href = "register.html"
})

//吸顶效果
	var flag = true;
	$(window).scroll(function(){
	     if( $(window).scrollTop() > 218 ){
	     	if(flag){
		     	$("#flie_head_wrap").stop().animate({"top":"0px"},1000);
	     		flag = false;
	     	}
	     }else{
	     	$("#flie_head_wrap").stop().animate({"top":"-70px"},1000);
	     	flag = true;
	     }
	})
//title

$(".p_span1").mouseenter(function(){
	$(".posi").css( "display","block" );
}).mouseleave(function(){
	$(".posi").css( "display","none" );
})


$(".banlian").mouseenter(function(){
	$("#myBailian_list").css( "display","block" );
}).mouseleave(function(){
	$("#myBailian_list").css( "display","none" );
})



$(".chongzhi").mouseenter(function(){
	$("#myChongzhi_list").css( "display","block" );
}).mouseleave(function(){
	$("#myChongzhi_list").css( "display","none" );
})


$(".kefu").mouseenter(function(){
	$("#myKefu_list").css( "display","block" );
}).mouseleave(function(){
	$("#myKefu_list").css( "display","none" );
})

$(".zhangshang").mouseenter(function(){
	$("#myZhangshang_list").css( "display","block" );
}).mouseleave(function(){
	$("#myZhangshang_list").css( "display","none" );
})
    
    //banner  轮播图
//  //自动轮播
    var ind = 0 ;
    var timer = null;
 var brr = [ "#FA7C6A", "#E8E8E9", "#F7B857","#FD819E","#F798DF","#84A4EB","#FFA746","#FF9AA8"]
   timer = setInterval( autoPlay,1500 );
		function autoPlay(){
			ind++;
			if( ind == $(".banner_list li").size()){
				ind = 0;
			}
			//console.log(ind );
			//图片的轮播   ind==1  下标为0的图片
			$(".banner_list li").eq(ind)
						          .fadeIn(1500)
						          .siblings()
						          .fadeOut(1500)
			//数字的轮播
			$("#banner_ol li").eq(ind)
					          .addClass("active")
					          .siblings()
					          .removeClass( "active" );
			$("#banner_wrap").css("background",brr[ind]);
		}		
		
     $("#banner_ol li").mouseenter( function(){
        	index = $(this).index();//重新获取下标
//      	alert(index)
//      	autoPlay()
		$(".banner_list li").eq(index)
					          .fadeIn(1500)
					          .siblings()
					          .fadeOut(1500)
					//数字的轮播
					$("#banner_ol li").eq(index)
					          .addClass("active")
					          .siblings()
					          .removeClass( "active" );
		$("#banner_wrap").css("background",arr[ind]);
		console.log( arr[ind] );
              
        })
    
	$("#da_ul").mouseenter(function(){
		clearInterval( timer );
		$('#span1').css("display","block");
		$('#span2').css("display","block");
	}).mouseleave(function(){
		$('#span1').css("display","none");
		$('#span2').css("display","none");
		timer = setInterval( autoPlay,1500 );
	})
   $("#span1").mouseenter(function(){ 
		$('#span1').css("background-position","0 -60px");
		$('#span2').css("background-position","-30px -60px");
	}).mouseleave(function(){
		$('#span1').css("background-position","0 0");
		$('#span2').css("background-position","-30px 0");
	})
     
    $("#span2").mouseenter(function(){ 
		$('#span1').css("background-position","0 -60px");
		$('#span2').css("background-position","-30px -60px");
	}).mouseleave(function(){
		$('#span1').css("background-position","0 0");
		$('#span2').css("background-position","-30px 0");
	}) 
//      //banner  点击按钮 滑动
     $("#span1").click(function(){     	 
     	  ind--;
     	  if( ind == 0  ){
     	  	   ind = 0 ;
     	  }
     	  $(".banner_list li").eq(ind)
			          .fadeIn(1500)
			          .siblings()
			          .fadeOut(1500)
			//数字的轮播
		 $("#banner_ol li").eq(ind)
			          .addClass("active")
			          .siblings()
			          .removeClass( "active" );
	      $("#banner_wrap").css("background",arr[ind]);	     
     	});
     	$("#span2").click(function(){ 
     	      ind++;
     	  if( ind ==  $("#banner_ol li").size() ){
     	  	   ind = $("#banner_ol li").size()-1 ;
     	  }
     	  $(".banner_list li").eq(ind)
			          .fadeIn(1500)
			          .siblings()
			          .fadeOut(1500)
			//数字的轮播
		 $("#banner_ol li").eq(ind)
			          .addClass("active")
			          .siblings()
			          .removeClass( "active" );
	      $("#banner_wrap").css("background",arr[ind]);
     	});
     	
     	
   //banner  选项卡  banner_right
   $("#banner_tab_top").find("em").mouseenter(function(){
   	   $(this).css({"border-bottom":"none"});
   	   $("#banner_tab_center").find("div").eq( $(this).index() )
   	                          .addClass("show")
   	                          .siblings()
   	                          .removeClass("show")
   	   $(this).addClass("purple")
   	          .siblings()
   	          .removeClass("purple");
   }).mouseleave(function(){
   	    $(this).css("border-bottom","1px solid #eee");
   	    
   });
   
//鼠标划过  banner上的ul 对应的nav_con 显示于隐藏
$("#nav_box").mouseenter(function(){	
	$("#nav_con").css("display","block");
	$("#nav_show").children().find("li").mouseenter(function(){
		$("#nav_con").children().eq($(this).index()).css({"display":"block","z-index":1000})
		                                            .siblings()
		                                            .css({"display":"none","z-index":0});
	}).mouseenter(function(){
		$("#nav_con").children().eq($(this).index()).css({"display":"block","z-index":1000})
		                                            .siblings()
		                                            .css({"display":"none","z-index":0});
	})
}).mouseleave(function(){
	$("#nav_con").css("display","none");
})
