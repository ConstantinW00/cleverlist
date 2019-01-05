$(document).ready(function(){
   $("*").val("")
   formularabschicken()
});


"use strict"


function formularabschicken(){
    $("#buttonrf").click(function(){
        sendFormularrf()
    })
    $("#buttonbg").click(function(){
        sendFormularbg()
    })
}


function sendFormularrf(){
  	if ($("#rfinputwo").val() == ""){
    	alert("Sie haben keinen Text eingegeben!");
    	return false;
 	}

  	var t = new Array();
  	 	t[0] = "Formular: Rechtschreibfehler";
 	 	t[1] = "- [Wo(Rechtschreibfehler)]: " + $("#rfinputwo").val()
 	 	t[2] = "- [Was(Rechtschreibfehler)]: " + $("#rftxtwas").val();
 	var weite = 400;
  	var hoehe = 600;
  	var x = (screen.width - weite - 10) / 2;
  	var y = (screen.height - hoehe - 32) / 2;
  	var fenster = "width=" 
  		+ weite 
  		+ "px" 
  		+ ",height=" 
  		+ hoehe 
  		+ "px";

  	  	fenster += ",left=" 
  	  	+ x 
  	  	+ "px" 
  	  	+ ",top=" 
  	  	+ y 
  	  	+ "px" 
  	  	+ ",scrollbars=yes";

 	var Formular = window.open("","PopUp",fenster); Formular.focus();
  	Formular.document.open();
  	Formular.document.write("<html><head><title>Formular<\/title><\/head>");
  	Formular.document.write("<body style=\"font:91% Verdana,sans-serif;\"");
  	Formular.document.write(" onload=\"document.links[0].click();\"");
  	Formular.document.writeln("><p>");
  	var m = "";

	for(var i = 0; i <= 2; i++){
   		var z = ""; var cr = 0;
    		for (var y = 0; y < Number(t[i].length); y++){
      			switch(t[i].charCodeAt(y)){
       	 			case 13: z += "¦"; cr = 1; break;
        			case 10: if (!cr) z += "¦"; break;
			        case 32: z += "&#32;"; break;
			        case 34: z += "&#34;"; break;
			        case 38: z += "+"; break;
			        case 60: z += "&#60;"; break;
			        case 61: z += "&#61;"; break;
			        case 62: z += "&#62;"; break;
			        case 64: z += "&#64;"; break;
			        case 196: z += "&#196;"; break;
			        case 214: z += "&#214;"; break;
			        case 220: z += "&#220;"; break;
			        case 223: z += "&#223;"; break;
			        case 228: z += "&#228;"; break;
			        case 246: z += "&#246;"; break;
			        case 252: z += "&#252;"; break;
			        case 8364: z += "EUR"; break;
			        default:
        				if (t[i].charCodeAt(y) > 32 && t[i].charCodeAt(y) < 127){
          					z += t[i].charAt(y);
        				}
        				else{
        					z += "&#191;";
      					}
    			}
    		}
    t[i] = z; 
    z = ""; 
    var e = "";

    for(y = 0; y < Number(t[i].length); y++){
    	if (t[i].charAt(y) == "¦"){
        z += "<br>";
        e += "%0D%0A";
      	}
      	else{
       		z += t[i].charAt(y);
        		if(t[i].charAt(y) == "?"){
        			e += "%3F";
        		}
                else{
          			e += t[i].charAt(y);
        				if(t[i].charAt(y) == "%"){
          					e += "25";
        		}
        	}
      	}
    	
	}
    Formular.document.writeln(z + "<br>"); t[i] = e;
    if(i > 0){
		m += t[i] + "%0D%0A";
    }
    if(i < 3){
      Formular.document.writeln("<br>"); m += "%0D%0A";
    }
  
}
  Formular.document.writeln("<\/p>");
  if(m.length > 1750){
    Formular.document.write("<hr><p><b><i>Sie haben sehr viel Text ");
    Formular.document.write("eingegeben,<br>sodass eine automatische ");
    Formular.document.write("Uebernahme leider nicht moeglich ist.<br>");
    Formular.document.write("Bitte kopieren Sie Ihren obenstehenden Text ");
    Formular.document.write("(Strg-C) und<br>uebertragen ihn anschliessend ");
    Formular.document.writeln("in Ihr eMail-Programm (Strg-V).<\/b><\/i><\/p>");
    m = "- hier bitte Ihren Text einfuegen -";
  }

  Formular.document.write("<p><a href=\"mailto:" + "support@cfung.de");
  Formular.document.write("?subject=" + t[0] + "&amp;body=" + m + "\"");
  Formular.document.write(" onclick=\"window.setTimeout('self.close()',5000)\"");
  Formular.document.writeln(">eMail versenden<\/a><\/p><\/body><\/html>");
  Formular.document.close();
  return true;
}



