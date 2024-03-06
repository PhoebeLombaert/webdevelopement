const setup = () => {
        let btnBerekenIndexOf = document.getElementById("btnBerekenIndexOf");
        btnBerekenIndexOf.addEventListener('click', berekenIndexOf);
        let btnBerekenLastIndexOf = document.getElementById("btnBerekenLastIndexOf");
        btnBerekenLastIndexOf.addEventListener('click', berekenLastIndexOf);
}

const berekenIndexOf = () =>     {
    let tekst = document.getElementById("txtInput").innerText;
    let uitvoerIndexOf = document.getElementById("totaalIndexOf");
    let totaal = 0;
    let index = 0;

    while(tekst.indexOf('an', index) !== -1){
        index = tekst.indexOf('an', index) + 1;
        totaal++;
    }
    uitvoerIndexOf.innerText = totaal.toString();

}


const berekenLastIndexOf = () =>     {

    let tekst = document.getElementById("txtInput").innerText;
    let uitvoerLastIndexOf = document.getElementById("totaalLastIndexOf");
    let index = tekst.length;
    let count = 0;

    while(tekst.lastIndexOf('an', index) !== -1){
        index = tekst.lastIndexOf('an', index) - 1;
        count++;
    }

    uitvoerLastIndexOf.innerText = count.toString();

}


window.addEventListener("load", setup);