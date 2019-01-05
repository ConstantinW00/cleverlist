$(document).ready(function(){
	$("*").val("")
	namenloeschen()
	beenden()
	spielereinspeichern()
	$("#card2").hide()
	$("#card3").hide()
	$("#placeholder").hide()
	$("#home").hide()
	$("#erg").hide()
	$("#endezurueck").hide()
	$("#aktaufgabe").hide()
	$("#hinweistxt").hide()
	spielendrueck()
	$("#anleitungstext").html("Willkommen bei \n Wahrheit oder Pflicht")
});

"use strict"

var spielerarray = [];
var auslosearray = ["","Wahrheit","Pflicht"]
var punktearray = []
var wop;
var wopn;
var zeit = 0;
var runden = 0;
var spielerid = 0;
var randzahl = 0;
var aktstand = 0;
var schluecke = 0;
var aufgabe;


function spielendrueck(){
	$("#spielen1").click(function(){
		$("#card1").fadeOut(400)
		$(".footer").fadeOut(400)
		$("#anleitungstxt").fadeOut(400)
		setTimeout(function(){
			$("#card2").fadeIn(400)
			$(".row").css("opacity","0.1")
			$("#anleitungstxt").html("Gib die Namen der Mitspieler an.<br>Du musst erst zwei Spieler 'Hinzufügen' um 'Spielen' zu können.")
			$("#anleitungstxt").fadeIn(400)
			setTimeout(function(){$(".row").animate({"opacity":"1.0"},400)},1500)
		},401)
	})
}

function namenloeschen(){
	$("#kreuz").click(function(){
		$("#spieler").val("")
	})
}

function spielereinspeichern(){
	$("#speichern").click(function(){
		if($("#spieler").val() == ""){
			$("#spieler").css("background-color","#D8224B")
			false
		}
		else{
			spielerarray.push($("#spieler").val())
			punktearray.push(0)
			$("#hinweistxt").fadeOut(1000)
			$("#spieler").val("")
			$("#spieler").css("background-color","#0097a3")
			return spielerarray
		}
	})
	$("#allespieler").click(function(){
		if(spielerarray.length <= 1){
			$("#hinweistxt").fadeIn(200)
		}
		else{
			$("#allespieler").css("pointer-events","none")
			spielfeldzeigen()
		}
	})
}

function spielfeldzeigen(){
	$("#card2").fadeOut(500)
	$("#anleitungstext").fadeOut(500)
	$("#uebertxt").css("margin-left", "5%")
	$("#geschafft").animate({"opacity":"0.3"}, 500)
	$("#trinken").animate({"opacity":"0.3"}, 500)
	$("#uebertxt").animate({"font-size":"30px"}, "slow")
	setTimeout(function(){
		$("#card3").fadeIn(500)
		$(".footer").hide()
		$(".row").css("opacity","0.1")
		$("#anleitungstxt").html("Um mit dem Spiel zu Beginnen musst du auf 'Losen' drücken.<br>Wurde die Aufgabe erfüllt drück auf 'Geschafft'.<br>Wurde sie nicht erfüllt, drück auf 'Fail'.")
		$("#anleitungstxt").fadeIn(500)
		setTimeout(function(){$(".row").animate({"opacity":"1.0"},400)},1500)
	},501)
	
	spielstart()
}

function spielstart(){
	$("#aktaufgabe").hide()
	$("#aktaufgabe").fadeIn(400)
	$("#dranist").html(spielerarray[spielerid])
	$("#punkte").html(punktearray[spielerid])
	$("#geschafft").css("pointer-events","none")
    $("#trinken").css("pointer-events","none")
    $("#los").click(function(){
    	$("#los").css("pointer-events","none")
    	$("#los").fadeOut(200)
    	fragesuche()
    })
    clickevents()
}

function fragesuche(){
	wop = parseInt(Math.random()*2+1)
	if(wop == 1){
		wopn = 2
	}
	else if(wop == 2){
		wopn = 1
	}
	rotate(wop,wopn)
	setTimeout(function(){
		aufgabestell()
	},5000)

	return wop, wopn
}

