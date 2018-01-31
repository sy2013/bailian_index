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
//图片隐藏与显示
$(".pinpai_p2 span").mouseenter(function(){
	$(this).children("i").css( "display","block" );
}).mouseleave(function(){
	$(this).children("i").css( "display","none" );
	
})

$(".sel_d1 li").mouseenter(function(){
	$(this).css( "background","red" );
}).mouseleave(function(){
	$(this).css("background","#ccc");
	
})
//ajax 
//页面加载数据加载到页面中    通过ajax请求服务器数据
  window.onload = function(){
  	$.ajax({
  		type : "get",
  		url : "detail_page.json",
  		success : function(json){
  			str = "";
  			for( var attr in json){
  				console.log(json[attr]);
  				for( var i = 0 ; i < json[attr].length ; i++ ){
  					var pro = json[attr][i]
  					str += `<li>
			    			<a href="pagescale.html"><img src="images/con_${pro.src}"/></a>
			    			<p class="con_p1">${pro.price}</p>
			    			<p class="con_p2">十六盏 2018 春节百联有礼六盏 2018 春节百联有</p>
			    			<p class="con_p3">因春节放假 物流在2月29号假 物流在2月29假 物流在2月2</p>
			    			<button class="con_btn">加入购物车</button>
			    		</li>`
  				}
  			}
  			$(".con_ul").html( str );
  			$(".con_ul li").mouseenter(function(){
  				$(this).css( "border","1px solid red");
  			}).mouseleave(function(){
  				$(this).css( "border","1px solid #ccc");
  			})
  			
  			
  			$(".con_ul li").find("button").mouseenter(function(){
  				$(this).css( "background","red");
  			}).mouseleave(function(){
  				$(this).css( "background","#fff");
  			})
	  	}		
  	})
  	
  };