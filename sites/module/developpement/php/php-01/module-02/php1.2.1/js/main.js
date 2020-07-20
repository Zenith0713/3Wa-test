let checkboxes = document.querySelectorAll(".check");

checkboxes.forEach.call(checkboxes,  checking =>  {
    checking.addEventListener('click', () => {
        checking.parentElement.classList.remove("textBarre");
        if(checking.checked) {
            checking.parentElement.classList.add("textBarre");
        }    
    });
    
});
