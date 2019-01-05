$(document).ready(function(){
		$("*").val("")
		$("#eingaben").hide()
		$("#nameneingabe").hide()
		$("#button1").hide()
		$("#endkreuz").hide()
		$("#spielfeld1").hide()
		$("#punktestand").hide()
		$("#spl1").hide()
		$("#spl2").hide()
		$("#spl3").hide()
		$("#spl4").hide()
		$("#spl5").hide()
		$("#spl6").hide()
		$("#farbpalette1").hide()
		$("#farbpalette2").hide()
		$("#farbpalette3").hide()
		$("#farbpalette4").hide()
		$("#farbpalette5").hide()
		$("#farbpalette6").hide()
		$("#mitteobenrechts").hide()
		$("#mitteobenlinks").hide()
		$("#mitteuntenlinks").hide()
		$("#mitteuntenrechts").hide()
		$("#spielhilfe").hide()
		$("#namenfarbhilfe").hide()
		$("#wahlhilfe").hide()
		$("#fragenzufuegen").hide()
		$("#eigenaufghilfe").hide()
		$("#button2").hide()
		$("#deck").hide()
		zureingabe()
		zurueck()
		home()
		inputerst2(i1)
		inputerst3(i2)
		inputerst4(i3)
		inputerst5(i4)
		inputerst6(i5)
		loadimage1(flasche)
		farbwahl()
		namenfarbwahl()
		anleitung()
		warnung(i)
		ergaenzen(eigeneaufgaben)
		var flasche = new Image();
		flasche.src = "pictures/flasche2.png";
});

"use strict"
		
//Variablen

var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var t = 0;


var aufgabenjeden = [];
var eigeneaufgaben = [];

function zureingabe(){
	$("#starterst").click(function(){
		$("#strtbutt").slideToggle("slow")
		$("#eingaben").slideToggle("slow")
		$("#menuhilfe").hide()
		$("#wahlhilfe").show()
	});
}


