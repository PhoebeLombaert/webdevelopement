let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: 0
};


const setup = () => {
    let playfield = document.getElementById("playField");
    playfield.addEventListener('click', moveImage);
    playfield.addEventListener('click', changeImage);
    let image = document.getElementById("target");
    image.addEventListener('click', updateScore);
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener('click', startGame);

};


const moveImage = () =>{
    let image = document.getElementById("target");
    let playfield = document.getElementById("playField");
    let maxLeft = playfield.clientWidth - global.IMAGE_SIZE;
    let maxHeight = playfield.clientHeight - global.IMAGE_SIZE;

    let left = Math.floor(Math.random()*maxLeft);
    let top = Math.floor(Math.random()*maxHeight);
    image.style.left=left+"px";
    image.style.top=top+"px";

}

const changeImage = () =>{
    let target = document.getElementById("target")
    let randomIndex = Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX;
    let newImage = global.IMAGE_PATH_PREFIX + randomIndex;
    target.src = newImage;

    if(newImage === global.IMAGE_PATH_PREFIX + "0.png"){
        target.addEventListener('click', showAlert);
    }
    else{
        target.removeEventListener('click', showAlert);
    }

}

const updateScore = () =>{
    let output = document.getElementById("output");
    let image = document.getElementById("target");
    if (image.src.includes("0.png")) {
        global.score--;
    } else {
        global.score++;
    }
    output.textContent = "Aantal hits " + global.score;
}

const showAlert = () => {
    window.alert("GAME OVER");
    global.score = 0;
}

const logMessage = () =>{
    console.log("bericht")
}

const startGame = () =>{
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(changeImage, 1000);
    setInterval(logMessage, 1000);
}





window.addEventListener("load", setup);


