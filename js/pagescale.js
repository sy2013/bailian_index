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

//nav  nav_show  下拉菜单

//nav nav_show的显示和隐藏
//鼠标划过  banner上的ul 对应的nav_con 显示于隐藏

$("#nav_box").mouseenter(function(){	
	//$("#nav_con").css("display","block");
	$(".nav_all").mouseenter(function(){
		$("#nav_show").css("display","block");
		 $("#nav_show").children().find("li").mouseenter(function(){
		 	$("#nav_con").css("display","block");
			$("#nav_con").children().eq($(this).index()).css({"display":"block","z-index":1000})
			                                            .siblings()
			                                            .css({"display":"none","z-index":0});
		 	
		 })
	}).mouseenter(function(){
		$("#nav_con").children().eq($(this).index()).css({"display":"block","z-index":1000})
		                                            .siblings()
		                                            .css({"display":"none","z-index":0});
	})
}).mouseleave(function(){
	$("#nav_con").css("display","none");
	$("#nav_show").css("display","none");
})

// 放大镜
//鼠标移入小图 获取小图下标  照度对应的中图
		//鼠标移入到小图上  获取小图的下标
     $("#bottom li").mouseenter( function(){
     	 var index = $(this).index();
     	 $("#small img").eq(index).show().siblings("img").hide();
		$("#big img").eq(index).show().siblings("img").hide();
     })
 	    $("#small").mouseenter(function(){
 		    $("#mask").css("display","block");
 		    $("#big").css("display","block")
 	}).mouseleave(function(){
 		$("#big").css("display","none");
         $("#mask").css("display","none");
     	})
     $("#small").mousemove( function(e){
     	var e = e || event;
     	$("#mask").css( "display","block"  );
     	var x = e.pageX - $("#mask").outerWidth()/2 - $("#box").offset().left;
     	var y = e.pageY - $("#mask").outerHeight()/2 - $("#box").offset().top;
     	var maxL = $("#box").outerWidth() - $("#mask").outerWidth();
     	var maxT = $("#box").outerHeight() - $("#mask").outerHeight();
     	//边界处理
     	x =Math.min( maxL,Math.max( 0,x )); 
     	y =Math.min( maxT,Math.max( 0,y ));
     	$("#mask").css({
     		left:x,
     		top:y
     	}) ;
     	
     	$(".bigImage").css( {
     		left:-x*(800/450),
     		top:-y*(800/450),
     	} );
     });
       
       //设置倒计时
//	
   $(window).load(function(){
	   var start = new Date();//当前时间
	   var end = new Date("2018-02-10 19:54:00");//结束时间
	   var t = timeDiff(start,end);
		//时间显示
		function showTime( t ){
			//剩余的天数
			var d = parseInt( t/3600/24 )
			//剩余的小时
			var h = parseInt( (t - d*3600*24)/3600 ) ;
			//剩余的分钟 
			var m = parseInt( (t - h*3600 - d*3600*24)/60 );
			//剩余的秒数
			var s = parseInt(t - h*3600 - m * 60 - d*3600*24 );
			y = d + "天" + h + "小时" + m + "分钟" + s + "秒";
			//alert(y)
			return y;
		}
		
		var timer = setInterval(function(){
			t--;
			//console.log( t );
			if( t < 0 ){
				$(".time_down").html("活动结束");
				clearInterval(timer);
			}else{
				$(".time_down").html( showTime( t ) )
			}
		},1000)
   });
       



