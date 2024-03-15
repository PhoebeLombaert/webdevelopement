const setup = () => {
    const btnResultaat = document.getElementById("toonResultaat");
    btnResultaat.addEventListener('click', toonResultaat)
}

const toonResultaat = () =>{
    const Roker = document.getElementById("roker");
    const moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    const buurland = document.getElementById("lijst");
    const bestelling = document.getElementById("Bestelling");

    let isRoker = document.getElementById("resultaatRoker");
    let welkeMoedertaal = document.getElementById("resultaatMoedertaal");
    let welkBuurland = document.getElementById("resultaatBuurland");
    let welkeBestelling = document.getElementById("resultaatBestelling");

    isRoker.textContent = ("is " + (Roker.checked ? "een roker" : "geen roker"));
    welkeMoedertaal.textContent = ("moedertaal is " + moedertaal.value);
    welkBuurland.textContent = ("favoriete buurland is " + buurland.value);
    welkeBestelling.textContent = ("De bestelling bestaat uit " + HaalGeselecteerdeWaardenOp(bestelling));

}

const HaalGeselecteerdeWaardenOp = (select) =>{
    let resultaat = [];
    let opties = select && select.options;
    let opt;

    for(let i = 0; i < opties.length; i++){
        opt = opties[i];
        if(opt.selected){
            resultaat.push(opt.value || opt.text);
        }
    }
    return resultaat.join(" ");
}
window.addEventListener("load", setup);