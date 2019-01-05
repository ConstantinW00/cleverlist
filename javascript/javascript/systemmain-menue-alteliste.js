$(document).ready(function(){
    $("#menueleiste").hide()
    $("#pfeilbox2").hide()
    formatieren()
    seitezurueck()
})

"use strict"

function seitezurueck(){
    $("#pfeilbox2").click(function(){
        window.location.href="main-menue.html"
    })
}

function formatieren(){
    $("#menueleiste").css("width","150px")
    $("#menueleiste").css("margin-left","240px")
    $("#menueleiste").css("margin-top","120px")
    $("#menueleiste").css("text-align","right")
    $("#alteliste").css("margin-top","20px")
    $("#menueleiste").show("slide",{direction:"right"},800)
    $("#pfeilbox2").show("slide",{direction:"left"},800)
}

function altelisteanzeigen(){
    true
}









