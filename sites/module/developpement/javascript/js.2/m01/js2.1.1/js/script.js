//Quand on clique sur le bouton toggle-rectangle, cela cache ou affiche le rectangle.
//Quand la souris se déplace à l'intérieur du rectangle il devient rouge; il reprend sa couleur originale quand la souris n'est plus dedans.
//Quand on double-clique sur le rectangle il devient vert.

//Lorsqu'on applique la classe good en plus au rectangle, il devient vert (limegreen).
//Lorsqu'on applique la classe important en plus au rectangle, il devient rouge (firebrick).
//Le changement de couleur du rectangle doit s'animer.


/**********************************************************************************************/
/**********************************************************************************************/
/*************************************** Variables ********************************************/
/**********************************************************************************************/
/**********************************************************************************************/

let button = document.getElementById("toggle-rectangle");
let div = document.querySelector("div");
let rectangle = document.querySelector(".rectangle");


/**********************************************************************************************/
/**********************************************************************************************/
/*************************************** Fonctions ********************************************/
/**********************************************************************************************/
/**********************************************************************************************/

function viewRect() {
    // transormer ce bloc en 2 lignes maximum
    rectangle.classList.toggle("rectangleOff");
}


function overRect() {
    rectangle.classList.toggle("important");
}


function doubleClick() {
    rectangle.classList.toggle("good");
}

function changeRectangle() {
    //Pour faire apparaitre et disparaitre le rectangle lorsqu'on click sur le bouton
    button.addEventListener("click", () => {
        viewRect('');
    });
    
    //Pour faire devenir le rectangle en rouge si on met notre souris dessus
    rectangle.addEventListener("mouseover", overRect);
    
    //Pour faire revenir la couleur par defaut du rectangle lorsque on enleve notre souris de dessus
    rectangle.addEventListener("mouseout", overRect);
    
    //Pour mettre le carrer en vert si on double click
    rectangle.addEventListener("dblclick", doubleClick);
}


/**********************************************************************************************/
/**********************************************************************************************/
/*********************************** Code Principal *******************************************/
/**********************************************************************************************/
/**********************************************************************************************/

changeRectangle();
