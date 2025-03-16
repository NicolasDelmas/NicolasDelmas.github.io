function searchPlace(){
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var query = document.getElementById("searchInput").value.toLowerCase();
    
        switch (query) {                
            case "entrée du chateau":
                window.location.href = "../Pages/Chateau_de_Chantilly.html";
                break;
    
            case "galerie de peintures":
                window.location.href = "../Pages/Galerie_de_Peintures.html";
                break;
    
            case "grande écuries":
                window.location.href = "../Pages/Grandes_Écuries.html";
                break;

            case "jeune fille":
                window.location.href = "../Pages/Fille_de_l_ecurie.html";
                break;

            case "box de akenaton":
                window.location.href = "../Pages/Box_de_Akenaton.html";
                break;

            case "aldi":
                window.location.href = "../Pages/Supermarche.html";
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

        switch (true) {
            case query.includes("selle"):
                document.getElementById("inspectResponse").innerHTML = "<br>C'est la selle de Simon. Si elle est ici c'est sûrement que le voleur n'était pas un grand cavalier. D'ailleurs il est impossible qu'Akenaton soit monté dans un camion, des temoins l'auraient vu passé. La seule option envigeasable est que le voleur lui ait mis une longe et qu'ils soient partis par le bois juste derrière les écuries.";
                break;
                
            case query.includes("fourche"):
                document.getElementById("inspectResponse").innerHTML = "<br>Tiens, pourquoi il y a-t-il une fourche dans ce box ? Le voleur aurait-il voulu étaler le foin dans le box avant de partir ?";
                break;
    
            case query.includes("foin"):
            case query.includes("paille"):
                document.getElementById("inspectResponse").innerHTML = '<br>Vous fouillez dans le foin étalé par terre sans trop savoir ce que vous chercher mais vous tomber sur une lettre.<button class="puzzle_1_button_2" onclick="displayLetter()">Voir la lettre</button>';
                break;
                
            case query.includes("sang"):
                document.getElementById("inspectResponse").innerHTML = "<br>Autant de sang dans ce box... il y a du y avoir du grabuge ! Mais-est-ce sang d'Akenaton ou du voleur ? Ou bien de quelqu'un d'autre qui aurait surpris le voleur en plein méfait...";
                break;

            default:
                document.getElementById("inspectResponse").innerHTML = "<br>Après analyse, il semblerait qu'il n'y ait rien à voir ici";
        }
    });
}

function searchHint(){
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var query = document.getElementById("searchInput").value.toLowerCase();
    
        switch (query) {
            case "1":
                window.location.href = "../Indices/Hint_1.html";
                break;
    
            case "8":
                window.location.href = "../Indices/Hint_8.html";
                break;

            case "12":
                window.location.href = "../Indices/Hint_12.html";
                break;
    
            case "17":
                window.location.href = "../Indices/Hint_17.html";
                break;
    
            case "27":
                window.location.href = "../Indices/Hint_27.html";
            break;

            case "34":
                window.location.href = "../Indices/Hint_34.html";
                break;

            case "36":
                window.location.href = "../Indices/Hint_36.html";
                break;
            default:
                document.getElementById("response").innerHTML = "<br>Aucune image portant le numéro "+ query.toUpperCase() +" n'existe. Pour utiliser les indices entrez le numéro situé en bas de chaque image.";
        }
    });
}