function farbwahl(){
	$("#farbesp1").click(function(){
		$("#farbpalette1").slideToggle("fast")
		$("#farbpalette2").hide()
		$("#farbpalette3").hide()
		$("#farbpalette4").hide()
		$("#farbpalette5").hide()
		$("#farbpalette6").hide()	
	});
	$("#farbesp2").click(function(){
		$("#farbpalette1").hide()
		$("#farbpalette2").slideToggle("fast")
		$("#farbpalette3").hide()
		$("#farbpalette4").hide()
		$("#farbpalette5").hide()
		$("#farbpalette6").hide()
	});
	$("#farbesp3").click(function(){
		$("#farbpalette1").hide()
		$("#farbpalette2").hide()
		$("#farbpalette3").slideToggle("fast")
		$("#farbpalette4").hide()
		$("#farbpalette5").hide()
		$("#farbpalette6").hide()
	});
	$("#farbesp4").click(function(){
		$("#farbpalette1").hide()
		$("#farbpalette2").hide()
		$("#farbpalette3").hide()
		$("#farbpalette4").slideToggle("fast")
		$("#farbpalette5").hide()
		$("#farbpalette6").hide()
	});
	$("#farbesp5").click(function(){
		$("#farbpalette1").hide()
		$("#farbpalette2").hide()
		$("#farbpalette3").hide()
		$("#farbpalette4").hide()
		$("#farbpalette5").slideToggle("fast")
		$("#farbpalette6").hide()
	});
	$("#farbesp6").click(function(){
		$("#farbpalette1").hide()
		$("#farbpalette2").hide()
		$("#farbpalette3").hide()
		$("#farbpalette4").hide()
		$("#farbpalette5").hide()
		$("#farbpalette6").slideToggle("fast")
	});

	$("#spl1").click(function(){
		checkopen1()
	});

	function checkopen1(){
		if($("#spl1").val().length < 1){
			setTimeout(checkopen1, 10)
		}
		else{
			$("#farbpalette1").hide()
			$("#farbpalette2").hide()
			$("#farbpalette3").hide()
			$("#farbpalette4").hide()
			$("#farbpalette5").hide()
			$("#farbpalette6").hide()
			return farbwahl;
		}
		
	}

	$("#spl2").click(function(){
		checkopen2()
	});

	function checkopen2(){
		if($("#spl2").val().length < 1){
			setTimeout(checkopen2, 10)
		}
		else{
			$("#farbpalette1").hide()
			$("#farbpalette2").hide()
			$("#farbpalette3").hide()
			$("#farbpalette4").hide()
			$("#farbpalette5").hide()
			$("#farbpalette6").hide()
			return farbwahl;
		}
		
	}

	$("#spl3").click(function(){
		checkopen1()
	});

	function checkopen3(){
		if($("#spl3").val().length < 1){
			setTimeout(checkopen3, 10)
		}
		else{
			$("#farbpalette1").hide()
			$("#farbpalette2").hide()
			$("#farbpalette3").hide()
			$("#farbpalette4").hide()
			$("#farbpalette5").hide()
			$("#farbpalette6").hide()
			return farbwahl;
		}
		
	}

	$("#spl4").click(function(){
		checkopen4()
	});

	function checkopen4(){
		if($("#spl4").val().length < 1){
			setTimeout(checkopen4, 10)
		}
		else{
			$("#farbpalette1").hide()
			$("#farbpalette2").hide()
			$("#farbpalette3").hide()
			$("#farbpalette4").hide()
			$("#farbpalette5").hide()
			$("#farbpalette6").hide()
			return farbwahl;
		}
		
	}

	$("#spl5").click(function(){
		checkopen1()
	});

	function checkopen5(){
		if($("#spl5").val().length < 1){
			setTimeout(checkopen5, 10)
		}
		else{
			$("#farbpalette1").hide()
			$("#farbpalette2").hide()
			$("#farbpalette3").hide()
			$("#farbpalette4").hide()
			$("#farbpalette5").hide()
			$("#farbpalette6").hide()
			return farbwahl;
		}
		
	}

	$("#spl6").click(function(){
		checkopen6()
	});

	function checkopen6(){
		if($("#spl6").val().length < 1){
			setTimeout(checkopen6, 10)
		}
		else{
			$("#farbpalette1").hide()
			$("#farbpalette2").hide()
			$("#farbpalette3").hide()
			$("#farbpalette4").hide()
			$("#farbpalette5").hide()
			$("#farbpalette6").hide()
			return farbwahl;
		}
	}
}


