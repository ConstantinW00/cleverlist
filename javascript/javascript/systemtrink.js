$(document).ready(function(){
	erststart()
	tverteil()
	buttons()
	$("#kartenzahl").hide()
	$("#eingabenamen").hide()
	$("#spieler").hide()
	$("#eingabe").hide()
	$("#karten").hide()
	$("#name").hide()
	$("#handy").hide()
	$("#becherbox").hide()
	$("#disweiter").hide()
	$("#kartenwahl").hide()
	$("#getraenk").hide()
	$("#kartenstapelzwei").hide()
	$("#umhilfen").hide()
});


var t = 0;
var izahl = 0;
var p1 = 0;
var p2 = 0;
var spielerarray = [];
var benutzt = [];
var k = 0;
var c = 0;
var pixel = 63;
var oben = 71;
var links = 71;
var rest = 36;
var rest2 = 51;
var place = 0;



function erststart(){
		$("#zunamen").click(function(){
			$("#willk").hide("slide", {direction:"up"},500)
			setTimeout(eingabezeig(),500)
		})
}

function eingabezeig(){
	place++;
	$("#eingabe").show("slide", {direction:"down"},500)
	$("#spieler").show("slide", {direction:"down"},500)
}

function tverteil(){

	$("#spiz2").click(function(){
		t=0
		t+=2;
		ttest()
	})

	$("#spiz3").click(function(){
		t=0
		t+=3;
		ttest()
	})

	$("#spiz4").click(function(){
		t=0
		t+=4;
		ttest()
	})

	$("#spiz5").click(function(){
		t=0
		t+=5;
		ttest()
	})

	$("#spiz6").click(function(){
		t=0
		t+=6;
		ttest()
	})

	$("#spiz7").click(function(){
		t=0
		t+=7;
		ttest()
	})

	$("#spiz8").click(function(){
		t=0
		t+=8;
		ttest()
	})

	$("#spiz9").click(function(){
		t=0
		t+=9;
		ttest()
	})

	$("#spiz10").click(function(){
		t=0
		t+=10;
		ttest()
	})
}

function ttest(){
	var izahl = t;

	setTimeout(function(){$("#spieler").hide("slide", {direction:"up"},500)}, 200)

		setTimeout(inputsstellen(izahl), 500)
}

function inputsstellen(izahl){
	place++;
	setTimeout(function(){$("#eingabenamen").show("slide", {direction:"up"},500)},200)

		var i = 1;
		inputschreiben(izahl,i)

	function inputschreiben(izahl,i){
		if(izahl > 0){
			var input = "";
			var button = "";
			input += "<br>"
			input += "<input width='300px' height='60px' placeholder='Spieler"+ i+"' id='in"+i+"'>"
			button += "<br>"
			button += "<button id='weiterbutton'>Nächster</button>"
			$("#anzeigebox").html(input+button)
			$("#spinummer").html(izahl)
			$("#weiterbutton").click(function(){
				var ivalue = $("#in"+i+"").val()
				spielerarray.push(ivalue)
				i++;
				izahl-=1;
				return inputschreiben(izahl,i,spielerarray)
			})
		}
		else{
			weiter(spielerarray)
		}
	}
}

function weiter(spielerarray){
	$("#eingabenamen").hide("slide", {direction:"up"},500)
	place++;
	setTimeout(function(){$("#kartenzahl").show("slide", {direction:"up"},500)}, 500)

	$("#kaz1").click(function(){
		p2 = 0;
		p1++;
		test()
	})

	$("#kaz2").click(function(){
		p1 = 0;
		p2++;
		test()
	})
	
	function test(){
		if(p1 > 0){
			$("#kartenzahl").hide("slide", {direction:"up"},500)			
			handy()
		}
		else{
			$("#kartenzahl").hide("slide", {direction:"up"},500)
			handy2()
		}
	}
}



function handy(){

	zeigtisch()

	function zeigtisch(){
		place++
		setTimeout(function(){
							$("#karten").show()
							$("#name").show()
							$("#handy").show()
							$("#becherbox").show()
				}, 500)
	}
	
	$("#disanl").hide()
	$("#dislos").click(function(){
		schritteins()
		$("#dislos").hide()
	})

	function schritteins(){
		place++;
		$("#distxt").hide("slide", {direction:"left"},300)
			setTimeout(function(){
				
				$("#disanl").html("<br>Anleitung :"+"<br>"+"Klick auf den Kartenstapel um zu beginnen.")
				$("#disanl").show("slide", {direction:"left"},500)
				
			},700)
	
		$("#karten").click(function(){
				k++;
		})

		$("#karten").click(function(){
			if(k <= 0){
				$("#disanl").css("color","#ff4444")
				setTimeout(function(){$("#disanl").css("color","#00E5E5")},500)
			}
			else{
				schrittzwei()
			}
		})	
	}

	function schrittzwei(){	

			$("#disanl").show("slide", {direction:"left"},500)
			setTimeout(function(){
				$("#disweiter").hide()
				$("#disanl").html("Nocheinmal auf den Kartenstapel klicken.")
				$("#disweiter").html("Nochmal")
				$("#karten").hide()
				$("#deck").show()
				$("#kartenstapelzwei").show()
				kartenwahl()
			},700)
	}

	function kartenwahl(){
		$("#kartenstapelzwei").click(function(){
			if(benutzt.length == 36){
				ende()
			}
			else{
				randomz()
			}
		})
	}

		function randomz(){
			var zahl = parseInt(Math.random()*rest)
				checkzahl(zahl)
		}

		function checkzahl(zahl){
			for(var i in benutzt){
				if(zahl == benutzt[i]){
					return randomz()
				}
			}
			kleinerkartenstapel(zahl)
		}
		
			function kleinerkartenstapel(zahl){	
				var aufgabearr = aufgarrayklein[zahl]	
				var anzeigr = kartenarrayklein[zahl]
				
				namensteuerung()
				benutzt.push(zahl)

				$("#disanl").html("Aufgabe :<br>" )

					nachfuell()
					kartezeig(zahl)

				function nachfuell(){
					if(anzeigr == "pictures/koenighe.jpg" || anzeigr == "pictures/koenigpi.jpg" || anzeigr == "pictures/koenigka.jpg" || anzeigr == "pictures/koenigkr.jpg"){
						pixel += 7;
						links -= 3;
						oben -= 8;
						$("#getraenk").css("width",""+pixel+"px")
						$("#getraenk").css("height",""+pixel+"px")
						$("#getraenk").css("margin-top",""+oben+"px")
						$("#getraenk").css("margin-left",""+links+"px")
						$("#getraenk").show()	
					}
				}
			
		function kartezeig(zahl){
			place++;
			$("#kartenstapelzwei").html("<img src="+anzeigr+" width='140px' height='240px'>")
			$("#disanl").html(aufgabearr)
		}
	}
}

	function namensteuerung(){
		$("#aktspieler").html(spielerarray[c])
		if(c == spielerarray.length-1){
			c=0
		}
		else{
			c++
		}	
	}

