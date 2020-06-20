let tailleTable = "";
let resultat = "";

do {
    tailleTable = parseInt(prompt("Veuillez saisir la taille de la table des multiplications", "taille en nombre"));
} while (isNaN(tailleTable));

console.log(tailleTable)

document.write("<table>");
for(let i = 1; i <= tailleTable; i++) {
    document.write("<tr>");
        
        for(let j = 1; j <= tailleTable; j++) {
            resultat = i * j;
            
            if (i == j) {
                document.write("<td class='egaliter'>");
                document.write(resultat);
                document.write("</td>");
            } else {
                document.write("<td>");
                document.write(resultat);
                document.write("</td>");
            }
            
            
        }
    
    document.write("</tr>");
}

document.write("</table>");


// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7



// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050