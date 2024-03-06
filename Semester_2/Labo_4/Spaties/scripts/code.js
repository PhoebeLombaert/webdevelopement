const setup = () =>     {
    btnConverteer.addEventListener('click',verander )
}
btnConverteer = document.getElementById("converterenBtn");
const verander = () =>     {
    let woord = document.getElementById("input").value;
    let output = document.getElementById("txtOutput");
    let result = "";

    for(let i = 0; i < woord.length; i++){
        result += woord.charAt(i) + " ";
    }

    return output.textContent = result;
}
window.addEventListener("load", setup);