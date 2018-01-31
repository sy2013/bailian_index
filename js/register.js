//注册  正则表达式验证
//用户名
//用户名	
        var  flagName = null;
	$("#uname").blur(function(){
		var reg = /^.{3,}$/
		var str = $("#uname").val();
		if( str == "" ){		
			$("#span1").html("请输入用户名");
			flagName = false;
		}else if( !reg.test(str) ){
			flagName = false;
		    $("#span1").html("用户名至少三位字符");
		}else{
			flagName = true;
		}
		
	});

//密码
     var  flagpwd1 = null;
$("#upwd1").blur(function(){
	var reg = /^\w{8,}$/
	var str = $("#upwd1").val();
	if( str == "" ){
		$("#span2").html("请输入密码");
		 flagpwd1 = false;
	}else if( !reg.test(str) ){
		flagpwd1 = false;
		$("#span2").html("用户名只能由字母或字母和数字组合");
	}else{
		flagpwd1 = true;
	}
	
});

//确认密码
     var  flagpwd2 = null;
$("#upwd2").blur(function(){
	var str = $("#upwd2").val();
	if( str== "" ){
		$("#span3").html("请输入确认密码");
		flagpwd2 = false;
	}else if( $("#upwd2").val() != $("#upwd1").val() ){
		flagpwd2 = false;
		$("#span3").html("不密码一致 请重新输入")
	}else{
		flagpwd2 = true;
	}
	
});

//手机号
   var  flagtel = null;
$("#tel").blur(function(){
	var reg = /^\d{11}$/
	var str = $("#tel").val();
	if( str == "" ){
		flagtel = false;
		$("#span4").html("请输入手机号");
	}else if( !reg.test(str) ){
		flagtel = false;
		$("#span4").html("手机号不合法");
	}else{
		flagtel = true;
	}
});

///验证码
function fn(){
		var str = "abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ23456789";
		var l = str.length;
		var l1 = parseInt(Math.random()*l);
		var l2 = parseInt(Math.random()*l);
		var l3 = parseInt(Math.random()*l);
		var l4 = parseInt(Math.random()*l);
		//console.log(l1,l2,l3,l4)
		var x = str[l1]+str[l2]+str[l3]+str[l4]
		return x	
	}
	$(".btn1").html( fn )
   $(".aa").click(function(){
   	   $(".btn1").html( fn )
   })
   var  flagch = null;
$("#ch_mes").blur(function(){
	var str = $("#ch_mes").val()
	if( str == "" ){
		 flagch = false;
		$("#span5").html("请输入验证码");
	}else if( ($("#ch_mes").val() != $(".btn1").html())  ){
		 flagch = false;
		$("#span5").html("验证码错误");
	}else{
		 flagch = true;
	}
});

///短信验正码

//var flagTel = null;
//$("#ch_mes").blur(function(){
//	if( str4 == "" ){
//		flagTel = false;
//		$("#span5").html("请输入验证码");
//	}else if( !($("#ch_mes") == $(".btn1").val())  ){
//	    flagTel = false;
//		$("#span5").html("验证码错误");
//	}else{		
//		flagTel = true;
//	}
//});



///邮箱
    var  flagemali = null;
$("#emali").blur(function(){
	var reg = /^\w+@\w+(\.\w+)+$/
	if( $("#emali").val() == "" ){
		flagemali = false;
		$("#span7").html("请输入邮箱");
	}else if(  !reg.test( $("#emali").val() ) ){
		flagemali = false;
		$("#span7").html("邮箱不合法");
	}else{
		flagemali = true;
	}
});

//点击注册按钮  
$("#zhuce").click(function(){
	if( flagName && flagpwd1 && flagpwd2 && flagtel && flagch && flagemali){
		var ujson = {
			"uname":$("#uname").val(),
			"upwd1":$("#upwd1").val()
		}
		//将json存入数组
		var arr=[]
		for( var attr in ujson ){
			arr.push(ujson[attr])
		}
//       arr.push(ujson)
         //console.log(arr)
		//将arr 存cookie
		setCookie("message",JSON.stringify(arr))
		location.href = "register_page.html"
	}
})

