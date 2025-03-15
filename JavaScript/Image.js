function displayImage() {
    const selectedImage = document.querySelector('input[name="dam"]:checked').value;
    const imageContainer = document.getElementById('imageContainer');

    imageContainer.innerHTML = '';
    const img = document.createElement('img');
    
    img.src = `../Images/Enigme/1_Nom_du_cheval/27_${selectedImage}.png`; 
    img.alt = selectedImage;
    imageContainer.appendChild(img);
}

function displayLetter(){
    const myImage = document.getElementById("letter-img");
    myImage.style.display = "block";

    var div = document.getElementById('letter-div');
    div.innerHTML += "<br>Entre le nom du supermarché dans la barre de recherche pour t'y rendre.<br><br>";
}