$(document).ready(function(){
	wait()
 });

function wait(){
	setTimeout(checkwidth, 10)
}

function checkwidth(){
	if(screen.width <= 600){
		window.location.href="m-kontakt.html"
	}
	else{
		false	
	}
}