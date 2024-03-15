const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener('click', valideer);
}

const valideer = () =>{
    let fouten = 0

    fouten += valideerVoornaam();
    fouten += valideerAchternaam();
    fouten += valideerGeboortedatum();
    fouten += valideerEmail();
    fouten += valideerAantalKinderen();

    if(fouten === 0){
        alert("proficiat!");
    }

}
const valideerVoornaam = () =>{
    let txtVoornaam = document.getElementById("voornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();

    if(voornaam.length > 30){
        reportError(txtVoornaam, errVoornaam, "max. 30 karakters");
        return 1;
    }
    else{
        clearError(txtVoornaam, errVoornaam);
        return 0;
    }
}

const valideerAchternaam = () =>{
    let txtAchternaam = document.getElementById("familienaam");
    let errAchternaam = document.getElementById("errFamilienaam");
    let achternaam = txtAchternaam.value.trim();

    if(achternaam === ""){
        reportError(txtAchternaam, errAchternaam, "verplicht veld");
        return 1;
    }
    else if(achternaam.length > 50){
        reportError(txtAchternaam, errAchternaam, "max. 50 karakters");
        return 1;
    }
    else{
        clearError(txtAchternaam, errAchternaam);
        return 0;
    }
}

const valideerGeboortedatum = () =>{
    let txtGeboortedatum = document.getElementById("geboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();
    let [jaar, maand, dag] = geboortedatum.split("-");

    if(geboortedatum === ""){
        reportError(txtGeboortedatum, errGeboortedatum, "verplicht veld");
        return 1;
    }
    else if(!isGetal(jaar) || !isGetal(maand) || !isGetal(dag)){
        reportError(txtGeboortedatum, errGeboortedatum, "formaat is niet jjjj-mm-dd");
        return 1;
    }
    else if(jaar.length !== 4 || maand.length !== 2 || dag.length !== 2){
        reportError(txtGeboortedatum, errGeboortedatum, "formaat is niet jjjj-mm-dd");
        return 1;
    }
    else if(!geboortedatum.match(/^\d{4}-\d{2}-\d{2}$/)){
        reportError(txtGeboortedatum, errGeboortedatum, "formaat is niet jjjj-mm-dd");
        return 1;
    }
    else{
        clearError(txtGeboortedatum, errGeboortedatum);
        return 0;
    }
}

const valideerEmail = () =>{
    let txtEmail = document.getElementById("email");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if(email === ""){
        reportError(txtEmail, errEmail, "verplicht veld");
        return 1;
    }
    else if(email.indexOf("@") === -1){
        reportError(txtEmail, errEmail, "geen geldig email adres");
        return 1;
    }
    else if(!isEmailValid(email)){
        reportError(txtEmail, errEmail, "geen geldig email adres");
        return 1;
    }
    else{
        clearError(txtEmail, errEmail);
        return 0;
    }
}

const valideerAantalKinderen = () =>{
    let nummerAantalKinderen = document.getElementById("aantalKinderen");
    let errAantalKinderen = document.getElementById("errAantalKinderen");
    let aantalKinderen = parseInt(nummerAantalKinderen.value.trim());

    if(aantalKinderen < 0){
        reportError(nummerAantalKinderen, errAantalKinderen, "geen positief getal");
        return 1;
    }
    else if(aantalKinderen > 99){
        reportError(nummerAantalKinderen, errAantalKinderen, "is te vruchtbaar");
        return 1;
    }
    else{
        clearError(nummerAantalKinderen, errAantalKinderen);
        return 0;
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const isEmailValid = (email) =>{
    let emailRegex = /^.+\@.+\..+$/;
    return emailRegex.test(email);
}

const reportError = (element, errElement, message) =>{
    element.className="validatie";
    errElement.textContent = message;
}

const clearError = (element, errElement) =>{
    element.className="";
    errElement.innerHTML = "";
}


window.addEventListener("load", setup);