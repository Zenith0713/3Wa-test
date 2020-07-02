

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

// let images = Array.from(document.querySelectorAll("img")); // NodeList

let image = Array.from(document.querySelectorAll("#photo-list img")); ; // NodeList
let nombrePhotoSelect = document.getElementById("nombrePhotoSelect");
let a = 0;

// la boucle special tableau :) for each ?

for (let element of image) {
    element.addEventListener("click", function() {
        element.classList.toggle("selected");
        if (element.classList.contains("selected")) {
            a = a + 1;
        }
        
        else if (!element.classList.contains("selected")) {
            a = a - 1;
        }
        nombrePhotoSelect.innerText = a;
    });
}


// A transformer en tableau // 
// faire une boucle et ajouter les event sur chaque image
// Sur quel element je veux ajouter un event
// image -> quel type d'element ??


