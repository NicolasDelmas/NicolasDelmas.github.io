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

        case "grande écuries":
            window.location.href = "../Pages/Chateau_de_Chantilly.html";
            break;
        default:
            document.getElementById("response").innerHTML = "le lieu  "+ query.toUpperCase() +"  n'existe pas.";
    }
});
