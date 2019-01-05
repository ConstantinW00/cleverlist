$(document).ready(function(){
	$("*").val("")
	$("#card2").hide()
	$("#card3").hide()
	$("#home").hide()
	$("#endezurueck").hide()
	zuerklaerung()
	zeitmessen()
	rechnen()
	beenden()
});

"use strict"

var allezeiten = []
var bestezeiten = []
var ausgabe;
var farbe = 0;
var randzeit = 0;
var durchschnitt = 0;





function zuerklaerung(){
	$("#spielstart").click(function(){
		$(".footer").fadeOut(400)
		$("#spielstart").fadeOut(350)
		$("#uebertxt").animate({"font-size":"25px"},400)
		$("#anleitungstxt").animate({"font-size":"12px"},400)
		setTimeout(function(){
			$("#card2").fadeIn(400)
			$("#los").click(function(){
				checkfeld()
			})
		},401)
	})
}

function checkfeld(){
	if($("#spielername").val() == 0){
		$("#spielername").css("background-color","red")
	}
	else{
		$("#name").html($("#spielername").val())
		$("#card2").fadeOut(400)
		setTimeout(feldzeigen(),401)
	}
}

function feldzeigen(){
	$("#card3").fadeIn(400)
	$("#reaktionsfeld").css("pointer-events","none")
	$("#zeit").html("Zeit: ")
	$("#allezeiten").html("Deine Zeiten: ")
	$("#bestezeiten").html("Deine Bestzeit:<br><br>Durchschnitt:<br>")
}

function zeitmessen(){
	$("#messen").click(function(){
		$("#messen").css("pointer-events","none")
		$("#messen").css("opacity","0.3")
		$("#zeit").html("Zeit: ")
		if(allezeiten.length == 12){
			allezeiten = []
			farbwahl()
		}
		else{
			farbwahl()
		}
	})
}

function farbwahl(){
	farbe = "#000000".replace(/0/g,function(){
		return (~~(Math.random()*16)).toString(16);
	});

	randzeit = parseInt(Math.random()*2000+1500)

	var timeout = setTimeout(function(){
		farbwechsel()
		clearTimeout(timeout)
	},randzeit)
}

function farbwechsel(){
	$("#reaktionsfeld").css("pointer-events","auto")
	$("#reaktionsfeld").css("background-color",farbe)
	zeit1 = new Date()	
}


function rechnen(){	
	$("#reaktionsfeld").click(function(){
		var zeit = new Date() - zeit1
		$("#zeit").html("Zeit: "+zeit)
		allezeiten.push("<br>"+zeit)
		bestezeiten.push(zeit)
		$("#reaktionsfeld").css("pointer-events","none")
		$("#messen").css("pointer-events","auto")
		$("#messen").css("opacity","1.0")
		$("#allezeiten").html("Deine Zeiten: "+allezeiten)
		zeit1 = 0
		zeit = 0
		ausgabebestezeiten()
		scroll()
		return zeit1, zeit, allezeiten
	})
}

function ausgabebestezeiten(){
	var zeitensortiert = bestezeiten.sort(function(a, b){return a - b})
	durchschnitt = 0
	for(var t=0;t<bestezeiten.length;t++){
		durchschnitt += parseInt(bestezeiten[t])
	}
	durchschnitt = Math.floor(durchschnitt/bestezeiten.length)
	$("#bestezeiten").html("Deine Bestzeit: <br>"+zeitensortiert[0]+"<br>Durchschnitt:<br>"+durchschnitt)
}

function scroll(){	
  		var elem = document.getElementById('allezeiten');
  		elem.scrollTop = elem.scrollHeight;
	
  		var elem = document.getElementById('bestezeiten');
  		elem.scrollTop = elem.scrollHeight;
}


function beenden(){
	$("#ende").click(function(){
		$(".header").animate({"margin-top":"-40%"}, 400)
		$("#ende").animate({"opacity": "1"}, 220)
		setTimeout(function(){
			$("#ende").animate({"opacity": "0"}, 220)
		},220)
		setTimeout(endezeigen,600)
	})

	function endezeigen(){
		$("#ende").hide()
		$("#endezurueck").fadeIn(300)
		$("#home").fadeIn(400)
		$("#home").click(function(){
			window.location.href="spiele.html"
		})
		$("#endezurueck").click(function(){
			$("#endezurueck").fadeOut(600)
			$("#home").fadeOut(600)
			setTimeout(function(){
				$("#endezurueck").hide()
				$("#ende").css("opacity","0")
				$("#ende").show()
				$(".row").animate({"margin-top":"0%"}, 400)
				$(".header").animate({"margin-top":"0%"}, 400)
				$("#ende").animate({"opacity": "0.3"}, 220)
			},1000)
		})
	}
}









//farbe = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});