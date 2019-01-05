$(document).ready(function(){
	$("*").val("")
	$("#wikom").hide()
	$("#match").hide()
	$("#spiwadeck").hide()
	$("#namese").hide()
	$("#namese2").hide()
	$("#fertig").hide()
	$("#neustart").hide()
	$("#nochzuspielen").hide()
	$("#standcom").hide()
	$("#standspi").hide()
	$("#scstpa").hide()
	$("#computer").hide()
	$("#spinameh").hide()
	$("#weiter").hide()
	$("#fensterna").hide()
	$("#fensterru").hide()
	$("#erg").hide()
	$("#erg1").hide()
	$("#erg2").hide()
	$("#zlralert").hide()
	$("#checkdiv").hide()
	$("#stpbutt").hide()
	$("#buttondrueber").hide()
	
		zoom()
		multiplayer()

		
	var c = document.getElementById("spielfeld1");	
	var ctx = c.getContext("2d");
			ctx.font="150px verdana";
			ctx.fillText("?", 100, 130);
			ctx.fillStyle = "#ffffff";
			
	var c = document.getElementById("spielfeld2");	
	var ctx = c.getContext("2d");
			ctx.font="150px verdana";
			ctx.fillText("?", 100, 130);
			ctx.fillStyle = "#ffffff";

	var c = document.getElementById("zaewilo");	
	var ctx = c.getContext("2d");
			ctx.font="100px verdana";
			ctx.fillText("vs", 90, 100);
			ctx.fillStyle = "#ffffff";
		

})
		//Alles für das Spiel
//Variablen

var bilder = [];
var comppic = 0;
var playerpic = 0;
var h = 0;
var punkt = 1;
var punkt1 = 1;
var zlr = 0;

function zoom(){
		document.body.style.zoom = "90%"
}


function auswaehlensc(){
	playerpic = 0;
	var schere = new Image();
	schere.src = "pictures/schere.png";
	var c = document.getElementById("spielfeld1");
	var ctx = c.getContext("2d");
		ctx.drawImage(schere, 0, 0, 300, 150)
		zlr++;
		setTimeout(comstart, 200)
		decken()
}

function auswaehlenst(){
	playerpic = 1;
	var stein = new Image();
	stein.src = "pictures/stein.png";
	var c = document.getElementById("spielfeld1");
	var ctx = c.getContext("2d");
		ctx.drawImage(stein, 0, 0, 300, 150)
		zlr++;	
		setTimeout(comstart, 200)	
		decken()
}

function auswaehlenpa(){
	playerpic = 2;
	var papier = new Image();
	papier.src = "pictures/papier.png";
	var c = document.getElementById("spielfeld1");
	var ctx = c.getContext("2d");
		ctx.drawImage(papier, 0, 0, 300, 150)
		zlr++;
		setTimeout(comstart, 200)
		decken()
}

function decken(){
	$("#spiwa").hide()
	$("#spiwadeck").show()
	setTimeout(zeigen, 3500)

		function zeigen(){
			$("#spiwa").show()
			$("#spiwadeck").hide()
		}
}

function spielstart(){
	
	pruefname()
	
		function pruefname(){
			if($("#benutzer").val() == ""){
				$("#fensterna").hide()
				$("#fensterna").slideToggle()
				$("#fensterru").hide()
			}
			else{
				$("#fensterna").hide()
				pruefenrunden()
			}
		}
		
		function pruefenrunden(){
			if($("#runden").val() == ""){
				$("#fensterru").hide()
				$("#fensterru").slideToggle()
				$("#fensterna").hide()
			}
			else{
				checkzahl()
			}
		}
		
		function checkzahl(){
			var negzahl = $("#runden").val()
			
			if(negzahl < 0){
				negzahl *= -1
				$("#rundenanzahl").text(negzahl)
				anmelden()
			}
			else if(negzahl == 0){
				$("#fensterru").hide()
				$("#fensterru").slideToggle()
				$("#fensterna").hide()
			}
			else{
				$("#rundenanzahl").text($("#runden").val())
				anmelden()
			}
		}
		
		function anmelden(){
			$("#namese").hide("slow")
			$("#match").show("slow")
			$("#spinamep").text($("#benutzer").val() + ":")
			$("#spinameh").text($("#benutzer").val())
			$("#spinamehd").text($("#benutzer").val())
			$("#fertig").show()
			$("#nochzuspielen").show()
			$("#scstpaerst").hide()
			$("#standcom").show()
			$("#standspi").show()
			$("#scstpa").show()
			$("#computer").show()
			$("#spinameh").show()
			$("#bruch1").hide()
			$("#bruch2").hide()
			$("#bruch2").hide()
			$("#bruch3").hide()
			$("#bruch4").hide()
			$("#bruch4d").hide()
			$("#bruch5").hide()
			$("#bruch5d").hide()
			$("#bruch6").hide()
			$("#bruch6d").hide()
			$("#spiwa").show()
		}
}