function sendFormularbg(){

  	if ($("#bginputwo").val() == ""){
    	alert ("Sie haben keinen Text eingegeben!");
    	return false;
 	}

  	var t = new Array();
  	 	t[0] = "Formular: Bug";
 	 	t[1] = "- [Wo(Bug)]: " + $("#bginputwo").val()
 	 	t[2] = "- [Was(Bug)]: " + $("#bgtxtwas").val();
 	var weite = 400;
  	var hoehe = 600;
  	var x = (screen.width - weite - 10) / 2;
  	var y = (screen.height - hoehe - 32) / 2;
  	var fenster = "width=" 
  		+ weite 
  		+ "px" 
  		+ ",height=" 
  		+ hoehe 
  		+ "px";

  	  	fenster += ",left=" 
  	  	+ x 
  	  	+ "px" 
  	  	+ ",top=" 
  	  	+ y 
  	  	+ "px" 
  	  	+ ",scrollbars=yes";

 	var Formular = window.open("","PopUp",fenster); Formular.focus();
  	Formular.document.open();
  	Formular.document.write("<html><head><title>Formular<\/title><\/head>");
  	Formular.document.write("<body style=\"font:91% Verdana,sans-serif;\"");
  	Formular.document.write(" onload=\"document.links[0].click();\"");
  	Formular.document.writeln("><p>");
  	var m = "";

	for(var i = 0; i <= 2; i++){
   		var z = ""; var cr = 0;
    		for (var y = 0; y < Number(t[i].length); y++){
      			switch(t[i].charCodeAt(y)){
       	 			case 13: z += "¦"; cr = 1; break;
        			case 10: if (!cr) z += "¦"; break;
			        case 32: z += "&#32;"; break;
			        case 34: z += "&#34;"; break;
			        case 38: z += "+"; break;
			        case 60: z += "&#60;"; break;
			        case 61: z += "&#61;"; break;
			        case 62: z += "&#62;"; break;
			        case 64: z += "&#64;"; break;
			        case 196: z += "&#196;"; break;
			        case 214: z += "&#214;"; break;
			        case 220: z += "&#220;"; break;
			        case 223: z += "&#223;"; break;
			        case 228: z += "&#228;"; break;
			        case 246: z += "&#246;"; break;
			        case 252: z += "&#252;"; break;
			        case 8364: z += "EUR"; break;
			        default:
        				if (t[i].charCodeAt(y) > 32 && t[i].charCodeAt(y) < 127){
          					z += t[i].charAt(y);
        				}
        				else{
        					z += "&#191;";
      					}
    			}
    		}
    t[i] = z; 
    z = ""; 
    var e = "";

    for(y = 0; y < Number(t[i].length); y++){
    	if (t[i].charAt(y) == "¦"){
        z += "<br>";
        e += "%0D%0A";
      	}
      	else{
       		z += t[i].charAt(y);
        		if(t[i].charAt(y) == "?"){
        			e += "%3F";
        		}
                else{
          			e += t[i].charAt(y);
        				if(t[i].charAt(y) == "%"){
          					e += "25";
        		}
        	}
      	}
    	
	}
    Formular.document.writeln(z + "<br>"); t[i] = e;
    if(i > 0){
		m += t[i] + "%0D%0A";
    }
    if(i < 3){
      Formular.document.writeln("<br>"); m += "%0D%0A";
    }
  
}
  Formular.document.writeln("<\/p>");
  if(m.length > 1750){
    Formular.document.write("<hr><p><b><i>Sie haben sehr viel Text ");
    Formular.document.write("eingegeben,<br>sodass eine automatische ");
    Formular.document.write("Uebernahme leider nicht moeglich ist.<br>");
    Formular.document.write("Bitte kopieren Sie Ihren obenstehenden Text ");
    Formular.document.write("(Strg-C) und<br>uebertragen ihn anschliessend ");
    Formular.document.writeln("in Ihr eMail-Programm (Strg-V).<\/b><\/i><\/p>");
    m = "- hier bitte Ihren Text einfuegen -";
  }

  Formular.document.write("<p><a href=\"mailto:" + "support@cfung.de");
  Formular.document.write("?subject=" + t[0] + "&amp;body=" + m + "\"");
  Formular.document.write(" onclick=\"window.setTimeout('self.close()',5000)\"");
  Formular.document.writeln(">eMail versenden<\/a><\/p><\/body><\/html>");
  Formular.document.close();
  return true;
}