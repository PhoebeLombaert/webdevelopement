const setup = () => {
    const redSlider = document.getElementById("rood");
    const greenSlider = document.getElementById("groen");
    const blueSlider = document.getElementById("blauw");
    const colorBox = document.querySelector(".kleurBlok");
    const saveButton = document.getElementById("btnSave");

    saveButton.addEventListener('click', KleurOpslaan);

    redSlider.addEventListener("input", updateKleur);
    greenSlider.addEventListener("input", updateKleur);
    blueSlider.addEventListener("input", updateKleur);

    updateKleur();

    // Kleuren uit localStorage herstellen
    kleurenUitStorageTonen();
}

const updateKleur = () => {
    const redSlider = document.getElementById("rood");
    const greenSlider = document.getElementById("groen");
    const blueSlider = document.getElementById("blauw");
    const redValue = document.getElementById("rodeValue");
    const greenValue = document.getElementById("groeneValue");
    const blueValue = document.getElementById("blauweValue");
    const colorBox = document.querySelector(".kleurBlok");

    redValue.textContent = redSlider.value;
    greenValue.textContent = greenSlider.value;
    blueValue.textContent = blueSlider.value;

    colorBox.style.backgroundColor = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
}


const KleurOpslaan = () =>{
    const redValue = document.getElementById("rood").value;
    const greenValue = document.getElementById("groen").value;
    const blueValue = document.getElementById("blauw").value;

    // Kleuren opslaan in localStorage
    const kleurenInStorage = JSON.parse(localStorage.getItem("kleurenInStorage")) || [];
    kleurenInStorage.push({rood: redValue, groen: greenValue, blauw: blueValue});
    localStorage.setItem("kleurenInStorage", JSON.stringify(kleurenInStorage));

    // Kleur toevoegen aan lijst
    voegKleurToeAanStorage(redValue, greenValue, blueValue);
}

const voegKleurToeAanStorage = (rood, groen, blauw) => {
    const colorBox = document.createElement('div');
    const deleteButton = document.createElement('button');
    const savedColors = document.getElementById("opgeslaanKleur");

    colorBox.style.backgroundColor = `rgb(${rood},${groen},${blauw})`;
    colorBox.classList.add("blok");

    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => {
        colorBox.remove();
        verwijderKleurUitStorage(rood, groen, blauw)
    });

    colorBox.addEventListener("click", () => {
        document.querySelector(".kleurBlok").style.backgroundColor = colorBox.style.backgroundColor;
        // Sliders bijwerken met geselecteerde kleur
        updateSliders(rood, groen, blauw);
    });

    colorBox.appendChild(deleteButton);
    savedColors.appendChild(colorBox);
}

const updateSliders = (rood, groen, blauw) => {
    const redSlider = document.getElementById("rood");
    const greenSlider = document.getElementById("groen");
    const blueSlider = document.getElementById("blauw");

    redSlider.value = rood;
    greenSlider.value = groen;
    blueSlider.value = blauw;

    updateKleur();
}

const kleurenUitStorageTonen = () => {
    const kleurenInStorage = JSON.parse(localStorage.getItem("kleurenInStorage")) || [];

    kleurenInStorage.forEach((kleur) => {
        voegKleurToeAanStorage(kleur.rood, kleur.groen, kleur.blauw);
    })
}

const verwijderKleurUitStorage = (rood, groen, blauw) => {
    const kleurenInStorage = JSON.parse(localStorage.getItem("kleurenInStorage")) || [];

    const index = kleurenInStorage.findIndex(kleur => kleur.rood === rood && kleur.groen === groen && kleur.blauw === blauw);
    if (index !== -1) {
        kleurenInStorage.splice(index, 1);
        localStorage.setItem("kleurenInStorage", JSON.stringify(kleurenInStorage));
    }
}

// Dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