function namesezeigen(){
	$("#wikom").slideToggle("slow")
	$("#buttonstart").hide()
	$("#buttonmulti").hide()
	$("#buttondrueber").show()
	$("#br1").hide()
	$("#br2").hide()
	$("#br3").hide()
	$("#home").hide()
	setTimeout(namesezeigen1, 700)
}

function namesezeigen1(){
	$("#spstbutton").hide()
	$("#namese").slideToggle("slow")	
}


function comstarttest(){
	if(zlr == 0){
		$("#zlralert").show()
		$("#zlrtext").text("Hoppla,   Du hast wohl vergessen etwas Auszuwählen.")
	}
	else{
		$("#zlralert").hide()
		comstart()
	}
}


function comstart(){
	bilder.push(new Image());
	bilder[0].src = "pictures/schere.png";
	bilder.push(new Image());
	bilder[1].src = "pictures/stein.png";
	bilder.push(new Image());
	bilder[2].src = "pictures/papier.png";
	
	rundenminus()
	loeschen1()
	
		function loeschen1(){
			var c = document.getElementById("zaewilo");			
			var ctx = c.getContext("2d");
				ctx.clearRect(0, 0, 550, 250)
			zeichnen3()
		};
		
		function zeichnen3(){
			var c = document.getElementById("zaewilo");			//Anzeige zum runterzählen und Win/Loose Anzeige
			var ctx = c.getContext("2d");
				ctx.font = "100px Verdana";
				ctx.fillText("3", 110, 100)
			setTimeout(loeschen2, 1000)
		};
		
		function loeschen2(){
			var c = document.getElementById("zaewilo");			//Anzeige zum runterzählen und Win/Loose Anzeige
			var ctx = c.getContext("2d");
				ctx.clearRect(0, 0, 550, 250)
				zeichnen2()
		};
		
		function zeichnen2(){
			var c = document.getElementById("zaewilo");			//Anzeige zum runterzählen und Win/Loose Anzeige
			var ctx = c.getContext("2d");
				ctx.font = "100px Verdana";
				ctx.fillText("2", 110, 100)
			setTimeout(loeschen3, 1000)
		};
		
		function loeschen3(){
			var c = document.getElementById("zaewilo");			//Anzeige zum runterzählen und Win/Loose Anzeige
			var ctx = c.getContext("2d");
				ctx.clearRect(0, 0, 550, 250)
				zeichnen1()
		};
		
		function zeichnen1(){
			var c = document.getElementById("zaewilo");			//Anzeige zum runterzählen und Win/Loose Anzeige
			var ctx = c.getContext("2d");
				//ctx.clearRect(0, 0, 150, 50)
				ctx.font = "100px Verdana";
				ctx.fillText("1", 110, 100)
				//ctx.clearRect(0, 0, 150, 50)
			setTimeout(zeichnenjetzt, 1000)
			
			h++;
		};
		
		function zeichnenjetzt(){
			comppic = parseInt(Math.random()*3);
			zeichnen()
		}
}


function zeichnen(){
	var c = document.getElementById("spielfeld2");
	var ctx = c.getContext("2d");
		ctx.drawImage(bilder[comppic], 0, 0, 300, 150)

		checkwinner()
}


function checkwinner(){
	if(comppic == 0){
		checkSchere()
	}
	else if(comppic == 1){
		checkStein()
	}
	else{
		checkPapier()
	}
}


function checkSchere(){
	if(playerpic == 0){
			draw()
	}
	if(playerpic == 1){
			win()
			punkteverspi()
	}
	if(playerpic == 2){
			loose()
			punktevercom()
	}
}

function checkStein(){
	if(playerpic == 1){
			draw()
	}
	if(playerpic == 2){
			win()
			punkteverspi()
	}
	if(playerpic == 0){
			loose()
			punktevercom()
	}
}

