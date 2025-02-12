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
            window.location.href = "../Pages/Chateau_de_Chantilly.html";
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