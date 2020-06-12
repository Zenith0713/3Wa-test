
let montantHT = parseFloat(window.prompt("Choisissez un prix hors taxe", "Votre prix"));

const TVA = 20.0;

let montantTVA = montantHT * (TVA / 100);

let montantTTC = montantHT + montantTVA;

document.write("Votre prix TTC est de " + montantTTC + "&euro;");


