const date = new Date();
let jours = date.getDay();
let nombreJours = date.getUTCDate();
let mois = date.getMonth();
let annee = date.getFullYear();

let tableJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let tableMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

document.write(
    "Aujourd'hui nous sommes le " + 
    tableJours[jours] + 
    " " + 
    nombreJours + 
    " " + 
    tableMois[mois] +
    " " + 
    annee
);