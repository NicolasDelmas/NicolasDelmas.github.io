function displayHorseList() {
    document.getElementById("showTable").innerHTML = "";
        var horsesNames = [
            "Prenom du cheval", "Nom du cheval", "Tee Coeur", "De Fleuriel", "Hermoso",
            "Du Theil", "Emotion", "De Belesta", "Akenaton", "Dam",
            "Ivana", "Rose", "Jungle", "De Bosquentin", "Gibs",
            "De Diam", "Koh lala", "De Fleuriel", 
        ];
        var table = document.createElement('table');
        var nameIndex = 0;
        for (var i = 0; i < 9; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 2; j++) {
                var cell = row.insertCell();
                cell.textContent = horsesNames[nameIndex++];
            }
    
    document.getElementById('showTable').appendChild(table);
    }
}