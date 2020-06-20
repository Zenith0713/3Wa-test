let listeDeCourse = [];
let demandeUtilisateur;
let produit;

function ajouterUnProduitDeCourse(produit) {
    listeDeCourse.push(produit);
}

function supprimerTousLesProduitsDeLaListe() {
    listeDeCourse.length = 0;
}

function supprimerProduitSpecifique(produit) {
    let indexProduitASupprimer = listeDeCourse.indexOf(produit);
    listeDeCourse.splice(indexProduitASupprimer);
}

// Afficher un UL
function tailleEtProduitListeDeCourse() {
    document.write("<ul>");
    for (let element of listeDeCourse) {
        document.write("<li>" + element + "</li>");
    }
    document.write("/<ul>");
    
    document.write("<br>" + "La liste de course est d'une longueur de " + listeDeCourse.length);
}


console.log(listeDeCourse);