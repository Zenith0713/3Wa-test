function motRandomCouleur() {
    //on met les mots du text dans une liste
    let p = document.querySelector("p").textContent;
    let text = p.split(" ");
    let random = Math.floor(text.length * Math.random());
    let commencer =  document.getElementById("1button");
    let arreter = document.getElementById("2button");
    let stop = "";
    let a = 0;
    
    function click() {
     
        while(stop) {
            if (commencer.addEventListener("click")) {
                document.write(a);
            
                a=a+1;
            }
            
            else if (arreter.addEventListener("click")) {
                break;
            }
        }
    }
    
    setInterval(click(), 10000);
    
    
    
    console.log(text);
    console.log(random);
}


motRandomCouleur();