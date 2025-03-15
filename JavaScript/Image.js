function displayImage() {
    const selectedImage = document.querySelector('input[name="dam"]:checked').value;
    const imageContainer = document.getElementById('imageContainer');

    imageContainer.innerHTML = '';
    const img = document.createElement('img');
    
    img.src = `../Images/Enigme/1_Nom_du_cheval/${selectedImage}.jpg`; 
    img.alt = selectedImage;
    imageContainer.appendChild(img);
}

function displayLetter() {
    const selectedImage = document.querySelector('input[name="dam"]:checked').value;
    const imageContainer = document.getElementById('imageContainer');

    imageContainer.innerHTML = '';
    const img = document.createElement('img');
    
    img.src = `../Images/Enigme/1_Nom_du_cheval/${selectedImage}.jpg`; 
    img.alt = selectedImage;
    imageContainer.appendChild(img);
}

function showImage(){
    const showImageButton = document.getElementById("display-letter-button");
    const myImage = document.getElementById("letter-img");
    myImage.style.display = "block";
}