//生鲜水果  无缝轮播
//进度条
	function CarouselFigure(ul){
		var timer = null;	
		timer  = setInterval( autoPlay,2000 );
	       function autoPlay(){
	       	   ul.animate( {"marginLeft":-306} ,1500,function(){
		       	   ul.css( "margin-left",0 ).find("li:first").appendTo(ul);       	   	
	       	   });
	       	   
	       }
	}			
	CarouselFigure( $(".pic_left_1_ul"))
	CarouselFigure( $(".pic_left_2_ul"))
	CarouselFigure( $(".pic_left_3_ul") )
	CarouselFigure( $(".pic_left_4_ul"))
	CarouselFigure( $(".pic_left_5_ul"))	
       //进度条
//     var slider = document.getElementsByClassName( "slider" );
//   for( let i = 0  i < 3 ;i++ ){
//   	let timer = setinterval( function(){
//   		if( parseInt(slider[i].style.width)==30){
//   			clearInterval( timer );
//   		}else{
//   			 slider[i].style.width = parseInt(slider[i].style.width) + 1 + "px" ;
//   			 slider[i].style.background = "#ccc"
//   		}
//   	},1500);
//   }
//  楼层图片移动
  $(".pic_right_ul").children().find("img").mouseenter(function(){
  	  $(this).stop().animate({ "margin-left":-20 },200);
  }).mouseleave(function(){
  	$(this).stop().animate({ "margin-left":0 },200);
  });
  $(".pic_right_div").children().find("img").mouseenter(function(){
  	  $(this).stop().animate({ "margin-left":-20 },200);
  }).mouseleave(function(){
  	$(this).stop().animate({ "margin-left":0 },200);
  });
//楼层
   var flag = true;
	$(window).scroll(function(){
	     if( $(document).scrollTop() < 1321 ){
	     	if(flag){
		     	$("#LoutiNav").css( "display","none" );
		     	flag = true;
	     	}
	     }else{
		     	$("#LoutiNav").css( "display","block" );
	     		flag = false;	
	    //  $(this).find("span").addClass("active").end().siblings().find("span").removeClass("active")
	    	}
	      	 //满足条件的楼层在可视区内面积最大  
	      	 $floor = $(".divs").filter(function(){//返回某个表达式
	      	 	return Math.abs($(this).offset().top - $(document).scrollTop() ) < $(this).outerHeight()/2;
	      	 }).index();
//	      	 var index = $floor.index();
	      	 //console.log( index );
	      	 
	      	 if( $floor != -1){
	      	 	console.log( $floor );
		      	 $(".loutihao li:not(.last)").eq( $floor )
//									      	  .find("span")
									      	  .addClass("pink")
//									      	  .end()
									      	  .siblings()
//									      	  .find("span")
									      	  .removeClass("pink");     	 	
	      	 }else{
	      	 	$(".loutihao li:not(.last)").find("span").removeClass( "pink" );
	      	 }      		
	})
	  
	  
	
	//找到对应楼层
	//点击楼层号  找到对应楼层  页面滚走的距离与楼层的top值相等
	var flag = true;  
	$("#LoutiNav li:not(.last)").click(function(){
		flag = false;
		var index = $(this).index();
		$(this).addClass("pink").siblings().removeClass("pink")
		var t  = $("#louti").children("div").eq(index).offset().top;   
		//设置页面滚走的距离
		 $("html,body").animate( { "scrollTop":t-70 },1000 ,function(){
      	 	flag = true;
      	 	//alert(flag)
      	 });
	});
	//点击top  返回顶部
	 $("#LoutiNav li:last").click(function(){
     	flag = false;
     	  $( "html,body" ).animate({ "scrollTop":0 },1500,function(){//点击按钮的时  最后一个span会active的   要清一下
     	  	   $("#LoutiNav li:not(.last)").find("span").removeClass("active");
     	  	   flag = true;
     	  	   //alert(flag)
     	  });
    })
//触发滚动条时  对应的楼层号高亮
	
	
	
	
    //右侧定位
    $("#shopping_right li").mouseenter(function(){
    	$(this).css( "background","red" );
    	$(this).find(".mes_none").animate( { "left":"-70px","background":"#fff"},500 );
    }).mouseleave(function(){
    	$(this).css( "background","#333" );
    	$(this).find(".mes_none").animate( { "left":"0px","background":"#333"},500 );
    });
    $("#shopping_right li:last").click(function(){
    	 $("html,body").scrollTop(0);
    });
    //guesslike
    //login1  
//  $(".a_login").mouseenter(function(){
//  	//alert();
//  	$("#login1_wrap").animate( {"left":"990px"},1500) 
//  })
    $("#login1 p").find(".iconfont").click(function(){
    	//alert();
    	$("#login1_wrap").animate( {"left":"1235px"},1500) 
    })
    var flag = true//
   $(".a_login").click(function(){
	 	if( flag ){
	    	$("#login1_wrap").animate( {"left":"990px"},1500,function(){
	    		flag = false;
	    	})
	 	 }
	 	flag = true;
    })

      //登录验证
// $("#_form").submit(function(){
// 	   if(){
// 	   	
// 	   }
// })
   
   //验证用户名
//  $("#uname").addListener("",function(e){
//  	var e = e || event;
// 	    $("#uname").val("") 
//  	
//  })
//  $("#upwd").keydown(function(){
// 	    $("#upwd").val("") 
// })
   	   var arr = getCookie("message")//[ "","" ]
   	   
   	   //console.log( arr );
   	  var uname = arr[0]
      // console.log( uname );
      var upwd = arr[1]
//    console.log( upwd );
      var flagName = null ;
   $("#uname").blur(function(){
   	    if(  $("#uname").val() !=  uname ){
   	    	flagName = false;
   	    	 $(".tishi_p1").css("display","block");
   	    	 $(".tishi_p1").html( "用户名错误" );
   	    }else{
   	    	flagName = true;
   	    }
   });
   
   var flagpwd = null ;
   $("#upwd").blur(function(){
   	    if(  $("#upwd").val() !=  upwd ){
   	    	flagpwd = false;
   	    	 $(".tishi_p2").css("display","block");
   	    	 $(".tishi_p2").html( "密码错误" );
   	    }else{
   	    	flagpwd = true;
   	    }
   });

    $(".denglu").click(function(){
    	if(  flagName && flagpwd ){
    		location.href = "login_page.html"
    	}
    });





