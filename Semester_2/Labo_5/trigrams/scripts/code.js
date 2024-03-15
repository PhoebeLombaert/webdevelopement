const setup = () => {
    let btnTrigram = document.getElementById("btnTrigram");
    btnTrigram.addEventListener('click', zoekTrigrams);
}

const zoekTrigrams = () => {
    let input = document.getElementById("trigram").value;
    let output = document.getElementById("output");
    let trigrams = [];
    for (let i = 0; i < input.length - 2; i++) {
        const trigram = input.slice(i, i + 3);
        trigrams.push(trigram);
    }
    return output.textContent = trigrams.join(" ");
}

window.addEventListener("load", setup);