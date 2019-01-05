$(document).ready(function(){
	$("*").val("")
	start1()
	start2()
	$("#card2").hide()
	$("#card3").hide()
	$("#card4").hide()
	$("#namensfeld1").hide()
	$("#namensfeld2").hide()
	$("#namensfeld3").hide()
	$("#namensfeld4").hide()
	$("#namensfeld5").hide()
	$("#namensfeld6").hide()
	$("#1").hide()
	$("#2").hide()
	$("#3").hide()
	$("#4").hide()
	$("#5").hide()
	$("#6").hide()
	$("#start").hide()
	$("#weiter").hide()
	$("#ausgaben").hide()
	$("#wuerfel").hide()
	$("#spielflaeche").hide()
	$("#wuerfeldeck").hide()
 });

"use strict"

var checkid = 0;
var altezahl = 0;
var altespizahl = 0;
var aktspieler = 0;
var randzahl = 0;
var alterandzahl = 0;
var spieler = [];
var aktfeld = [];
var spielerid = 0;
var time;
var cheatschutz;
var aktspielerid = 0;
var runde = 0;
var f = 0;
var spizahl = 0;
var zahl;


function start1(){
	$("#eintritt").click(function(){
		$("#eintritt").fadeOut(800)	
		$("#uebertxt").animate({"font-size":"20px"}, "slow")
		$("#untertxt").animate({"font-size":"10px"}, "slow")
		$(".footer").fadeOut({"visibility":"hidden"}, "slow")
		setTimeout(eingaben, 1000)
	})
}

function eingaben(){
	$("#eintritt").hide()
	$("#uebertxt").css({"font-size":"20px"})
	$("#untertxt").css({"font-size":"10px"})

	$("#card2").fadeIn(1000)

	$("#check").click(function(){
		checkinput()
	})

	function checkinput(){
		var spizahl = $("#spielerzahl").val()

		if(spizahl >= 2 && spizahl <= 6){
			namensfelder()
			$("#spielerzahl").animate({"background-color":"#22264b"}, "slow")
		}
		else{
			$("#spielerzahl").animate({"background-color":"#DD2C00"}, "slow")
		}
	}
}

function namensfelder(){
	spizahl = parseInt($("#spielerzahl").val())
	setTimeout(function(){
		$("#start").fadeIn(1000)
	},1500)
	
	if(spizahl == altespizahl){
		return 
	}

	if(spizahl == 2){
		$("#namensfeld1").fadeIn(600)
		$("#namensfeld2").fadeIn(600)
		for(var i=3;i<=6;i++){
			$("#namensfeld"+i+"").fadeOut(600)
		}
		altespizahl = 2
	}
	if(spizahl == 3){
		$("#namensfeld1").fadeIn(600)
		$("#namensfeld2").fadeIn(600)
		$("#namensfeld3").fadeIn(600)
		for(var i=4;i<=6;i++){
			$("#namensfeld"+i+"").fadeOut(600)
		}
		altespizahl = 3
	}
	if(spizahl == 4){
		$("#namensfeld5").fadeOut(600)
		$("#namensfeld6").fadeOut(600)
		for(var i=0;i<=4;i++){
			$("#namensfeld"+i+"").fadeIn(600)
		}
		altespizahl = 4
	}
	if(spizahl == 5){
		$("#namensfeld6").fadeOut(600)
		for(var i=0;i<=5;i++){
			$("#namensfeld"+i+"").fadeIn(600)
		}
		altespizahl = 5
	}
	if(spizahl == 6){
		for(var i=0;i<=6;i++){
			$("#namensfeld"+i+"").fadeIn(600)
		}
		altespizahl = 6
	}
	
	return spizahl
	
}


function start2(){
	$("#start").click(function(){
		$("#card2").fadeOut(400)
		console.log(spizahl)
			for(var t=1;t<=spizahl;t++){
				spieler.push($("#namensfeld"+t+"").val())
				aktfeld.push("0")
			}
			setTimeout(spielumgebung(spieler,aktfeld),500)
			return spieler, aktfeld
	})
}


function spielumgebung(){
	$("#eintritt").hide()
	$(".footer").hide()
	$("#weiter").hide()
	$("#uebertxt").css({"font-size":"20px"})
	$("#untertxt").css({"font-size":"10px"})


	$("#card2").fadeOut(600)
	setTimeout(function(){
		$("#card3").fadeIn(600)
	},800)

	for(var n=1;n<6;n++){
		$("#"+n+"").hide()
	}


	$("#los").click(function(){
		$("#los").fadeOut(600)
		setTimeout(function(){
			$("#spielflaeche").fadeIn(600)
			$("#wuerfel").fadeIn(600)
			$("#aktspieler").html(spieler[spielerid])
			spielstart(aktfeld,spieler)
		},700)
	})
}


