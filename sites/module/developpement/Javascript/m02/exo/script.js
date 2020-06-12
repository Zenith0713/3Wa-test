const TVA = 20.0;



let montantHT;

do {
    montantHT = parseFloat(window.prompt("Choisissez un prix hors taxe", "Votre prix"));
} while(isNaN(montantHT));

// TODO: Gerer les minuscules et majuscules (recherche des methodes);.
let reduction = window.prompt("Avez vous une remise ?", "Oui ou Non").toLowerCase();



if (reduction === "oui" || reduction === "yes") {
    let valeurRemise;
    do {
        valeurRemise = parseFloat(window.prompt("De combien est votre remise ?"));
    } while(isNaN(valeurRemise));
    
    montantHT -= (montantHT * (valeurRemise / 100));
    
    document.write("Votre remise est de : ", valeurRemise,"%");
    document.write("<br>");
    console.log(montantHT);
} else {
    document.write("Aucune remise n'a été appliquée");
    document.write("<br>");
}

let montantTVA = montantHT * (TVA / 100);

let montantTTC = montantHT + montantTVA;


document.write("Votre prix TTC est de " + montantTTC + "&euro;");