function namenfarbwahl(){
	$("#farbwhb1").click(function(){
		$("#spl1").css("background-color", "#00FFFF")
	})
	$("#farbwdb1").click(function(){
		$("#spl1").css("background-color", "#0026FF")
	})
	$("#farbwo1").click(function(){
		$("#spl1").css("background-color", "#FF6A00")
	})
	$("#farbwr1").click(function(){
		$("#spl1").css("background-color", "#FF0000")
	})
	$("#farbwgru1").click(function(){
		$("#spl1").css("background-color", "#007F0E")
	})
	$("#farbwgra1").click(function(){
		$("#spl1").css("background-color", "#808080")
	})


	$("#farbwhb2").click(function(){
		$("#spl2").css("background-color", "#00FFFF")
	})
	$("#farbwdb2").click(function(){
		$("#spl2").css("background-color", "#0026FF")
	})
	$("#farbwo2").click(function(){
		$("#spl2").css("background-color", "#FF6A00")
	})
	$("#farbwr2").click(function(){
		$("#spl2").css("background-color", "#FF0000")
	})
	$("#farbwgru2").click(function(){
		$("#spl2").css("background-color", "#007F0E")
	})
	$("#farbwgra2").click(function(){
		$("#spl2").css("background-color", "#808080")
	})


	$("#farbwhb3").click(function(){
		$("#spl3").css("background-color", "#00FFFF")
	})
	$("#farbwdb3").click(function(){
		$("#spl3").css("background-color", "#0026FF")
	})
	$("#farbwo3").click(function(){
		$("#spl3").css("background-color", "#FF6A00")
	})
	$("#farbwr3").click(function(){
		$("#spl3").css("background-color", "#FF0000")
	})
	$("#farbwgru3").click(function(){
		$("#spl3").css("background-color", "#007F0E")
	})
	$("#farbwgra3").click(function(){
		$("#spl3").css("background-color", "#808080")
	})


	$("#farbwhb4").click(function(){
		$("#spl4").css("background-color", "#00FFFF")
	})
	$("#farbwdb4").click(function(){
		$("#spl4").css("background-color", "#0026FF")
	})
	$("#farbwo4").click(function(){
		$("#spl4").css("background-color", "#FF6A00")
	})
	$("#farbwr4").click(function(){
		$("#spl4").css("background-color", "#FF0000")
	})
	$("#farbwgru4").click(function(){
		$("#spl4").css("background-color", "#007F0E")
	})
	$("#farbwgra4").click(function(){
		$("#spl4").css("background-color", "#808080")
	})


	$("#farbwhb5").click(function(){
		$("#spl5").css("background-color", "#00FFFF")
	})
	$("#farbwdb5").click(function(){
		$("#spl5").css("background-color", "#0026FF")
	})
	$("#farbwo5").click(function(){
		$("#spl5").css("background-color", "#FF6A00")
	})
	$("#farbwr5").click(function(){
		$("#spl5").css("background-color", "#FF0000")
	})
	$("#farbwgru5").click(function(){
		$("#spl5").css("background-color", "#007F0E")
	})
	$("#farbwgra5").click(function(){
		$("#spl5").css("background-color", "#808080")
	})


	$("#farbwhb6").click(function(){
		$("#spl6").css("background-color", "#00FFFF")
	})
	$("#farbwdb6").click(function(){
		$("#spl6").css("background-color", "#0026FF")
	})
	$("#farbwo6").click(function(){
		$("#spl6").css("background-color", "#FF6A00")
	})
	$("#farbwr6").click(function(){
		$("#spl6").css("background-color", "#FF0000")
	})
	$("#farbwgru6").click(function(){
		$("#spl6").css("background-color", "#007F0E")
	})
	$("#farbwgra6").click(function(){
		$("#spl6").css("background-color", "#808080")
	})
}



function inputerst2(i1){
	$("#spieler2").click(function(){
		$("#nameneingabe").show()
		$("#eingaben").slideToggle("")
		$("#endkreuz").show()
		$("#button1").show()
		$("#spl1").show()
		$("#farbesp1").show()
		$("#spl2").show()
		$("#farbesp2").show()
		$("#spl3").hide()
		$("#farbesp3").hide()
		$("#spl4").hide()
		$("#farbesp4").hide()
		$("#spl5").hide()
		$("#farbesp5").hide()
		$("#spl6").hide()
		$("#farbesp6").hide()
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").show()
	
		i1 += 2;
		
		$("#spielen").click(function(){
		checkinputanzahl1(i1)

		});	

	});
	
}

function inputerst3(i2){	
	$("#spieler3").click(function(){
		$("#nameneingabe").show()
		$("#eingaben").slideToggle("")
		$("#endkreuz").show()
		$("#button1").show()
		$("#spl1").show()
		$("#farbesp1").show()
		$("#spl2").show()
		$("#farbesp2").show()
		$("#spl3").show()
		$("#farbesp3").show()
		$("#spl4").hide()
		$("#farbesp4").hide()
		$("#spl5").hide()
		$("#farbesp5").hide()
		$("#spl6").hide()
		$("#farbesp6").hide()
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").show()
		
		i2 += 3;
	
		$("#spielen").click(function(){
		checkinputanzahl2(i2)
		});
	});
}

function inputerst4(i3){	
	$("#spieler4").click(function(){
		$("#nameneingabe").show()
		$("#eingaben").slideToggle("")
		$("#endkreuz").show()
		$("#button1").show()
		$("#spl1").show()
		$("#farbesp1").show() 
		$("#spl2").show()
		$("#farbesp2").show()
		$("#spl3").show()
		$("#farbesp3").show()
		$("#spl4").show()
		$("#farbesp4").show()
		$("#spl5").hide()
		$("#farbesp5").hide()
		$("#spl6").hide()
		$("#farbesp6").hide()
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").show()		

		i3 += 4;
	
		$("#spielen").click(function(){
		checkinputanzahl3(i3)
		});
	});
}