function spielstart(){
	$("#anzeigeaktpunkte").html("--")
	$("#punkteuebertxt").html(spieler[0]+"<br>"+"steht auf Feld:")
	$("#wuerfel").click(function(){
		wuerfeln()
		arrayeintragen()
		$("#hinweistext").hide()
		$("#weiter").fadeIn(200)
		$("#ausgaben").fadeIn(200)
		$("#weiter").css("opacity","1.0")
		cheatschutz = setTimeout(function(){
			$("#wuerfel").css("pointer-events","auto")
		},50000)
	})

	return aktspieler,cheatschutz
}

function wuerfeln(){
	randzahl = parseInt(Math.random()*6+1)
	$("#"+randzahl+"").fadeIn(100)
	alterandzahl = randzahl
	$("#wuerfel").css("pointer-events","none")
	return randzahl,alterandzahl
}

function arrayeintragen(){
	if(parseInt(spielerid) == parseInt(spieler.length)){
		spielerid = 0
	}
	if(parseInt(aktspielerid) == parseInt(spieler.length-1)){
		aktspielerid = -1
	}
	aktstand = aktfeld[spielerid]
	var endstand = parseInt(aktstand)+parseInt(randzahl)
	aktfeld.splice(spielerid,1,endstand)
	feldeintragen()
	aufgabensuch()
	aktspielerid++
	spielerid++;
	return aktfeld, spielerid, aktspielerid
}

function feldeintragen(){
	$("#anzeigeaktpunkte").html(aktfeld[spielerid])
}

function schutzaus(){	
	clearTimeout(cheatschutz)
	$("#wuerfel").css("pointer-events","auto")
	$("#weiter").css("opacity","0.5")
	$("#aktspieler").html(spieler[aktspielerid])
	$("#"+randzahl+"").fadeOut(100)
	setTimeout(function(){
		$("#anzeigeaktpunkte").html("--")
		$("#aktaufgabe").html("")
		$("#punkteuebertxt").html(spieler[aktspielerid]+"<br>"+"steht auf Feld:")
		$("#hinweistext").fadeIn(100)
	},101)
}

function ausgaben(){
	console.log("Aktueller spieler: "+aktspieler)
	console.log("Spieler ID: "+spielerid)
	console.log("Aktuelle Spieler ID: "+aktspielerid)
	console.log("Random würfelzahl: "+randzahl)
	console.log("Stand der spieler: "+aktfeld)
	console.log("------------------------------")
	var kurzarray = [];

	for(var g=0;g<spieler.length;g++){
		kurzarray.push(spieler[g]+" : "+aktfeld[g]+"<br>")
		$("#aktaufgabe").html(kurzarray)
	}
	
}



function aufgabensuch(){
	console.log("Aufgabenfunktion")
	zahl = aktfeld[spielerid]

	$("#aktaufgabe").html(feldaufgaben[zahl])

	if(zahl == 6){
		aktfeld.splice(spielerid,1,"10")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 11){
		aktfeld.splice(spielerid,1,"10")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 13){
		aktfeld.splice(spielerid,1,"0")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 11){
		aktfeld.splice(spielerid,1,"10")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 26){
		setTimeout(function(){
			ausgaben()
		},3000)
	}

	if(zahl == 28){
		setTimeout(function(){
			ausgaben()
		},3000)
	}

	if(zahl == 29){
		aktfeld.splice(spielerid,1,"25")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 33){
		setTimeout(function(){
			ausgaben()
		},3000)
	}

	if(zahl == 34){
		aktfeld.splice(spielerid,1,"37")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 41){
		aktfeld.splice(spielerid,1,"52")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 42){
		aktfeld.splice(spielerid,1,"44")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 49){
		aktfeld.splice(spielerid,1,"44")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 64){
		aktfeld.splice(spielerid,1,"43")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 69){
		aktfeld.splice(spielerid,1,"30")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 76){
		aktfeld.splice(spielerid,1,"73")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}

	if(zahl == 79){
		aktfeld.splice(spielerid,1,"0")
		setTimeout(function(){
			$("#anzeigeaktpunkte").html(aktfeld[spielerid-1])
		},1000)
		return aktfeld
	}	

	if(zahl >= 80){
		ergebnis()
	}
}

function ergebnis(){

	$("#card3").fadeOut(500)
	setTimeout(function(){
		$("#card4").fadeIn(300)
	},501)

	var ergebnis;
	var ergebnisarray = [];

	for(var j=0;j<spieler.length;j++){
		ergebnisarray.push("<li>"+aktfeld[j]+" Felder hat "+spieler[j]+" geschafft<br></li>")
	}

	ergebnisarray.sort()
	ergebnisarray.reverse()
	$("#ergebnissortiert").html(ergebnisarray)

	$("#home").click(function(){
		window.location.href="index.html"
	})

	$("#nochmal").click(function(){
		window.location.href="m-80ertrinkspiel.html"
	})
}