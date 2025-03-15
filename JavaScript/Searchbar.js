function searchPlace(){
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var query = document.getElementById("searchInput").value.toLowerCase();
    
        switch (query) {
            case "accueil":
                window.location.href = "../index.html";
                break;
                
            case "entrée du chateau":
                window.location.href = "../Pages/Chateau_de_Chantilly.html";
                break;
    
            case "galerie de peinture":
                window.location.href = "../Pages/Galerie_de_Peinture.html";
                break;
    
            case "grande écuries":
                window.location.href = "../Pages/Grandes_Écuries.html";
                break;
    
            case "box de akenaton":
                window.location.href = "../Pages/Box_de_Akenaton.html";
                break;
            default:
                document.getElementById("response").innerHTML = "le lieu "+ query.toUpperCase() +" n'existe pas.";
        }
    });
}

function inspectBox(){
    document.getElementById("inspectForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var query = document.getElementById("inspectInput").value.toLowerCase();
    
        switch (query) {
            case "selle":
                document.getElementById("inspectResponse").innerHTML = "<br>C'est la selle de Simon. Si elle est ici c'est sûrement que le voleur n'était pas un grand cavalier. D'ailleurs il est impossible qu'Akenaton soit monté dans un camion, des temoins l'auraient vu passé. La seule option envigeasable est que le voleur lui ait mis une longe et qu'ils soient partis par le bois juste derrière les écuries.";
                break;
                
            case "fourche":
                document.getElementById("inspectResponse").innerHTML = "<br>Tiens, pourquoi il y a-t-il une fourche dans ce box ? Le voleur aurait-il voulu étaler le foin dans le box avant de partir ?";
                break;
    
            case "foin":
            case "paille":
                document.getElementById("inspectResponse").innerHTML = '<br>Vous fouillez dans le foin étalé par terre sans trop savoir ce que vous chercher mais vous tomber sur une lettre.<button id="display-letter-button" class="puzzle_1_button_2" onclick="showImage()">Voir la lettre</button>';
                break;
            case "sang":
                document.getElementById("inspectResponse").innerHTML = "Autant de sang dans ce box... il y a du y avoir du grabuge ! Mais-est-ce sang d'Akenaton ou du voleur ? Ou bien de quelqu'un d'autre qui aurait surpris le voleur en plein méfait...";
                break;

            default:
                document.getElementById("inspectResponse").innerHTML = "<br>Après analyse, il semblerait qu'il n'y ait rien à voir ici";
        }
    });
}