function inputerst5(i4){	
	$("#spieler5").click(function(){
		$("#nameneingabe").show()
		$("#eingaben").slideToggle("")
		$("#endkreuz").show()
		$("#button1").show()
		$("#spl1").show()
		$("#farbesp1").show()
		$("#spl2").show()
		$("#farbesp2").show()
		$("#spl3").show()
		$("#farbesp3").show()
		$("#spl4").show()
		$("#farbesp4").show()
		$("#spl5").show()
		$("#farbesp5").show()
		$("#spl6").hide()
		$("#farbesp6").hide()
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").show()
		
		i4 += 5;

		$("#spielen").click(function(){
		checkinputanzahl4(i4)
		});
	});
}

function inputerst6(i5){	
	$("#spieler6").click(function(){
		$("#nameneingabe").show()
		$("#eingaben").slideToggle("")
		$("#endkreuz").show()
		$("#button1").show()
		$("#spl1").show()
		$("#farbesp1").show()
		$("#spl2").show()
		$("#farbesp2").show()
		$("#spl3").show()
		$("#farbesp3").show()
		$("#spl4").show()
		$("#farbesp4").show()
		$("#spl5").show()
		$("#farbesp5").show()
		$("#spl6").show()
		$("#farbesp6").show()
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").show()
		
		i5 += 6;
		
		$("#spielen").click(function(){
		checkinputanzahl5(i5)
		});
	});
}

function erstellen(){
	$("#eingaben").slideToggle("slow")
	$("#endkreuz").slideToggle("slow")
	$("#nameneingabe").slideToggle("slow")
	$("#button").slideToggle("slow")
}

function zurueck(){
$("#endkreuz").click(function(){
	window.location.href="http://www.spiele-aus-spass.esy.es/flaschendrehen.html"
});
}

function spielfeld1zeigen(){
		$("#punktestand").slideToggle("slow")
		$("#spielfeld1").slideToggle("slow")
		$("#endkreuz").slideToggle("slow")
		$("#button1").slideToggle("slow")
		$("#nameneingabe").slideToggle("slow")	
		$("#spielereins").text($("#spl1").val())	
		$("#spielerzwei").text($("#spl1").val())	
		$("#spielerdrei").text($("#spl2").val())	
		$("#spielervier").text($("#spl2").val())
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").hide()	
		$("#spielhilfe").show()	
			bild()
			auslosung2v2()
}

function spielfeld2zeigen(){
		$("#punktestand").slideToggle("slow")
		$("#spielfeld1").slideToggle("slow")
		$("#endkreuz").slideToggle("slow")
		$("#button1").slideToggle("slow")
		$("#nameneingabe").slideToggle("slow")	
		$("#spielereins").text($("#spl1").val())	
		$("#spielerfuenf").text($("#spl2").val())	
		$("#spielersechs").text($("#spl3").val())	
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").hide()	
		$("#spielhilfe").show()
			bild()
			auslosung3v3()
}

function spielfeld3zeigen(){
		$("#punktestand").slideToggle("slow")
		$("#spielfeld1").slideToggle("slow")
		$("#endkreuz").slideToggle("slow")
		$("#button1").slideToggle("slow")
		$("#nameneingabe").slideToggle("slow")	
		$("#spielereins").text($("#spl1").val())	
		$("#spielerzwei").text($("#spl3").val())	
		$("#spielerdrei").text($("#spl2").val())	
		$("#spielervier").text($("#spl4").val())
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").hide()	
		$("#spielhilfe").show()	
			bild()
			auslosung4v4()
}

function spielfeld4zeigen(){
		$("#punktestand").slideToggle("slow")
		$("#spielfeld1").slideToggle("slow")
		$("#endkreuz").slideToggle("slow")
		$("#button1").slideToggle("slow")
		$("#nameneingabe").slideToggle("slow")	
		$("#spielereins").text($("#spl1").val())	
		$("#spielerdrei").text($("#spl2").val())	
		$("#spielerfuenf").text($("#spl3").val())	
		$("#spielersechs").text($("#spl4").val())	
		$("#spielervier").text($("#spl5").val())
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").hide()	
		$("#spielhilfe").show()	
			bild()
			auslosung5v5()
}

