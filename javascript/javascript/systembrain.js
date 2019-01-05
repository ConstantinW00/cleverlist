$(document).ready(function(){
		starterst()
		$("#schwi").hide()
		$("#fragen").hide()
		$("#los").hide()
		$("#diefragen").hide()
		$("#cdtxt").hide()
		$("#aufgaben").hide()
		$("#loesungtxt").hide()
		$("#erklaerbox").hide()
		$("#start1").hide()
		$("#nochmalsp").hide()
		$("*").val("")
		start()
		erkleart()
		home()
		nochmal()
});


var leichteaufgaben = [
					"",
					"+",
					"-",
					]

var mittlereaufgaben =[
					"",
					"+",
					"-",
					]

var schwereaufgaben = [
					"",
					"+",
					"-",
					]

var schwi1 = 0;
var schwi2 = 0;
var schwi3 = 0;
var cd = 2
var ergspi = []
var ergrechner = []
var n = 0
var i = 0
var richtig = 0
var falsch = 0
var t = 0
var z1n = 0
var z2n = 0



"use strict"

function erkleart(){
	$("#erklaerung").click(function(){
		$("#start").hide("slide", {direction:"up"},400)
		setTimeout(erkl,500)

			function erkl(){
				$("#erklaerbox").show()
				$("#losbox").hide()
				$("#erklaertxt").hide()
				$("#erklaertxt").show("slide", {direction:"down"},400)
				$("#start1").show("slide", {direction:"down"},400)
			}
	})
}



function starterst(){
	$("#start1").click(function(){
		$("#erklaertxt").hide("slide", {direction:"down"},400)
		$("#erklaerung").hide("slide", {direction:"down"},400)
		$("#erklaerbox").hide("slide", {direction:"down"},400)
		setTimeout(weiter, 400)
	})

	$("#start").click(function(){
		$("#start").hide("slide", {direction:"up"},400)
		$("#erklaerung").hide("slide", {direction:"down"},400)
		$("#zurueck").css("margin-left","375px")
			setTimeout(weiter, 400)
	})
				function weiter(){
					$("#schwi").show("slide", {direction:"down"},500)
					$("#losbox").show()

						$("#leicht").click(function(){
							$("#los").show("slide", {direction:"down"},500)
							$("#leicht").css("background-color","lightgray")
							$("#mittel").css("background-color","#101423")
							$("#schwer").css("background-color","#101423")
						})
						$("#mittel").click(function(){
							$("#los").show("slide", {direction:"down"},500)
							$("#mittel").css("background-color","lightgray")
							$("#leicht").css("background-color","#101423")
							$("#schwer").css("background-color","#101423")
						})
						$("#schwer").click(function(){
							$("#los").show("slide", {direction:"down"},500)
							$("#schwer").css("background-color","lightgray")
							$("#leicht").css("background-color","#101423")
							$("#mittel").css("background-color","#101423")
						})
				}
}

function start(){

	schwiteil()

		function schwiteil(){
			
			$("#leicht").click(function(){
				schwi1 += 1
				schwi2 = 0
				schwi3 = 0
			})

			$("#mittel").click(function(){
				schwi2 += 1
				schwi1 = 0
				schwi3 = 0
			})

			$("#schwer").click(function(){
				schwi3 += 1
				schwi1 = 0
				schwi2 = 0
			})
		}

	$("#los").click(function(){
		$("#erklaerung").hide("slide", {direction:"down"},500)
		$("#start1").hide("slide", {direction:"down"},500)
		setTimeout(mitte,501)
			
			function mitte(){
				$("#zurueck").css("margin-left","375px")
			}
			
		schwicheck()
	})

	function schwicheck(){
		if(schwi1 == 1 && schwi2 == 0 && schwi3 == 0){
			einfach()
		}
		
		if(schwi2 == 1 && schwi1 == 0 && schwi3 == 0){
			mittel()
		}

		if(schwi3 == 1 && schwi1 == 0 && schwi2 == 0){
			schwer()
		}
	}
}
 

