let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    if (selectedIndex === -1) {
        // Nieuwe persoon toevoegen
        const nieuwePersoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            achternaam: document.getElementById("txtFamilienaam").value,
            geboorteDatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value
        };
        personen.push(nieuwePersoon);
    } else {
        // Bestaande persoon bewerken
        personen[selectedIndex].voornaam = document.getElementById("txtVoornaam").value;
        personen[selectedIndex].achternaam = document.getElementById("txtFamilienaam").value;
        personen[selectedIndex].geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        personen[selectedIndex].email = document.getElementById("txtEmail").value;
        personen[selectedIndex].aantalKinderen = document.getElementById("txtAantalKinderen").value;
    }

    updateLijstPersonen();
    resetFormulier();
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    resetFormulier();
};

const resetFormulier = () =>{
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
}

const updateLijstPersonen = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    const nieuweOptie = document.createElement("option");
    nieuweOptie.value = (personen.length - 1).toString();
    nieuweOptie.textContent = personen[personen.length - 1].voornaam + " " + personen[personen.length - 1].achternaam;
    lstPersonen.appendChild(nieuweOptie);
};

const toonGeselecteerdePersoon = () => {
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    if (selectedIndex !== -1) {
        const geselecteerdePersoon = personen[selectedIndex];
        document.getElementById("txtVoornaam").value = geselecteerdePersoon.voornaam;
        document.getElementById("txtFamilienaam").value = geselecteerdePersoon.achternaam;
        document.getElementById("txtGeboorteDatum").value = geselecteerdePersoon.geboorteDatum;
        document.getElementById("txtEmail").value = geselecteerdePersoon.email;
        document.getElementById("txtAantalKinderen").value = geselecteerdePersoon.aantalKinderen;
    }
};

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    lstPersonen.addEventListener("change", toonGeselecteerdePersoon);
    // moet de data van die persoon getoond worden in het formulier
    updateLijstPersonen();
};

window.addEventListener("load", setup);
