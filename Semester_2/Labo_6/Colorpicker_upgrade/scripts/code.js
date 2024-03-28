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

    const colorBox = document.createElement('div');
    const deleteButton = document.createElement('button');
    const savedColors = document.getElementById("opgeslaanKleur");

    colorBox.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
    colorBox.classList.add("blok");

    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => {
        colorBox.remove();
    });

    colorBox.addEventListener("click", () => {
        document.querySelector(".kleurBlok").style.backgroundColor = colorBox.style.backgroundColor;
    });

    colorBox.appendChild(deleteButton);
    savedColors.appendChild(colorBox);
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);