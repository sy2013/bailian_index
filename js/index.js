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


//	//form  ajax
//	var txt = $id("txt");
//	var form_list = $id("form_list");
//	txt.onkeyup = function(){
//		txt.value = "";
//  	form_list.innerHTML = "";
//  	var ajax = null;
//  	if( window.XMLHttpRequest ){
//  		ajax = new XMLHttpRequest();
//  	}else{
//  		ajax = new ActiveXObject("Microsoft.XMLHTTP");
//  	}
//  	ajax.open( "get","form.json" );
//  	ajax.send();
//  	ajax.onreadystatechange = function(){
//  		if( ajax.readyState == 4 && ajax.status == 200 ){
//  			var arr = JSON.parse(ajax.responseText);
//  		    //var str = "";
//  			for( var i = 0 ; i < arr.length ; i++ ){
//  				  if(  arr[i].pname.indexOf(txt.value) != -1){
//  				  	   //str += `<li>${arr[i].pname}</li>`;
//  				  	   var oli = document.createElement("li");
////  				  	   oli.innerHTML = arr[i].pname;
////  				  	   form_list.appendChild(oli);
//  				  }
//  			}
//  			//list.innerHTML = str;
//       	}
//  	} 
//  }
//  //事件委托    找到事件源
//  form_list.onmouseover = function(e){
//  	var e = e || event ;
//      var target = e.target || e.srcElement;
//      if( target.nodeName == "LI" ){
//      	 target.style.backgroundColor = "pink";
//      }
//  }
//  form_list.onmouseout = function(e){
//  	var e = e || event ;
//      var target = e.target || e.srcElement;
//      if( target.nodeName == "LI" ){
//      	 target.style.backgroundColor = "";
//      }
//  }
//  form_list.onclick = function(e){
//  	var e = e || event ;
//      var target = e.target || e.srcElement;
//      if( target.nodeName == "LI" ){
//      	 txt.value = target.innerHTML;
//      }
//  }
//  
    
    //banner  轮播图
    //自动轮播
    var index = 0 ;
    var timer = null;
    var arr = [ "#FA7C6A", "#E8E8E9", "#F7B857","#FD819E","#F798DF","#84A4EB","#FFA746","#FF9AA8"]
   timer = setInterval( autoPlay,1500 );
		function autoPlay(){
			index++;
			if( index == $(".banner_list li").size() ){
				index = 0
			}
			//图片的轮播   index==1  下标为0的图片
			$(".banner_list li").eq(index)
			          .fadeIn(1500)
			          .siblings()
			          .fadeOut(1500)
			//数字的轮播
			$("#banner_ol li").eq(index)
			          .addClass("active")
			          .siblings()
			          .removeClass( "active" );
			$("#banner_wrap").css("background",arr[index]);
		}
     $("#banner_ol li").mouseenter( function(){
        	clearInterval( timer );
        	index = $(this).index() - 1;//重新获取下标
        	autoPlay()
        } ).mouseleave(function(){
        	timer = setInterval( autoPlay,1500 );
        });
        
	$("#banner").mouseenter(function(){
//		alert()
		$('#span1').css("display","block");
		$('#span2').css("display","block");
	}).mouseleave(function(){
		$('#span1').css("display","none");
		$('#span2').css("display","none");
	})
   $("#span1").mouseenter(function(){
      	clearInterval( timer ); 
		$('#span1').css("background-position","0 -60px");
		$('#span2').css("background-position","-30px -60px");
	}).mouseleave(function(){
		$('#span1').css("background-position","0 0");
		$('#span2').css("background-position","-30px 0");
		timer = setInterval( autoPlay,1500 );
	})
     
    $("#span2").mouseenter(function(){
    	clearInterval( timer ); 
		$('#span1').css("background-position","0 -60px");
		$('#span2').css("background-position","-30px -60px");
	}).mouseleave(function(){
		$('#span1').css("background-position","0 0");
		$('#span2').css("background-position","-30px 0");
		timer = setInterval( autoPlay,1500 );
	})
   
        //banner  点击按钮 滑动
     $("#span1").click(function(){    
     	  index--;
     	  if( index == 0  ){
     	  	   index = 0 ;
     	  }
     	  $(".banner_list li").eq(index)
			          .fadeIn(1500)
			          .siblings()
			          .fadeOut(1500)
			//数字的轮播
		 $("#banner_ol li").eq(index)
			          .addClass("active")
			          .siblings()
			          .removeClass( "active" );
	      $("#banner_wrap").css("background",arr[index]);	     
     	});
     	$("#span2").click(function(){
     	      index++;
     	  if( index ==  $("#banner_ol li").size() ){
     	  	   index = $("#banner_ol li").size() ;
     	  }
     	  $(".banner_list li").eq(index)
			          .fadeIn(1500)
			          .siblings()
			          .fadeOut(1500)
			//数字的轮播
		 $("#banner_ol li").eq(index)
			          .addClass("active")
			          .siblings()
			          .removeClass( "active" );
	      $("#banner_wrap").css("background",arr[index]);
     	});
         
     //鼠标移入banner_ol手动轮播
     $("#banner_ol li").mouseenter(function(){
     	  clearInterval( timer ); 
     	  var index = $(this).index()-1;
     	   autoPlay()
     }).mouseleave(function(){
     	timer = setInterval( autoPlay,1500 );
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
