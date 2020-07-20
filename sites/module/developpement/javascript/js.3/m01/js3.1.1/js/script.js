/*******************************************************************************/
/*******************************************************************************/
/******************************* Exportations **********************************/
/*******************************************************************************/
/*******************************************************************************/

import {
    addToLocalstorage,
    removeFromLocaStorage,
    getItemFromLocalStorage,
    storageKey,
} from "./help.js";


/*******************************************************************************/
/*******************************************************************************/
/******************************* Variables *************************************/
/*******************************************************************************/
/*******************************************************************************/


let formContact = document.querySelector(".formContact");
let formDeleteOne = document.querySelector(".formDeleteOne");
let formContactDisplayButton = document.querySelector(".formDisplayButton");
let clearContactButton = document.querySelector(".clearContactButton");
let deleteOneContactButton = document.querySelector(".deleteOneContactButton");
const contacts = envoieForm();




/*******************************************************************************/
/*******************************************************************************/
/***************************** Fonctions ***************************************/
/*******************************************************************************/
/*******************************************************************************/

function displayFormContact() {
    formContactDisplayButton.addEventListener("click", () => {
       formContact.classList.toggle("formActive"); 
    });
} 

function clearContacts() {
    clearContactButton.addEventListener("click", () => {
       localStorage.removeItem("contacts");
    });
}


function actionClick() {
    displayFormContact();
    clearContacts();
}

function deleteOneContact() {
    checkboxSelect();
    
}

function checkboxSelect() {
    let checkboxes = document.querySelectorAll(".check");
    
    
    checkboxes.forEach.call(checkboxes, (checking, index) =>  {
        
        checking.addEventListener('click', () => {
            let valueIndex = checking.parentNode.getAttribute("data-index");
            
            contacts.splice(valueIndex, 1);
            
            addToLocalstorage(storageKey, contacts);
            
            
        });
    });
}

function affichage() {
    const div = document.createElement("div");
   
    contacts.forEach((contact, index) => {
      const ul = document.createElement("ul");
      
      ul.setAttribute("data-index", index);
      
      ul.innerHTML = `<li>${contact.name}</li><li>${contact.email}</li><li>${contact.phone}</li> <input type="checkbox" class="check" name="checkbox" >`;
      
      
      
      div.appendChild(ul);
     
     
      
      
   });
   
   document.querySelector(".containers").appendChild(div);
}

function envoieForm() {
    formContact.addEventListener("submit", function(event) {
        //event.preventDefault();
        
        const name = this.querySelector("input[name=userName]").value;
        const email = this.querySelector("input[name=userMail]").value;
        const phone = this.querySelector("input[name=userPhone]").value;
        
        const contact  = {
            name,
            email,
            phone
        };
        
        const contacts = getItemFromLocalStorage(storageKey);
        
        contacts.push(contact);
        
        addToLocalstorage(storageKey, contacts);
        
        
       
    }); 
    
    const contacts = getItemFromLocalStorage(storageKey);
    return contacts;
    
}

function executionCodePrincipal() {
    
    actionClick();
    
    
    
    affichage();
    deleteOneContact();
}


/*******************************************************************************/
/*******************************************************************************/
/**************************** Code Principal ***********************************/
/*******************************************************************************/
/*******************************************************************************/

executionCodePrincipal();