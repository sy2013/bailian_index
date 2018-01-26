//生鲜水果  无缝轮播
//进度条

//	var index = 0; 
//	var timer = null;	
//	timer  = setInterval( autoPlay,1500 );
//     function autoPlay(){
//     	   index++;
//     	   if( index == $(".pic_left ul").children.length ){
//     	   	   index = $(".pic_left ul").children.length
//     	   }
//     	   startMove( $(".pic_left ul"),{ "left" : -index*306 } )       	   
//		   var slider = document.getElementsByClassName("slider");
//			      var timer = setInterval(function(){
//			      	 if(  slider.offsetWidth == 30 ){
//			      	 	alert( slider.offsetWidth)
//			      	 	clearInterval( timer );
//			      	 }else{
//			      	 	 slider.style.width =  slider.offsetWidth + 1 + "px";
//			      	 }
//			      },1500);
//     }
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
	      $(this).find("span").addClass("active").end().siblings().find("span").removeClass("active");
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
	 $(window).scroll(function(){
	 	//alert()
	 	//alert(flag)
      	if( flag ){
	      	 var sTop = $(document).scrollTop();
	      	// alert(sTop)
	      	 //满足条件的楼层在可视区内面积最大  
	      	 $floor = $("#louti").children("div").filter(function(){//返回某个表达式
	      	 	return Math.abs($(this).offset().top - sTop) < $(this).outerHeight()/2;
	      	 })
	      	 var index = $floor.index(); 
	      	// alert($floor)
	      	// alert(index);
	      	 //倒着的index 值从-1开始  判断一下
	      	 if( index != -1){
		      	 $("#LoutiNav li:not(.last)").eq(index)									      	 
									      	 .addClass("pink")
									      	 .siblings()									    	 
									      	 .removeClass("pink");     	 	
	      	 }else{
	      	 	$("#LoutiNav li:not(.last)").find("span").removeClass( "pink" );
	      	 }      		
      	}
      })
	 
    
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
