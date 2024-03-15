const setup = () => {
    let btnConverteer = document.getElementById("btnConverteer");
    btnConverteer.addEventListener('click', zetOm)
}

const zetOm = () =>     {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    const woorden = input.split(" ")
    for(let i = 0; i < woorden.length; i++){
        if(woorden[i] === "de"){
            woorden[i] = "het";
        }
        else if(woorden[i] === "De"){
            woorden[i] = "Het";
        }
    }
    return output.textContent = woorden.join(" ");
}
window.addEventListener("load", setup);