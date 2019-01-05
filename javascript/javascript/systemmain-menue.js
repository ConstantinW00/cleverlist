$(document).ready(function(){
    $("#pfeilbox2").hide()
    $("#zurueck").hide()
    $("#neueliste").hide()
    $("#alteliste").hide()
    $("#erinnerung").hide()
    $("#menueleiste").hide()
    $("#pfeilbox2").hide()
    listenclick()
    auswahl()
})

"use strict"

console.log("neu")


function auswahl(){
    $("#menueleiste").show()
        $("#neueliste").show("slide", {direction:"right"},1000)
            setTimeout(naechste1,50)
                function naechste1(){
                    $("#alteliste").show("slide", {direction:"left"},1000)
                    setTimeout(naechste2,50)
                }
                function naechste2(){
                    $("#erinnerung").show("slide", {direction:"down"},1000)
                }
}

function listenclick(){
    $("#neueliste").click(function(){
        $("#neueliste").hide("slide",{direction:"right"},800)
        $("#alteliste").hide("slide",{direction:"left"},800)
        $("#erinnerung").hide("slide",{direction:"down"},800)
        setTimeout(anzeigeneueliste,810)
    })
    $("#alteliste").click(function(){
        $("#neueliste").hide("slide",{direction:"left"},800)
        $("#alteliste").hide("slide",{direction:"right"},800)
        $("#erinnerung").hide("slide",{direction:"down"},800)
        setTimeout(anzeigealteliste,810)
    })
    $("#erinnerung").click(function(){
        $("#neueliste").hide("slide",{direction:"up"},800)
        $("#alteliste").hide("slide",{direction:"left"},800)
        $("#erinnerung").hide("slide",{direction:"right"},800)
        setTimeout(anzeigeerinnerung,810)
    })
    
    function anzeigeneueliste(){
        window.location.href="main-menue-neueliste.html"
    }
    
    function anzeigealteliste(){
        window.location.href="main-menue-alteliste.html"
    }
    
    function anzeigeerinnerung(){
        window.location.href="main-menue-erinnerung.html"
    }
}