$(document).ready(function(){
	weiter()
	$("#spielfeld").hide()
});

"use strict"

var randzahl = 0;
var frage = "";
var gestelltefragen = []

function weiter(){
	$(".row").css("opacity","0.1")
	$("#anleitungstxt").animate({"font-size":"22px"},200)
	setTimeout(function(){$("#anleitungstxt").animate({"font-size":"16px"},200)},301)
	$("#anleitungstxt").html("Willkommen bei<br>-Ich hab noch nie-<br>Um zu Spielen, musst du auf 'Spielen' drücken.")
	$("#anleitungstxt").fadeIn(400)
	setTimeout(function(){$(".row").animate({"opacity":"1.0"},400)},1000)
	$("#spielen").click(function(){
		$("#spielen").css("pointer-events","none")
		$(".footer").fadeOut(400)
		$("#spielen").fadeOut(500)
		setTimeout(function(){
			$("#spielfeld").fadeIn(500)
			$(".row").css("opacity","0.1")
			$("#anleitungstxt").animate({"font-size":"22px"},200)
			setTimeout(function(){$("#anleitungstxt").animate({"font-size":"16px"},200)},301)
			$("#anleitungstxt").html("Um eine Frage zu bekommen auf 'Nächste Frage' drücken.")
			$("#anleitungstxt").fadeIn(400)
			setTimeout(function(){$(".row").animate({"opacity":"1.0"},400)},1500)
			frageauswaehlen()
		}, 500)
	})
}



function frageauswaehlen(){
	$("#naechste").click(function(){
		randzahl = parseInt(Math.random()*914)
			check()	
	})
}

function rand(){
	randzahl = parseInt(Math.random()*914)
		check()
}

function check(){
	if(gestelltefragen.length == ichhabnochniefragen.length-1){
		alert("Respekt, du hast alle Fragen durch!")
	}
	else{
		gestelltefragen.sort()
		for(var x=0;x<=gestelltefragen.length;x++){
			if(randzahl == gestelltefragen[x]){
				return rand()
			}	
		}	
			
		fragestellen()
		gestelltefragen.push(randzahl)		
		return gestelltefragen
	}
}

function fragestellen(){
	frage = ichhabnochniefragen[randzahl]
	$("#frage").html(frage)
	$("#fragennr").html(randzahl)
}



