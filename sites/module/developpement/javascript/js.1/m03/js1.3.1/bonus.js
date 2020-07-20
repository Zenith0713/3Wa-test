let phrase = window.prompt("Saisissez une phrase ou un mot à inverser");
let phraseInverser = phrase.split("").reverse().join("");

console.log(phrase.split("")); //split permet de mettre la phrase en tableau lettre par lettre

console.log(phrase.split("").reverse()); //reverse permet d'inverser toute les éléments

console.log(phrase.split("").reverse().join("")); //join permet de remettre bout a bout toute les lettres en string

document.write(phraseInverser);