const setup = () => {
    const element = document.querySelector("p");
    element.removeChild(element.childNodes[0]);
    element.appendChild(document.createTextNode("Good Job!"));
}
window.addEventListener("load", setup);