function spielfeld5zeigen(){
		$("#punktestand").slideToggle("slow")
		$("#spielfeld1").slideToggle("slow")
		$("#endkreuz").slideToggle("slow")
		$("#button1").slideToggle("slow")
		$("#nameneingabe").slideToggle("slow")	
		$("#spielereins").text($("#spl1").val())	
		$("#spielerzwei").text($("#spl4").val())	
		$("#spielerdrei").text($("#spl2").val())	
		$("#spielervier").text($("#spl6").val())	
		$("#spielersieben").text($("#spl3").val())	
		$("#spieleracht").text($("#spl5").val())
		$("#wahlhilfe").hide()
		$("#menuhilfe").hide()
		$("#namenfarbhilfe").hide()	
		$("#spielhilfe").show()		
			bild()
			auslosung6v6()
}


function home(){
	$("#starterst1").click(function(){
	window.location.href = "http://spiele-aus-spass.esy.es"
});
}


function bild(){
	
	var c = document.getElementById("drehboden");
	var ctx = c.getContext("2d");
	var flasche = new Image();
		flasche.src = "pictures/flasche2.png"
	
	ctx.drawImage(flasche, 125, 10, 40, 130)
	
}


function loadimage1(flasche){
	console.log("Bild1 geladen")
}


function checkinputanzahl1(i1){
	namenfail()
		function namenfail(){
			if($("#spl1").val() == ""){
				$("#spl1").css("background-color", "#FF8C8C");
			}
			else if($("#spl2").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#FF8C8C");
			}
			else{
				spielfeld1zeigen()
			}
		}
}

function checkinputanzahl2(i2){
	namenfail()
		function namenfail(){
			if($("#spl1").val() == ""){
				$("#spl1").css("background-color", "#FF8C8C");
			}
			else if($("#spl2").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#FF8C8C");
			}
			else if($("#spl3").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#FF8C8C");
			}
			else{
				spielfeld2zeigen()
			}
		}
}

function checkinputanzahl3(i3){
	namenfail()
		function namenfail(){
			if($("#spl1").val() == ""){
				$("#spl1").css("background-color", "#FF8C8C");
			}
			else if($("#spl2").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#FF8C8C");
			}
			else if($("#spl3").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#FF8C8C");
			}
			else if($("#spl4").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#ffffff");
				$("#spl4").css("background-color", "#FF8C8C");
			}
			else{
				spielfeld3zeigen()
			}
		}
}

function checkinputanzahl4(i4){
	namenfail()
		function namenfail(){
			if($("#spl1").val() == ""){
				$("#spl1").css("background-color", "#FF8C8C");
			}
			else if($("#spl2").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#FF8C8C");
			}
			else if($("#spl3").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#FF8C8C");
			}
			else if($("#spl4").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#ffffff");
				$("#spl4").css("background-color", "#FF8C8C");
			}
			else if($("#spl5").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#ffffff");
				$("#spl4").css("background-color", "#ffffff");
				$("#spl5").css("background-color", "#FF8C8C");
			}
			else{
				spielfeld4zeigen()
			}
		}
}

function checkinputanzahl5(i5){
	namenfail()
		function namenfail(){
			if($("#spl1").val() == ""){
				$("#spl1").css("background-color", "#FF8C8C");
			}
			else if($("#spl2").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#FF8C8C");
			}
			else if($("#spl3").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#FF8C8C");
			}
			else if($("#spl4").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#ffffff");
				$("#spl4").css("background-color", "#FF8C8C");
			}
			else if($("#spl5").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#ffffff");
				$("#spl4").css("background-color", "#ffffff");
				$("#spl5").css("background-color", "#FF8C8C");
			}
			else if($("#spl6").val() == ""){
				$("#spl1").css("background-color", "#ffffff");
				$("#spl2").css("background-color", "#ffffff");
				$("#spl3").css("background-color", "#ffffff");
				$("#spl4").css("background-color", "#ffffff");
				$("#spl5").css("background-color", "#ffffff");
				$("#spl6").css("background-color", "#FF8C8C");
			}
			else{
				spielfeld5zeigen()
			}
		}
}


