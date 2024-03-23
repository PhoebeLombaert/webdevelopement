const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("input", update)
    }

    const btnSaveColor = document.getElementById("btnSaveColor");
    btnSaveColor.addEventListener("click", MakeColorSquare);

    update();
}

const update = () => {
    const colorBox = document.getElementById("txtViewColor");
    const sliders = document.getElementsByClassName("slider");
    const labels = document.getElementsByClassName("label");

    let value = [];
    for(let i = 0; i < sliders.length; i++){
        labels[i].innerHTML = (sliders[i].value * 2.55).toFixed(0);
    }
    colorBox.style.backgroundColor = "rgb(" + (sliders[0].value * 2.55) + ", " + (sliders[1].value * 2.55) + ", " + (sliders[2].value * 2.55) + ")";
}

const MakeColorSquare = () =>{
    const sliders = document.getElementsByClassName("slider");
    const ValueRed = sliders[0].value * 2.55;
    const ValueGreen = sliders[1].value * 2.55;
    const ValueBlue = sliders[2].value * 2.55;

    let divElement = document.createElement("div");
    divElement.classList.add("colorbox")
    divElement.addEventListener('click', updateColor);
    divElement.setAttribute("data-red", ValueRed.toString());
    divElement.setAttribute("data-green", ValueGreen.toString());
    divElement.setAttribute("data-blue", ValueBlue.toString());
    divElement.style.backgroundColor = "rgb(" + ValueRed + ", " + ValueGreen + ", " + ValueBlue + ")";
    divElement.style.width = "100px";
    divElement.style.height = "100px";
    divElement.style.display = "inline-block";
    divElement.style.marginLeft = "15px"

    let btnElement = document.createElement("button");
    btnElement.addEventListener('click', deleteColor);
    let btnTekstNode = document.createTextNode("X");
    divElement.appendChild(btnElement);
    btnElement.appendChild(btnTekstNode);

    document.querySelector("#colorsSaved").appendChild(divElement);
}

const updateColor = (event) => {
    const colorBox = document.getElementById("txtViewColor");
    const sliders = document.getElementsByClassName("slider");
    const labels = document.getElementsByClassName("label");

    const ValueRed = event.target.getAttribute("data-red");
    const ValueGreen = event.target.getAttribute("data-green");
    const ValueBlue = event.target.getAttribute("data-blue");

    for(let i = 0; i < sliders.length; i++){
        labels[i].removeChild(labels[I].childNodes[0]);
    }

    labels[0].appendChild(document.createTextNode(Math.round(ValueRed)));
    labels[1].appendChild(document.createTextNode(Math.round(ValueGreen)));
    labels[2].appendChild(document.createTextNode(Math.round(ValueBlue)));

    sliders[0].value = ValueRed / 2.55;
    sliders[1].value = ValueGreen / 2.55;
    sliders[2].value = ValueBlue / 2.55;

    colorBox.style.backgroundColor = "rgb(" + ValueRed + ", " + ValueGreen + ", " + ValueBlue + ")";

}

const deleteColor = (event) => {
    event.target.parentElement.remove();
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);