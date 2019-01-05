$(document).ready(function(){
    $("#menueleiste").hide()
    $("#pfeilbox2").hide()
    $("#hinweisbox").hide()
    $("#actions").hide()
    $("#listebox").hide()
    formatieren()
    actions()
    seitezurueck()
    speichern()
})

var lnr = new Date();

"use strict"

function seitezurueck(){
    $("#pfeilbox2").click(function(){
        window.location.href="main-menue.html"
    })
}

function formatieren(){
    $("#menueleiste").css("width","150px")
    $("#menueleiste").css("height","50px")
    $("#menueleiste").css("margin-left","240px")
    $("#menueleiste").css("margin-top","120px")
    $("#menueleiste").css("text-align","right")
    $("#neueliste").css("margin-top","20px")
    $("#menueleiste").show("slide",{direction:"right"},800)
    $("#pfeilbox2").show("slide",{direction:"left"},800)
    $("#listebox").show("slide",{direction:"down"},800)
    $("#actions").show("slide",{direction:"down"},800)
}

function actions(){
    $("#loeschen").click(function(){
        $("#hinweistxt").html("Wenn du auf Löschen drückst wird die gesamte Liste gelöscht.")
        $("#hinweisbox").fadeIn()
        check()
    })
    
    function check(){
        $("#ok").click(function(){
            $("#liste").val("")
            $("#hinweisbox").fadeOut()
        })
        $("#abbrechen").click(function(){
            false
            $("#hinweisbox").fadeOut()
        })
    }
    
    $("#speicherb").click(function(){
        speichern()
    })
}

function speichern(){
    console.log("1")
    // Datenbank anlegen
    var request = indexedDB.open('AlteListen', 1)
    console.log("2")
    // Änderungs/Erzeugungs-Event
    request.onupgradeneeded = function(){
      console.log('Datenbank angelegt');
      var db = this.result;
      if(!db.objectStoreNames.contains('features')){
        store = db.createObjectStore('features', {
          keyPath: 'key',
          autoIncrement: true
        });
      }
    }
    console.log("3")
    // Öffnungs-Event (feuert nach upgradeneeded)
    request.onsuccess = function(){
      console.log('Datenbank geöffnet');
      var db = this.result;
      if(!db.objectStoreNames.contains('features')){
        store = db.createObjectStore('features', {
          keyPath: 'key',
          autoIncrement: true
        });
      }
    }
    console.log("4")
}









