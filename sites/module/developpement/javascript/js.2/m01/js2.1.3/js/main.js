'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

let chrono = document.querySelector("#billboard span");
let boutton = document.getElementById("firing-button");
const cancelButton = document.querySelector('#cancel-button');
let tempsChrono = 10;
let img  = document.querySelector("#rocket");

const main = document.querySelector("main");
let starContainer = document.createElement("div");
starContainer.classList.add("stars");



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/


function reactionChrono(interval) {
    console.log(tempsChrono);
    chrono.innerText = tempsChrono;
    
    if (tempsChrono === 0) {
        img.setAttribute("src", "images/rocket3.gif");
        img.classList.add("tookOff");
        clearInterval(interval);
        return reactionChrono;
    }
    
    tempsChrono--;
}

function compteARebour() {
    boutton.classList.add("disabled");
    boutton.setAttribute('disabled', true);
    
    img.setAttribute("src", "images/rocket2.gif");
    
    let interval = setInterval( () => {
        reactionChrono(interval);
    }, 1000);
}


function launchChrono() {
    boutton.addEventListener("click", compteARebour);
}

function ajouteEtoile() {
    // choisir un nombre entre 0 et 2
    let nombre  = 0;
    
    for(let i = 0; i < 150; i++) {
        nombre  = randomNumber(0, 2);
        creerEtoile(nombre);
        
        starContainer.appendChild(creerEtoile(nombre));
        
        
    }
    
    main.appendChild(starContainer);
    
}

function creerEtoile(nombre) {
    
    let classes = ['tiny', 'normal', 'big'];
    
    let etoile = document.createElement('div');
   
    etoile.classList.add('star', classes[nombre]);
    
    etoile.style.left = randomNumber(0, window.innerWidth) + "px";
    etoile.style.top= randomNumber(0, window.innerHeight) + "px";
    
    return etoile;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function programme() {
    document.addEventListener('DOMContentLoaded', function() {
        ajouteEtoile();
    });

    launchChrono();
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/


programme();