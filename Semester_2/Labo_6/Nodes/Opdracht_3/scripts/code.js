const setup = () => {
    document.querySelector("#myDIV").addEventListener("click", VoegTekstToeAanNode)
}

const VoegTekstToeAanNode = (event) => {
    const nieuw_p_element = document.createElement("p");
    nieuw_p_element.appendChild(document.createTextNode("Some text!"));
    event.target.appendChild(nieuw_p_element);
}
window.addEventListener("load", setup);