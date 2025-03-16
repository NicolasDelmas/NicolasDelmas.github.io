function displayHint(hintID) {
    var div = document.getElementById("display-hint");
    switch(hintID){
        case 1-1:
            div.innerHTML = `D'ici vous avez accès à 3 lieux : <br> - Galerie de Peintures<br> - Grande Écuries <br> - Jeune fille<br><br> Rendez-vous dans ces différents lieux pour avancer dans l'enquête. Pour ce faire, copiez le nom d'un des lieux et collez le dans la barre de navigation.`;
            break;

        case 12-1:
            div.innerHTML = `Commencer par regarder la liste des chevaux. Parmi eux se trouve le nom du cheval de Simon Delestre. Cassandre vous explique que le nom du cheval de Simon porte le nom d'un de ces ancêtre. Allez à la Galerie de peintures pour en apprendre plus.`;
            break;

        case 36-1:
            div.innerHTML = `Approchez-vous des tableaux. Cassandre vous a indiqué que le nom du cheval de Simon Delestre était inspiré du nom d'un membre de sa famille. Il y aura surement un indice vous permettant d'identifier son cheval.`;
            break;

        case 36-2:
            div.innerHTML = `Les portraits de famille proviennent d'Europe latine. Les inscriptions sont donc en latin. Si tu ne parles pas couramment cette langue, n'hésite pas à utiliser un traducteur.`;
            break;

        case 27-1:
            div.innerHTML = `Avant de regarder la suite des indices, commencez par lire ceux de l'image 36.`;
            break;

        case 27-2:
            div.innerHTML = `Sur la photo ci-dessous un élément ne vous saute-t-il pas aux yeux ? Comparez les inscriptions et la liste des chevaux`;
            break;

        case 27-3:
            div.innerHTML = `En latin EQUS signifie cheval et DAM... il s'agit simplement du nom du cheval !`;
            break;

        case 34-1:
            div.innerHTML = `Comme indiqué dans le texte vous avez besoin du nom du cheval. Si vous ne le connaissez pas consultez d'abord les indices des images 12, 27 et 36.`;
            break;

        case 34-2:
            div.innerHTML = `Si vous lisez cet indice c'est que vous connaissez le nom du cheval. Si vous ne le connaissez pas, continuez d'enquêter ou rendez vous à la page indice 27. Le cheval de Simon Delestre est Akenaton Dam. Pour accéder au lieu d'après, il vous est demandé d'utiliser le format "box de Prenom_Du_Cheval".<br>Naturellement vous entrez donc "box de Akenaton" pour accéder à la suite de l'enquête`;
            break;

        case 17-1:
            div.innerHTML = `Cette image contient 3 éléments important. Essayer de tous les trouver et de les regarder un par un.`;
            break;

        case 17-2:
            div.innerHTML = `Les 3 éléments à regarder sont : <br>- la selle <br>- le sang <br>- la fourche<br> Regardez les un par un pour en savoir plus.`;
            break;

        case 17-3:
            div.innerHTML = `Regarder le sang et la selle vous apprenne pas grand chose sur la suite. L'objet important est la fourche... Peut-être qu'il y a un quatrième objet à chercher.`;
            break;

        case 17-4:
            div.innerHTML = `La fourche vous indique que du foin a été remué. Vous fouiller donc le "foin" en utilisant la barre de recherche et vous découvrez la lettre qui y était caché.`;
            break;

        case 8-1:
            div.innerHTML = `Pour cet indice vous aurez très probablement besoin d'un outil de cartographie type Google Maps. Le voleur d'Akenaton semble vouloir vous embarquer dans une sorte de chasse au trésor.`;
            break;

        case 8-2:
            div.innerHTML = `Pour trouvez le point de départ de ce cache-cache grandeur nature commencez par cherchez dans les différents lieux que vous avez fréquentés si vous n'avez pas raté un indice.`;
            break;

        case 8-3:
            div.innerHTML = `Le point de départ est là ou tout à commencé. Allez voir Cassandre elle a surement des choses intéressantes à vous dire.`;
            break;

        case 8-4:
            div.innerHTML = `Le point de départ est dans un lycée proche d'un chateau au sud ouest de la région de Chantilly. Chantilly étant en île de France le point de départ est un lycée au sud ouest de l'Île de France à proximité d'un château. Après quelques recherche sur Google Maps vous remarqué qu'il s'agit du lycée Louis Bascan à rambouillet.`;
            break;

        case 8-5:
            div.innerHTML = `En partant du Lycée Louis Bascan vous prenez à gauche avenue du général leclerc (D906) en direction de la pizzeria Villabate, la plus proche du lycée. Vous continuez exactement 11,5 kilomètres sur cette route et arrivé au supermarché Aldi de Saint Hilarion. Pour vous rendre là-bas écrivez simplement Aldi dans la barre de recherche.`;
            break;  

        default:
            div.innerHTML = "Error while displaying the message..."
            break;
    }
}