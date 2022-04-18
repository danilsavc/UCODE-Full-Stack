function transformation() {
    let lab = document.getElementById("lab");
    let hero = document.getElementById("hero");

    if (hero.innerText === "Bruce Banner") {
        hero.innerText =  "Hulk";
        hero.style.fontSize = "130px";
        hero.style.letterSpacing = "6px"; 
        lab.style.background = "#70964b";
    }
    else {
        hero.innerText = "Bruce Banner";
        lab.style.background = "#ffb300";
        hero.style.fontSize = "60px";
        hero.style.letterSpacing = "2px"; 
    }
}