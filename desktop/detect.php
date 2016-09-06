<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
<html xmlns="http://www.w3.org/1999/xhtml">  
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<title>生日快樂！</title>
<style type="text/css" media="handheld">
.proccess{   
border:1px solid;   
width:8px;
height:8px;   
background:#ffffff;   
margin:3px;   
}
</style>
<style type="text/css" media="screen">
.proccess{   
border:1px solid;   
width:8px;   
height:8px;   
background:#ffffff;   
margin:3px;
}
.load_show{width:300px;height:200px;margin:100px auto 0 auto;}
</style>

<script type="text/javascript">
var url;
function browserRedirect() {
	var sUserAgent= navigator.userAgent.toLowerCase(); 
	var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
	var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
	var bIsMidp= sUserAgent.match(/midp/i) == "midp";
	var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
	var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
	var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
	var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
	var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 

	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		url = 'http://192.168.1.100/temp/form/';
	} else {
		url = 'http://www.baidu.com';
	}
	return false;
}
</script>

</head>
<body onLoad="browserRedirect();" style='overflow:hidden; overflow-y:hidden'>
<div align=center id="load_show" class="load_show">
<font style="color:#0066FF">页面正在加载中 ......</font>
<div align="center">
<form method="post" name="proccess">
<script type="text/javascript">
for(i=0;i<9;i++){
document.write("<input class=proccess>");
}
</script>
</form>
</div>

<div align="center">
<script language=JavaScript>  
var p=0,j=0;   
var c=new Array('#f49f34','#fec434','#e0183d','#b63553','#be437c','#7cb41b','#158696','#004696')
setInterval('proccess();',100)
function proccess(){
	document.forms.proccess.elements[p].style.background=c[j]; p+=1;
	if(p==9){ p=0;j=j+1; }
}
</script>  
</div>
</div>
</body>  
</html>