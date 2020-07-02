const form = document.querySelector("form");

function convertFarToCel(farenheit) {
    const celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const input = this.querySelector("input");
    
    const far = input.value;
    
    const celsius = convertFarToCel(far);
    
    const p = this.nextElementSibling;
    
    p.style.display = "inline-block";
    
    p.innerText = far + " en farenheit est egal a " + celsius + " en celsius"; 
});