function rotate(){
	zeit = zeit += 10;
		$("#aktaufgabe").html(auslosearray[wop])
			var drehen1 = setTimeout(drehen, zeit)
				function drehen(){
                    $("#aktaufgabe").html(auslosearray[wopn])
					var abfrage1 = setTimeout(abfrage, zeit)
				}
				function abfrage(){
					if(runden == 20){
						$("#aktaufgabe").html(auslosearray[wop])
						zeit = 0;
						runden = 0;
						return zeit, runden
					}
					else{
						rotate(runden++)
					}	
				}	
}

function aufgabestell(){
	//1 Wahrheit
	//2 Pflicht
	if(spielerid == parseInt(spielerarray.length)){
		spielerid = 0;
	}

	$("#geschafft").css("pointer-events","auto")
    $("#trinken").css("pointer-events","auto")
    $("#geschafft").animate({"opacity":"1.0"}, 200)
	$("#trinken").animate({"opacity":"1.0"}, 200)
	$("#punkte").html(punktearray[spielerid])
	$("#dranist").html(spielerarray[spielerid])

	if(wop == 1){
		randzahl = parseInt(Math.random()*250)
		$("#aufgabe").html(aufgabenwahrheit[randzahl])

	}
	else if(wop == 2){
		randzahl = parseInt(Math.random()*219)
		$("#aufgabe").html(aufgabenpflicht[randzahl])
	}

	return spielerid
}

function clickevents(){

	$("#geschafft").click(function(){
		pluspunkt()
	})

	$("#trinken").click(function(){
		minuspunkt()
	})
}

function pluspunkt(){
	aktstand = punktearray[spielerid]
	var endstand = aktstand+=1
	punktearray.splice(spielerid,1,endstand)
	$("#punkte").html(punktearray[spielerid])
	spielerid++;
	$("#geschafft").css("pointer-events","auto")
    $("#trinken").css("pointer-events","auto")
    $("#geschafft").animate({"opacity":"0.3"}, 200)
	$("#trinken").animate({"opacity":"0.3"}, 200)
	$("#los").css("pointer-events","auto")
    $("#los").fadeIn(200)
    $("#anleitungstxt").html("Viel Spaß beim Spielen!")
    $("#anleitungstxt").fadeIn(400)

	return punktearray, spielerid
}

function minuspunkt(){
	schluecke = parseInt(Math.random()*5+2)
	$("#aufgabe").html(spielerarray[spielerid]+", du bekommst einen Punkt abgezogen, weil du dich gedrückt hast! Außerdem trinkst du "+schluecke+" Schlücke!")
	aktstand = punktearray[spielerid]
	var endstand = aktstand-=1
	punktearray.splice(spielerid,1,endstand)
	$("#punkte").html(punktearray[spielerid])
	spielerid++;
	$("#geschafft").css("pointer-events","auto")
    $("#trinken").css("pointer-events","auto")
    $("#geschafft").animate({"opacity":"0.3"}, 200)
	$("#trinken").animate({"opacity":"0.3"}, 200)
	$("#los").css("pointer-events","auto")
    $("#los").fadeIn(200)
    $("#anleitungstxt").html("Viel Spaß beim Spielen!")
    $("#anleitungstxt").fadeIn(400)

	return punktearray, spielerid
}

function beenden(){
	$("#ende").click(function(){
		$(".row").animate({"margin-top":"-40%"}, 400)
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
		$("#erg").fadeIn(400)
		$("#home").click(function(){
			window.location.href="spiele.html"
		})
		$("#erg").click(function(){
			ausgaben()
		})
		$("#endezurueck").click(function(){
			$("#endezurueck").fadeOut(600)
			$("#home").fadeOut(600)
			$("#erg").fadeOut(600)
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

function ausgaben(){
	var kurzarray = [];
	for(var g=0;g<spielerarray.length;g++){
		kurzarray.push(spielerarray[g]+" : "+punktearray[g]+"<br>")
		$("#aufgabe").html(kurzarray)
	}
}



























