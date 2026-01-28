// Récupérer l'URL actuelle et extraire les paramètres
const urlParams = new URLSearchParams(window.location.search);

// Sélectionner le conteneur d'affichage
const resultsElement = document.querySelector('#results');

// Fonction pour formater et afficher chaque champ
function displayResult(label, value) {
    if (value) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${label} :</strong> ${decodeURIComponent(value.replace(/\+/g, ' '))}`;
        resultsElement.appendChild(p);
    }
}

// Affichage des champs requis et du champ caché (timestamp)
displayResult("First name", urlParams.get('fname'));
displayResult("Last name", urlParams.get('lname'));
displayResult("organization title", urlParams.get('or-title'));
displayResult("Email", urlParams.get('email'));
displayResult("Cell phone", urlParams.get('phone'));
displayResult("membership", urlParams.get('membership-level'))
displayResult("organization", urlParams.get('organization'));
displayResult("description", urlParams.get('description'))
displayResult("submit date", urlParams.get('timestamp'))