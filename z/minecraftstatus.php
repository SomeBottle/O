<?php
/*获取status*/
$getstr=file_get_contents("http://status.mojang.com/check");
$statusjson=json_decode($getstr,true);
$status=$statusjson[3]['authserver.mojang.com'];
$img="";
$statustxt="";
if($status=="green"){
	$img="Happy-Server.gif";
	$statustxt="<p style='color:green'>完美存活√</p>";
}else if($status=="yellow"){
	$img="Mellow-Server.gif";
	$statustxt="<p style='color:orange'>苟延残喘TAT</p>";
}else if($status=="red"){
	$img="Sad-Server.gif";
	$statustxt="<p style='color:red'>瞬间爆炸QAQ</p>";
}
?>
<head>
<title>Status.</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
</head>
<center>
<h5>Minecraft正版验证服务器状态</h5>
<img src="<?php echo $img;?>"></img>
<?php echo $statustxt;?>
</center>