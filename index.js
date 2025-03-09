
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
        default:
            document.getElementById("response").innerHTML = "le lieu "+ query.toUpperCase() +" n'existe pas.";
    }
});


function displayImage() {
    const selectedImage = document.querySelector('input[name="dam"]:checked').value;
    const imageContainer = document.getElementById('imageContainer');

    imageContainer.innerHTML = '';
    const img = document.createElement('img');
    
    img.src = `../Images/Enigme/1_Nom_du_cheval/${selectedImage}.jpg`; 
    img.alt = selectedImage;
    imageContainer.appendChild(img);
}

function displayHorseList1() {
    const imageContainer = document.getElementById('imageContainer');

    imageContainer.innerHTML = '';
    const img = document.createElement('img');
    
    img.src = `../Images/Enigme/1_Nom_du_cheval/Dam3.jpg`; 
    imageContainer.appendChild(img);
}

function displayHorseList1() {
  document.getElementById("showTable").innerHTML = "TableHere";
}


function displayHorseList() {
        
        var horsesNames = [
            "Prenom", "Nom", "Jungle", "De Bosquentin", "Hermoso",
            "Du Theil", "Emotion", "De Belesta", "Sophia", "Tom", 
            "Akenaton", "Dam", "Ivana", "Rose", "Tee Coeur", "De Fleuriel", "Gibs",
            "De Diam", "Koh lala", "De Fleuriel", 
        ];
        var table = document.createElement('table');
        var nameIndex = 0;
        for (var i = 0; i < 10; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 2; j++) {
                var cell = row.insertCell();
                cell.textContent = horsesNames[nameIndex++];
            }
    
    document.getElementById('showTable').appendChild(table);
    }
}