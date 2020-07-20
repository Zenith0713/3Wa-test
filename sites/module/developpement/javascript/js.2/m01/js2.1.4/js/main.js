'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let images = [
    {
        src: 'img/slides/1.jpg',
        caption: 'legende associée'
    },
    {
        src: 'img/slides/2.jpg',
        caption: 'legende associée 2'
    },
    {
        src: 'img/slides/3.jpg',
        caption: 'legende associée 3'
    },
    {
        src: 'img/slides/4.jpg',
        caption: 'legende associée 4'
    },
    {
        src: 'img/slides/5.jpg',
        caption: 'legende associée 5'
    },
    {
        src: 'img/slides/6.jpg',
        caption: 'legende associée 6'
    },
];

let buttonNext = document.querySelector('#button-next');
let buttonPrev = document.querySelector('#button-prev');
let buttonPlayDiapo = document.querySelector('#button-playDiapo');
let buttonRandom = document.querySelector('#button-random');
let figure = document.querySelector('figure');
let index = 0;
let placeDerniereDiapo = images.length - 1;
let placePremiereDiapo = 0; 
let flecheDeDroite = 39;
let flecheDeGauche = 37;
let tempsEntreDiapo = 3000; //en milliseconde

let img = figure.querySelector('img');
//let img = array.from(figure.querySelectorAll('img');
let caption = figure.querySelector('figcaption');
let interval = "";
let dots = "";


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


function listePuce() {
    
    for (let i = 0; i <= placeDerniereDiapo; i++) {
        createPuce(i);
    }
}

function createPuce(i) {
    const dot = document.createElement('li');
    
    dot.classList.add('puce');
    
    // assigner l'index au data-index des lis
    
    // ajouter un data-index aux lis et lui assigner l'index comme valeur
    
    dot.setAttribute('data-index', i);
    
    document.querySelector('#dots').appendChild(dot);
}

function changeImage() {
    img.setAttribute('src', images[index].src);
    caption.innerText = images[index].caption;
}


function photoSuivante() {
    // Afficher prochain element de la liste
    index++;
    
    if (index > placeDerniereDiapo) {
        index = placePremiereDiapo;
    }
    
    changeImage();
    
    dots[index].classList.add("puceActive");
    
    if (index == placePremiereDiapo) {
       dots[placeDerniereDiapo].classList.remove("puceActive");
    }
    
    dots[index-1].classList.remove("puceActive");
    
    
}

function photoPrecedente() {
    index--;
    
    if (index < placePremiereDiapo) {
        index = placeDerniereDiapo;
    }
    
    changeImage();
    
    dots[index].classList.add("puceActive");
    
    if (index == placeDerniereDiapo) {
        dots[placePremiereDiapo].classList.remove("puceActive");
    } 
    
    dots[index+1].classList.remove("puceActive");
    

    
}


function stopChrono() {
    if (interval != '') {
        clearInterval(interval);
        interval = '';
    }
}

function startChrono() {
    console.log("click");
    
    interval = setInterval(() => {
        console.log("launch");
        photoSuivante(); 
    }, tempsEntreDiapo);
    
    //stopChrono();
}

function photoRandom() {
    index = getRandomInteger(placePremiereDiapo, placeDerniereDiapo);


    dots[index].classList.add("puceActive");
    changeImage();
    
}

function flecheGaucheImage() {
    if (event.keyCode === flecheDeGauche) {
        stopChrono();
        photoPrecedente();
    }
}

function flecheDroiteImage() {
    if (event.keyCode === flecheDeDroite) {
        photoSuivante();
    }
}

function flecheClavier() {              
    flecheDroiteImage();
    flecheGaucheImage();
}

function enlevePuce() {
    dots[index].classList.remove("puceActive");
}


function ajoutEventListener() {
    buttonNext.addEventListener('click', () => {
    // on passe a la photo suivante.
        stopChrono();
        photoSuivante();
    });
    
    buttonPrev.addEventListener('click', () => {
    // on passe a la photo suivante.
        stopChrono();
        photoPrecedente();
    });
    
    buttonPlayDiapo.addEventListener('click', () => {
        startChrono();
    });
    
    buttonRandom.addEventListener('click', () => {
        stopChrono();
        enlevePuce();
        photoRandom();
    });
    
    event.target.addEventListener('keydown', event => {
        stopChrono();
        flecheClavier();
    });
    
    
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    ajoutEventListener();
    
    listePuce();
    dots = Array.from(document.querySelectorAll('#dots li'));
   
        
    dots.forEach(dot => {
        
        dot.addEventListener('click', function() {
            dots[index].classList.remove("puceActive");
            index = this.getAttribute('data-index'); // ou this.dataset.index
            changeImage();
            dots[index].classList.add("puceActive");
            
        });
    });
    
    
    dots[0].classList.add("puceActive");
    
});

