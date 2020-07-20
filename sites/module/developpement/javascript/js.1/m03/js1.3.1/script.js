let premierNombre;
let operateur;
let deuxiemeNombre;
let resultat;

do {
    premierNombre  =  parseFloat(window.prompt("Choisissez un premier nombre", "1er nombre"));
    operateur = window.prompt("Choisissez un opérateur", "Opérateur");
    deuxiemeNombre  = parseFloat(window.prompt("Choisissezu un deuxieme nombre", "2eme nombre"));
}  while (isNaN(premierNombre) || isNaN(deuxiemeNombre));


switch(operateur) {
    case "+":
        resultat = premierNombre + deuxiemeNombre;
        break;
    
    case "-":
        resultat = premierNombre + deuxiemeNombre;
        break;
    
    case "*":
        resultat = premierNombre * deuxiemeNombre;
        break;
    
    case "/":
        resultat = premierNombre / deuxiemeNombre;
        break;
    
    case "^": 
        resultat = premierNombre / deuxiemeNombre;
        break;
}

if (
    operateur != "+" &&
    operateur != "-" &&
    operateur != "*" &&
    operateur != "/" &&
    operateur != "^"
) {
    alert("Vous n'avez pas bien saisi l'opérateur");
}

else if (operateur == "/" && deuxiemeNombre == "0") {
    alert("Vous ne pouvez pas diviser par zéro");
}


document.write(premierNombre + operateur + deuxiemeNombre + "= " + resultat);


// bonus prendre un string et l'inverser.

// test va devenir tset