function auslosung2v2(){
	
	schreiben1()
	farbenfestlegen()

	function farbenfestlegen(){
		$("#spielereins").css("color" , $("#spl1").css("background-color"))
		$("#spielerzwei").css("color" , $("#spl1").css("background-color"))
		$("#spielerdrei").css("color" , $("#spl2").css("background-color"))
		$("#spielervier").css("color" , $("#spl2").css("background-color"))
		$("#spielerfuenf").hide()
		$("#spielersechs").hide()
		$("#spielersieben").hide()
		$("#spieleracht").hide()
	}


}


function auslosung3v3(){
	
	schreiben1()
	farbenfestlegen()

	function farbenfestlegen(){
		$("#spielereins").css("color" , $("#spl1").css("background-color"))
		$("#spielerfuenf").css("color" , $("#spl2").css("background-color"))
		$("#spielersechs").css("color" , $("#spl3").css("background-color"))
		$("#spielerzwei").hide()
		$("#spielerdrei").hide()
		$("#spielervier").hide()
		$("#spielersieben").hide()
		$("#spieleracht").hide()
	}
}




function auslosung4v4(){
	
	schreiben1()
	farbenfestlegen()

	function farbenfestlegen(){
		$("#spielereins").css("color" , $("#spl1").css("background-color"))
		$("#spielerzwei").css("color" , $("#spl3").css("background-color"))
		$("#spielerdrei").css("color" , $("#spl2").css("background-color"))
		$("#spielervier").css("color" , $("#spl4").css("background-color"))
		$("#spielerfuenf").hide()
		$("#spielersechs").hide()
		$("#spielersieben").hide()
		$("#spieleracht").hide()
	}
}




function auslosung5v5(){
	
	schreiben1()
	farbenfestlegen()

	function farbenfestlegen(){
		$("#spielereins").css("color" , $("#spl1").css("background-color"))
		$("#spielerdrei").css("color" , $("#spl2").css("background-color"))
		$("#spielervier").css("color" , $("#spl5").css("background-color"))
		$("#spielerfuenf").css("color" , $("#spl3").css("background-color"))
		$("#spielersechs").css("color" , $("#spl4").css("background-color"))
		$("#24").hide()
		$("#34").hide()
		$("#23").hide()
		$("#33").hide()
		$("#spielerzwei").hide()
		$("#spielersieben").hide()
		$("#spieleracht").hide()
	}
}



function auslosung6v6(){
	
	schreiben1()
	farbenfestlegen()

	function farbenfestlegen(){
		$("#spielereins").css("color" , $("#spl1").css("background-color"))
		$("#spielerzwei").css("color" , $("#spl4").css("background-color"))
		$("#spielerdrei").css("color" , $("#spl2").css("background-color"))
		$("#spielervier").css("color" , $("#spl6").css("background-color"))
		$("#spielersieben").css("color" , $("#spl3").css("background-color"))
		$("#spieleracht").css("color" , $("#spl5").css("background-color"))
		$("#spielerfuenf").hide()
		$("#spielersechs").hide()
		$("#14").hide()
		$("#13").hide()
		$("#24").hide()
		$("#34").hide()
		$("#23").hide()
		$("#33").hide()
	}
}