function einfach(){

	$("#schwi").hide("slide", {direction:"up"},500)
	$("#los").hide("slide", {direction:"up"},500)
		setTimeout(zeig(cd),501)

	function zeig(){
		$("#losbox").hide()
		$("#cdtxt").show("slide", {direction:"up"},500)

		setTimeout(countdown,500)

			function countdown(){
				if(cd != 0){	
					$("#cdtxt").html(cd)
					cd--;
					setTimeout(countdown,1000)
				}
				else{
					$("#cdtxt").hide()
					aufgabel()
				}
				
			}
		function aufgabel(){

			var time = new Date()

			waehlen()

			function waehlen(){
				var z1 = parseInt(Math.random()*20+1)
				var z2 = parseInt(Math.random()*20+1)
				var zei = parseInt(Math.random()*2+1)

				if(n < 10){
					var stellen = ""
					
						stellen += "<br>"
						stellen += z1+" "
						stellen += leichteaufgaben[zei]+" "
						stellen += z2+" "+"=" 
						stellen += "<input id='loesung' placeholder='Ergebnis'>"
						stellen += "<button id='fertig'>Weiter</button>"

							n++

					$("#aufgaben").show()
					$("#aufgaben").html(stellen)
					
						
						rechner(z1,z2,zei)

						function rechner(z1,z2,zei){
							if(zei == 1){
								var ergrp = z1 += z2

								ergrechner.push(ergrp)
							}
							else{
								var ergrm = z1 -= z2

								ergrechner.push(ergrm)		
							}
							$("#fertig").click(function(){
								var spielerval = $("#loesung").val()
								ergspi.push(spielerval)
								return waehlen()
							})
						}

					
				}
				else{
					zeit = (new Date() - time)/1000
					auswertung()
				}
			}

			function auswertung(){

				$("#aufgaben").hide()
				$("#loesungtxt").show()
				$("#loesungtxt").html("<br><br>Lösungen werden geladen")
				setTimeout(punkt1,1500)
					
					function punkt1(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen.")
						setTimeout(punkt2,1500)
					}

					function punkt2(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen. .")
						setTimeout(punkt3,1500)
					}

					function punkt3(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen. . .")
						setTimeout(ausgabe,1500)
					}
				
				function ausgabe(){
					for(var t=0;t<ergrechner.length;t++){
						if(ergrechner[t] == ergspi[i]){
							richtig++
							i++
						}
						else{
							falsch++
							i++
						}
					}

					darstellen()

					function darstellen(){
						$("#loesungtxt").html("")
						if(richtig == 10){
							$("#loesungtxt").html("<br>Du hast "+richtig+"/"+richtig+" richtig. Herzlichen Glückwunsch du bist sehr schlau!<br>Insgesamt hast du "+zeit+" Sekunden gebraucht")
							$("#zurueck").css("margin-left","290px")
							$("#nochmalsp").show("slide", {direction:"down"},500)
						}
						else{
							$("#loesungtxt").html("<br>Du hast "+richtig+" richtig<br>und "+falsch+" falsch.<br>Insgesamt hast du "+zeit+" Sekunden gebraucht")
							$("#zurueck").css("margin-left","290px")
							$("#nochmalsp").show("slide", {direction:"down"},500)
						}
					}
				}
			}
		}
	}
}

function mittel(){

	$("#schwi").hide("slide", {direction:"up"},500)
	$("#los").hide("slide", {direction:"up"},500)
		setTimeout(zeig(cd),501)

	function zeig(){
		$("#losbox").hide()
		$("#cdtxt").show("slide", {direction:"up"},500)

		setTimeout(countdown,500)

			function countdown(){
				if(cd != 0){	
					$("#cdtxt").html(cd)
					cd--;
					setTimeout(countdown,1000)
				}
				else{
					$("#cdtxt").hide()
					aufgabem()
				}
				
			}
		function aufgabem(){
			var time = new Date()

			waehlen()

			function waehlen(){
				var z1 = parseInt(Math.random()*100+1)
				var z2 = parseInt(Math.random()*100+1)
				var zei = parseInt(Math.random()*2+1)

				if(n < 10){
					var stellen = ""
					
						stellen += "<br>"
						stellen += z1+" "
						stellen += mittlereaufgaben[zei]+" "
						stellen += z2+" "+"=" 
						stellen += "<input id='loesung' placeholder='Ergebnis'>"
						stellen += "<button id='fertig'>Weiter</button>"

							n++

					$("#aufgaben").show()
					$("#aufgaben").html(stellen)

							rechner(z1,z2,zei)
					
						function rechner(){
							if(zei == 1){
								var ergrp = z1 += z2

								ergrechner.push(ergrp)
							}
							else if(zei == 2){
									var ergrm = z1 -= z2

									ergrechner.push(ergrm)
								}
								

							$("#fertig").click(function(){
								var spielerval = $("#loesung").val()
								ergspi.push(spielerval)
								return waehlen()
							})
						}					
				}
				else{
					zeit = (new Date() - time)/1000
					auswertung()
				}
			}

			function auswertung(){

				$("#aufgaben").hide()
				$("#loesungtxt").show()
				$("#loesungtxt").html("<br><br>Lösungen werden geladen")
				setTimeout(punkt1,1500)
					
					function punkt1(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen.")
						setTimeout(punkt2,1500)
					}

					function punkt2(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen. .")
						setTimeout(punkt3,1500)
					}

					function punkt3(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen. . .")
						setTimeout(ausgabe,1500)
					}
				
				function ausgabe(){
					for(var t=0;t<ergrechner.length;t++){
						if(ergrechner[t] == ergspi[i]){
							richtig++
							i++
						}
						else{
							falsch++
							i++
						}
					}

					darstellen()

					function darstellen(){
						$("#loesungtxt").html("")
						if(richtig == 10){
							$("#loesungtxt").html("<br>Du hast "+richtig+"/"+richtig+" richtig. Herzlichen Glückwunsch du bist sehr schlau!<br>Insgesamt hast du "+zeit+" Sekunden gebraucht")
							$("#zurueck").css("margin-left","290px")
							$("#nochmalsp").show("slide", {direction:"down"},500)
						}
						else{
							$("#loesungtxt").html("<br>Du hast "+richtig+" richtig<br>und "+falsch+" falsch.<br>Insgesamt hast du "+zeit+" Sekunden gebraucht")
							$("#zurueck").css("margin-left","290px")
							$("#nochmalsp").show("slide", {direction:"down"},500)
						}
					}
				}
			}
		}
	}
}

