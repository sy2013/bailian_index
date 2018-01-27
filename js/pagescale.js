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

//nav nav_show的显示和隐藏
//鼠标划过  banner上的ul 对应的nav_con 显示于隐藏

//鼠标划过  banner上的ul 对应的nav_con 显示于隐藏