function schreiben1(){

	schreiben()

	function schreiben(){
		var c = document.getElementById("drehboden");
		var ctx = c.getContext("2d");

			ctx.clearRect(0, 0, 600, 600)
			ctx.font="40px verdana";
			ctx.fillText("Drehen", 80, 80);
			ctx.fillStyle = "#222288";
	}

	$("#drehboden").click(function(){
		var n = parseInt(Math.random()*1500)
		
		var zaehl = 0;
		var dre = setInterval(function(){
			zaehl += 5;
			animate()
     			if(zaehl > n){ 
         			clearInterval(dre);
         			zaelanimation2()
     			}
     		}, 10);
	});


function animate(){
	
		$("#deck").show()

	var flaschega = new Image();
		flaschega.src = "pictures/flasche2.png";

	var c = document.getElementById("drehboden");
	var ctx = c.getContext("2d");

	ctx.clearRect(0, 0, 300, 300)
	ctx.translate(150, 75)
	ctx.rotate(8*Math.PI / 180)
	ctx.translate(-150, -75)
	ctx.drawImage(flaschega, 130, 8, 40, 135)
}	

function zaelanimation2(){

	var n1 = parseInt(Math.random()*1500)
	var zaehl1 = 0;
		var dre1 = setInterval(function(){
			zaehl1 += 5;
			animate2()
     			if(zaehl1 > n1){ 
         			clearInterval(dre1);
         			zaelanimate3()
     			}
     		}, 10);
}

function animate2(){
	
	var flaschega = new Image();
		flaschega.src = "pictures/flasche2.png";

	var c = document.getElementById("drehboden");
	var ctx = c.getContext("2d");

	ctx.clearRect(0, 0, 300, 300)
	ctx.translate(150, 75)
	ctx.rotate(3*Math.PI / 180)
	ctx.translate(-150, -75)
	ctx.drawImage(flaschega, 130, 8, 40, 135)

	};

function zaelanimate3(){

	var n2 = parseInt(Math.random()*1500)
	var zaehl2 = 0;
		var dre2 = setInterval(function(){
			zaehl2 += 5;
			animate3()
     			if(zaehl2 > n2){ 
         			clearInterval(dre2);
         			zaelanimate4()
     			}
     		}, 10);
}

function animate3(){
	var flaschega = new Image();
		flaschega.src = "pictures/flasche2.png";

	var c = document.getElementById("drehboden");
	var ctx = c.getContext("2d");

	ctx.clearRect(0, 0, 300, 300)
	ctx.translate(150, 75)
	ctx.rotate(1*Math.PI / 180)
	ctx.translate(-150, -75)
	ctx.drawImage(flaschega, 130, 8, 40, 135)
}

function zaelanimate4(){

	var n2 = parseInt(Math.random()*1)
	var zaehl2 = 0;
		var dre2 = setInterval(function(){
			zaehl2 += 5;
     			if(zaehl2 > n2){ 
         			clearInterval(dre2);
         			animate4()
     			}
     		}, 1);
}

function animate4(){
			t++
		$("#deck").hide()
	
	if(eigeneaufgaben.length == 0){
		aufgabenwahlaeltere()
	}
	else{	
		if(t >= 3){
			aufgabenwahleigene(eigeneaufgaben)
		}
		else{
			aufgabenwahlaeltere()
		}
	}
}
}



function ergaenzen(eigeneaufgaben){
	$("#spielen1").click(function(){
		$("#strtbutt").slideToggle("slow")
		$("#eingaben").slideToggle("slow")
		$("#wahlhilfe").show()
		$("#menuhilfe").hide()
		$("#eigenaufghilfe").hide()
		$("#strtbutt").hide()
		$("#button2").slideToggle("slow")
		$("#fragenzufuegen").slideToggle("slow")
	})

	$("#eigene").click(function(){
		$("#fragenzufuegen").slideToggle("")
		$("#strtbutt").slideToggle("")
		$("#eigenaufghilfe").show()
		$("#menuhilfe").hide()
		$("#button2").slideToggle("")
		setTimeout(alerten, 500)
			function alerten(){
				alert("Es darf immer nur eine Aufgabe oder Frage in das Feld geschrieben werden, \nansonsten kann diese nicht vom System erkannt werden!")
			}

		eigeneintragen()
	})


		function eigeneintragen(){
			$("#eintragen").click(function(){
				if($("#aufgabezu").val() == "" || $("#aufgabezu").val() == " "){
					alert("Du musst schon etwas eingeben |^o^|")
				}
				else{
					eintragen2()
					
				}
			})		
		}

		function eintragen2(){
				var aufg = $("#aufgabezu").val()
				eigeneaufgaben.push(aufg)
				$("#aufgabezu").val("")
		}
}


