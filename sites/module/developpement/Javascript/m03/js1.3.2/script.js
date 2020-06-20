let nombreIA;
let nombreUtilisateur;
let chifoumi;

let playerWantsToPLay = true;

while (playerWantsToPLay) {
    nombreUtilisateur = prompt("Pierre, feuille ou ciseaux ?\nSi vous voulez arrêter de jouer écrivez \"stop\"");
    nombreIA = Math.floor(Math.random() * 3);
    chifoumi = ["Pierre", "Feuille", "Ciseaux"];
    
    if (chifoumi[nombreIA] == "Feuille" && nombreUtilisateur == "Pierre") {
        alert("IA : " + chifoumi[nombreIA] + "\nUtilisateur : " + nombreUtilisateur);
        alert("L'IA gagne avec la " + chifoumi[nombreIA] + " !");
    }
    
    else if (chifoumi[nombreIA] == "Feuille" && nombreUtilisateur == "Ciseaux") {
        alert("IA : " + chifoumi[nombreIA] + "\nUtilisateur : " + nombreUtilisateur);
        alert("L'utilisateur gagne avec le " + nombreUtilisateur + " !");
    }
    
    else if (chifoumi[nombreIA] == "Pierre" && nombreUtilisateur == "Feuille") {
        alert("IA : " + chifoumi[nombreIA] + "\nUtilisateur : " + nombreUtilisateur);
        alert("L'utilisateur gagne avec la " + nombreUtilisateur + " !");
    }
    
    else if (chifoumi[nombreIA] == "Pierre" && nombreUtilisateur == "Ciseaux") {
        alert("IA : " + chifoumi[nombreIA] + "\nUtilisateur : " + nombreUtilisateur);
        alert("L'IA gagne avec la " + chifoumi[nombreIA] + " !");
    }
    
    else if (chifoumi[nombreIA] == "Ciseaux" && nombreUtilisateur == "Pierre") {
        alert("IA : " + chifoumi[nombreIA] + "\nUtilisateur : " + nombreUtilisateur );
        alert("L'utilisateur gagne avec la " + nombreUtilisateur + " !");
    }
    
    else if (chifoumi[nombreIA] == "Ciseaux" && nombreUtilisateur == "feuille") {
        alert("IA : " + chifoumi[nombreIA] + "\nUtilisateur : " + nombreUtilisateur);
        alert("L'IA gagne avec le " + chifoumi[nombreIA] + " !");
    }
    
    else if (chifoumi[nombreIA] == nombreUtilisateur) {
        alert("IA : " + chifoumi[nombreIA] + "\nUtilisateur : " + nombreUtilisateur);
        alert("Egalitée !");
    }
    
    else if (nombreUtilisateur == "stop") {
        break;
    }
    
    else {
        alert("Il doit y avoir un problème quelque part");
    }
}



