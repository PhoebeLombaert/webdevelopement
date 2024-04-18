const setup = () => {
    let datumVandaag = new Date();
    let verjaardag = new Date(2005,0,27);

    const berekenLeeftijd = () => {

        datumVandaag = datumVandaag.getTime();
        verjaardag = verjaardag.getTime();
        let verschil = datumVandaag - verjaardag;
        let leeftijd = Math.floor(verschil / (1000*3600*24));
        return leeftijd;


    }

    console.log(berekenLeeftijd())
}
window.addEventListener("load", setup);