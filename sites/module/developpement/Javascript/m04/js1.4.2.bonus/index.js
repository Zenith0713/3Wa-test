// Écrivez un programme JavaScript pour trouver l'aire d'un triangle où les longueurs des trois côtés sont 5, 6, 7

let a = 5;
let b = 6;
let c = 7;

let perimetre = (a + b + c) / 2;
let aire = perimetre * (perimetre - a) * (perimetre - b) * (perimetre - c);

document.write(Math.round(Math.sqrt(aire)) + " cm2 environ");


// Écrivez un programme JavaScript pour découvrir que le 1er janvier est un dimanche entre 2014 et 2050

document.write("<h1>" + "Le dimanche 1er Janvier" + "</h1>")

let date = new Date("January 2, 2014");

let jours = date.getDay();
let nombreJours = date.getUTCDate();
let mois = date.getMonth();
let annee = date.getUTCFullYear();

let tableJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let tableMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

for (let i = 0; i <= (2050 - 2014); i++) {
    
    if (jours == 1 && nombreJours == 1) {
        document.write("Le 1er janvier est un dimanche lors de l'annee " + annee + "<br>");
    }

    annee += 1;
    date = new Date("January 2, " + annee);
    jours = date.getDay();
}