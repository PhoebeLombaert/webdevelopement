const global = {
    AANTAL_KAARTEN: 6,
    IMG_PREFIX: "images/kaart",
    IMG_SUFFIX: ".png",
    KAARTEN: [],
    GEKOZEN: [],
    GEKOZEN_ID: []
};

const setup = () => {
    vulKaarten();
};

const vulKaarten = () => {
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        global.KAARTEN.push(`${global.IMG_PREFIX}${i}${global.IMG_SUFFIX}`, `${global.IMG_PREFIX}${i}${global.IMG_SUFFIX}`);
    }
    global.KAARTEN.sort(() => Math.random() - 0.5);
    vulGrid();
};

const vulGrid = () => {
    const grid = document.querySelector("#veld");
    global.KAARTEN.forEach((kaart, index) => {
        const kaartElement = document.createElement("img");
        kaartElement.setAttribute("src", "images/achterkant" + global.IMG_SUFFIX);
        kaartElement.setAttribute("data-id", index);
        kaartElement.addEventListener('click', draaiKaart);
        grid.appendChild(kaartElement);
    });
};

const draaiKaart = (event) => {
    const kaartId = event.target.getAttribute("data-id");
    global.GEKOZEN.push(global.KAARTEN[kaartId]);
    global.GEKOZEN_ID.push(kaartId);
    event.target.setAttribute("src", global.KAARTEN[kaartId]);
    if (global.GEKOZEN.length === 2) {
        setTimeout(checkMatch, 500);
    }
};

const checkMatch = () => {
    const [id1, id2] = global.GEKOZEN_ID;
    const cards = document.querySelectorAll("img");
    if (global.KAARTEN[id1] === global.KAARTEN[id2]) {
        [id1, id2].forEach(id => cards[id].removeEventListener("click", draaiKaart));
    } else {
        [id1, id2].forEach(id => cards[id].setAttribute("src", "images/achterkant" + global.IMG_SUFFIX));
    }
    global.GEKOZEN = [];
    global.GEKOZEN_ID = [];
};

window.addEventListener("load", setup);