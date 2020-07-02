'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function lancerDeDes(nbrDes, nbrFaces) { //dans utilities
    let resultat = 0;
    let min = 1;
    for(let i = 0; i < nbrDes; i++) {
        resultat += parseInt(getNumberBetween(min, nbrFaces));
    }
    return resultat;
}

function getNumberBetween(min, max) { //dans utilities
    return Math.floor(Math.random() * (max - min + 1)) + min;
}