function checkPapier(){
	if(playerpic == 2){
			draw()
	}
	if(playerpic == 0){
			win()
			punkteverspi()
	}
	if(playerpic == 1){
			loose()
			punktevercom()
	}
}


function draw(){
	var c = document.getElementById("zaewilo");
	var ctx = c.getContext("2d");
		ctx.clearRect(0, 0, 550, 250)
		ctx.font="80px verdana";
		ctx.fillText("DRAW" , 30 ,100);
		ctx.fillStyle="#ffffff";
}

function win(){
	var c = document.getElementById("zaewilo");
	var ctx = c.getContext("2d");
		ctx.clearRect(0, 0, 550, 250)
		ctx.font="80px verdana";
		ctx.fillText("WIN" , 60 , 100);
		ctx.fillStyle="#ffffff";
}

function loose(){
	var c = document.getElementById("zaewilo");
	var ctx = c.getContext("2d");
		ctx.clearRect(0, 0, 550, 250)
		ctx.font="80px verdana";
		ctx.fillText("LOOSE" , 10 , 100);
		ctx.fillStyle="#ffffff";
}


function punktevercom(){
	$("#pucom").text("Punkte: " + punkt)
		punkt++;
}

function punkteverspi(){
	$("#puspi").text("Punkte: " + punkt1)
		punkt1++;
}


function weiterbutton(){
	$("#fertig").hide()
	$("#match").hide("slow")
	$("#neustart").show("slow")
}


function rundenminus(){
	var m = Math.ceil($("#rundenanzahl").text()) 
	m--;
	$("#rundenanzahl").text(m)
	
		punktetest()

	function punktetest(){
		if(m == 0){
			stop()
		}
	else{
		$("#fertig").hide()
		$("#stpbutt").show()
		setTimeout(wiedercomstart, 3000)
	}
	}
}



function ergebniss(){
	var compu = (punkt -=1);
	var spipu = (punkt1 -=1);
	
	if(spipu == compu){
		$("#erg2").slideToggle()
		$("#ergebniss3").text("Du hast " + spipu + " zu " + compu + " gespielt.")
	}
	else if(spipu > compu){					
			$("#erg").slideToggle()
			$("#ergebniss1").text("Du hast " + spipu + " zu " + compu + " gewonnen!")
	}
	else{								
		$("#erg1").slideToggle()
		$("#ergebniss2").text("Du hast " + compu + " zu " + spipu + " verloren.")
	}	
}

function stop(){
	$("#weiter").hide()
	setTimeout(stop1, 3000)
}

function stop1(){
	setTimeout(endezeigen, 500)
}

function endezeigen(){
	$("#weiter").slideToggle()
	ergebniss()
}

function wiedercomstart(){
	$("#weiter").hide()
}




function nochmalzeigen(){
	
	window.location.href = "http://spiele-aus-spass.esy.es/Schere-Stein-Papier.html"; 

}

function link1(){
	
	window.location.href = "http://spiele-aus-spass.esy.es";
	
}


function loadImage1(){
	console.log("Schere geladen")
}

function loadImage2(){
	console.log("Stein geladen")
}

function loadImage3(){
	console.log("Papier geladen")
}

			//Spiel Code zu ende
			
			//Code für das Tutorial
			

function multiplayer(){
	$("#buttonmulti").click(function(){
		$("#spstbutton").hide()
		$("#namese2").slideToggle("slow")
			$("#spielst").click(function(){
				pruefname()
			})
	})
		
	function pruefname(){
			if($("#benutzer1").val() == ""){
				$("#fensterna").hide()
				$("#fensterna").slideToggle()
				$("#fensterru").hide()
				console.log("1")
			}
			else{
				$("#fensterna").hide()
				pruefenrunden()
				console.log("2")
			}
		}
		
		function pruefenrunden(){
			if($("#runden").val() == ""){
				$("#fensterru").hide()
				$("#fensterru").slideToggle()
				$("#fensterna").hide()
				console.log("^3")
			}
			else{
				checkzahl()
				console.log("4")
			}
		}
		
		function checkzahl(){
			var negzahl = $("#runden").val()
			
			if(negzahl < 0){
				negzahl *= -1
				$("#rundenanzahl").text(negzahl)
				anmelden()
				console.log("5")
			}
			else if(negzahl == 0){
				$("#fensterru").hide()
				$("#fensterru").slideToggle()
				$("#fensterna").hide()
			}
			else{
				$("#rundenanzahl").text($("#runden").val())
				anmelden()
				console.log("6")
			}
		}
}




