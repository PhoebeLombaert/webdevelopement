const setup = () => {
    vraagOmGemeentes();
}

const vraagOmGemeentes = () =>{
    let stoppen = false;
    let gemeentes = [];

    while(!stoppen){
        let input = prompt("Geef een gemeente in: (typ stop in om te stoppen)");
        stoppen = (input == null || input.toLowerCase() === "stop");
        if(!stoppen){
            gemeentes.push(input);
        }

    }
    gemeentes.sort(compare);
    voegGemeentesToeAanLijst(gemeentes);
}

const compare = (a, b) =>{
    return a.localeCompare(b);
}

const voegGemeentesToeAanLijst = (gemeentes) =>{
    let lijst = document.getElementById("gemeentes");
    for(let i = 0; i < gemeentes.length; i++){
        const nieuweOptie = document.createElement("option");
        nieuweOptie.value = gemeentes[i];
        nieuweOptie.textContent = gemeentes[i];
        lijst.appendChild(nieuweOptie);
    }
}
window.addEventListener("load", setup);