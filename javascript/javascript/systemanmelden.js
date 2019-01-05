$(document).ready(function(){
	wechselzureg()
});

"use strict"


function wechselzureg(){
	$("#reg").click(function(){
		window.location.href="register.php"
	})

	$("#anm").click(function(){
		window.location.href="login.php"
	})
}