function handy2(){
	zeigtisch()

	function zeigtisch(){
		place++
		setTimeout(function(){
							$("#karten").show()
							$("#name").show()
							$("#handy").show()
							$("#becherbox").show()
				}, 500)
	}
	
	$("#disanl").hide()
	$("#dislos").click(function(){
		schritteins()
		$("#dislos").hide()
	})

	function schritteins(){
		place++;
		$("#distxt").hide("slide", {direction:"left"},300)
			setTimeout(function(){
				
				$("#disanl").html("<br>Anleitung :"+"<br>"+"Klick auf den Kartenstapel um zu beginnen.")
				$("#disanl").show("slide", {direction:"left"},500)
				
			},700)
	
		$("#karten").click(function(){
				k++;
		})

		$("#karten").click(function(){
			if(k <= 0){
				$("#disanl").css("color","#ff4444")
				setTimeout(function(){$("#disanl").css("color","#00E5E5")},500)
			}
			else{
				schrittzwei()
			}
		})	
	}

	function schrittzwei(){	

			$("#disanl").show("slide", {direction:"left"},500)
			setTimeout(function(){
				$("#disweiter").hide()
				$("#disanl").html("Nocheinmal auf den Kartenstapel klicken.")
				$("#disweiter").html("Nochmal")
				$("#karten").hide()
				$("#deck").show()
				$("#kartenstapelzwei").show()
				kartenwahl()
			},700)
	}

	function kartenwahl(){
		$("#kartenstapelzwei").click(function(){
			if(benutzt.length == 51){
				ende()
			}
			else{
				randomz()
			}
		})
	}

		function randomz(){
			var zahl = parseInt(Math.random()*rest2)
				checkzahl(zahl)
		}

		function checkzahl(zahl){
			for(var i in benutzt){
				if(zahl == benutzt[i]){
					return randomz()
				}
			}
			kleinerkartenstapel(zahl)
		}
		
			function kleinerkartenstapel(zahl){		
				var anzeigr = kartenarraygross[zahl]
				var aufgabearr = aufgarraygross[zahl] 
				
				namensteuerung()
				benutzt.push(zahl)
			
				$("#disanl").html("Aufgabe :<br>" )

					nachfuell()
					kartezeig(zahl)

				function nachfuell(){
					if(anzeigr == "pictures/koenighe.jpg" || anzeigr == "pictures/koenigpi.jpg" || anzeigr == "pictures/koenigka.jpg" || anzeigr == "pictures/koenigkr.jpg"){
						pixel += 7;
						links -= 3;
						oben -= 8;
						$("#getraenk").css("width",""+pixel+"px")
						$("#getraenk").css("height",""+pixel+"px")
						$("#getraenk").css("margin-top",""+oben+"px")
						$("#getraenk").css("margin-left",""+links+"px")
						$("#getraenk").show()	
					}
				}
			
		function kartezeig(zahl){
			place++;
			$("#kartenstapelzwei").html("<img src="+anzeigr+" width='140px' height='240px'>")
			$("#disanl").html(aufgabearr)
		}
	}
}

function ende(){
	$("#hilfen").html("Du bist am Ende des Spiels, danke für's Spielen!<br><button id='hilfeschliess'>Verstanden</button>")
	$("#umhilfen").show("slide", {direction:"up"},500)
	$("#hilfeschliess").click(function(){
		window.location.href = "http://spiele-aus-spass.esy.es/trinkspiel.html"
	})
}

function buttons(){
	$("#homehaus").click(function(){
		window.location.href = "http://spiele-aus-spass.esy.es"
	})

	$("#hilfe").click(function(){
			checkwindowplace()

			function checkwindowplace(){
				if(place <= 6){
					$("#hilfen").html(windowplace[place]+"<br><button id='hilfeschliess'>Verstanden</button>")
					$("#umhilfen").show("slide", {direction:"up"},500)
					$("#hilfeschliess").click(function(){
						$("#umhilfen").hide("slide", {direction:"up"},500)
					})
				}
				else{
					$("#hilfen").html(windowplace[7]+"<br><button id='hilfeschliess'>Verstanden</button>")
					$("#umhilfen").show("slide", {direction:"up"},500)
					$("#hilfeschliess").click(function(){
						$("#umhilfen").hide("slide", {direction:"up"},500)
					})
				}
			}

		
	})
}