function aufgabenwahlaeltere(){

		random()

	function random(){
			var gestelltefragen = [];

		var fragesuchen = parseInt(Math.random()*210)
			
			gestelltefragen.push(fragesuchen)
			checkfrage(fragesuchen,gestelltefragen)

				function checkfrage(fragesuchen,gestelltefragen){
					for(var i=0;i<gestelltefragen.length;i++){					
						if(aufgabenaeltere[fragesuchen] == gestelltefragen[i]){
							console.log("gleich")
							return random
						}
					}
					aufgabe(fragesuchen)
				}

			function aufgabe(fragesuchen){
				var frage = aufgabenaeltere[fragesuchen]
				aufgabezeigen(frage,fragesuchen,aufgabenaeltere)
			}

			function aufgabezeigen(frage,fragesuchen,aufgabenaeltere){
				$("#pkt2").text(fragesuchen)
				$("#pkt3").text(aufgabenaeltere.length)
				$("#pkt1").text(frage)
			}
	}
}

function aufgabenwahleigene(eigeneaufgaben){

		randomeigen(eigeneaufgaben)

	function randomeigen(eigeneaufgaben){
		var gestellt1 = [];

		var fragesuch = parseInt(Math.random()*eigeneaufgaben.length)
						
					gestellt1.push(fragesuch)	
					checkfrage(fragesuch,gestellt1,eigeneaufgaben)
			
				function checkfrage(fragesuch,gestellt1,eigeneaufgaben){					
					for(var n=0;n<eigeneaufgaben.length;n++){
						for(var i=0;i<gestellt1.length;i++){
							if(eigeneaufgaben[n] == gestellt1[i]){
								console.log("gleich eigen")
								return randomeigen(eigeneaufgaben)
							}
						}
					}
						t = 0;
						aufgabe(fragesuch,eigeneaufgaben)
				}

			function aufgabe(fragesuch,eigeneaufgaben){
				var frageeig = eigeneaufgaben[fragesuch]
				aufgabezeigen(frageeig,fragesuch,eigeneaufgaben)
			}

			function aufgabezeigen(frageeig,fragesuch,eigeneaufgaben){
				$("#pkt2").text(fragesuch)
				$("#pkt3").text(eigeneaufgaben.length)
				$("#pkt1").text(frageeig)
			}
	}
}



var i=0
function warnung(i){
	$("#drehboden").click(function(){

			if(i == 0){
				alert("Achtung!! Diese Spiel muss selbständig gespielt werden, \n somit ist es der Gruppe selbst überlassen wie es gespielt \nwird und wie die Regeln sind.")
				alert("Viel Spaß beim Spielen :)")
				i++
			}
	})
}


function anleitung(){
	$("#menuhilfe").click(function(){
		alert("Du musst 'Spiel starten' auswählen, um das Spiel zu starten. \noder 'Home' um auf die Startseite zurückzukehren \noder 'Eigene Aufgaben' auswählen um eigene Aufgaben hinzuzufügen.")
	});

	$("#eigenaufghilfe").click(function(){
		alert("Hier kannst du deine eigenen Aufgaben und Fragen eintragen, die dann auch benutzt werden.")
	})

	$("#wahlhilfe").click(function(){
		alert("Du musst auswählen, mit wie vielen Leuten du spielen \nmöchtest. Dies tust du, indem du auf eine der \nSpielerzahlen klickst.")
	});

	$("#namenfarbhilfe").click(function(){
		alert("Du musst in jedes Eingabe-Feld den Namen eines \nMitspielers eintragen und jeweils eine Farbe für \njeden Spieler wählen.")
	});

	$("#spielhilfe").click(function(){
		alert("Du musst auf das 'Drehen' drücken um zu Beginnen.")
		alert("Achtung!! Diese Spiel muss selbständig gespielt werden, \nsomit ist es der Gruppe selbst überlassen wie es gespielt \nwird und wie die Regeln sind.")
		alert("Viel Spaß beim Spielen :)")
	});
}