function schwer(){

	$("#schwi").hide("slide", {direction:"up"},500)
	$("#los").hide("bounce", {direction:"up"},500)
		setTimeout(zeig(cd),501)

	function zeig(){
		$("#losbox").hide()
		$("#cdtxt").show("slide", {direction:"up"},500)

		setTimeout(countdown,500)

			function countdown(){
				if(cd != 0){	
					$("#cdtxt").html(cd)
					cd--;
					setTimeout(countdown,1000)
				}
				else{
					$("#cdtxt").hide()
					aufgabes()
				}
				
			}
		function aufgabes(){
			var time = new Date()

			waehlen()

			function waehlen(){
				var z1 = parseInt(Math.random()*1000+1)
				var z2 = parseInt(Math.random()*1000+1)
				var zei = parseInt(Math.random()*2+1)

				if(n < 10){
					var stellen = ""
					
						stellen += "<br>"
						stellen += z1+" "
						stellen += schwereaufgaben[zei]+" "
						stellen += z2+" "+"=" 
						stellen += "<input id='loesung' placeholder='Ergebnis'>"
						stellen += "<button id='fertig'>Weiter</button>"

							n++

					$("#aufgaben").show()
					$("#aufgaben").html(stellen)
					
						
						rechner(z1,z2,zei)

						function rechner(z1,z2,zei){
							if(zei == 1){
								var ergrp = z1 += z2

								ergrechner.push(ergrp)
							}
							else if(zei == 2){
									var ergrm = z1 -= z2

									ergrechner.push(ergrm)
								}
								
							$("#fertig").click(function(){
								var spielerval = $("#loesung").val()
								ergspi.push(spielerval)
								return waehlen()
							})
						}					
				}
				else{
					zeit = (new Date() - time)/1000
					auswertung()
				}
			}

			function auswertung(){

				$("#aufgaben").hide()
				$("#loesungtxt").show()
				$("#loesungtxt").html("<br><br>Lösungen werden geladen")
				setTimeout(punkt1,1500)
					
					function punkt1(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen.")
						setTimeout(punkt2,1500)
					}

					function punkt2(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen. .")
						setTimeout(punkt3,1500)
					}

					function punkt3(){
						$("#loesungtxt").html("")
						$("#loesungtxt").html("<br><br>Lösungen werden geladen. . .")
						setTimeout(ausgabe,1500)
					}
				
				function ausgabe(){
					for(var t=0;t<ergrechner.length;t++){
						if(ergrechner[t] == ergspi[i]){
							richtig++
							i++
						}
						else{
							falsch++
							i++
						}
					}

					darstellen()

					function darstellen(){
						$("#loesungtxt").html("")

						if(richtig == 10){
							$("#loesungtxt").html("<br>Du hast "+richtig+"/"+richtig+" richtig. Herzlichen Glückwunsch du bist sehr schlau!<br>Insgesamt hast du "+zeit+" Sekunden gebraucht<br>Danke für´s spielen!")
							$("#zurueck").css("margin-left","290px")
							$("#nochmalsp").show("slide", {direction:"down"},500)
						}
						else{
							$("#loesungtxt").html("<br>Du hast "+richtig+" richtig<br>und "+falsch+" falsch.<br>Insgesamt hast du "+zeit+" Sekunden gebraucht<br>Danke für´s spielen!")
							$("#zurueck").css("margin-left","290px")
							$("#nochmalsp").show("slide", {direction:"down"},500)
						}
					}
				}
			}
		}
	}
}


function home(){
	$("#zurueck").click(function(){
		window.location.href = "http://spiele-aus-spass.esy.es"
	})
}

function nochmal(){
	$("#nochmalsp").click(function(){
		window.location.href = "http://spiele-aus-spass.esy.es/brainstorm.html"
	})
}