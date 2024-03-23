const setup = () => {
    const liElementen = document.querySelectorAll("li");

    for (let i = 0; i < liElementen.length; i++){
        liElementen[i].setAttribute("class", "listitem");

    }

    const nieuweFoto = document.createElement("img");
    nieuweFoto.setAttribute("src", "./Images/capybara.jpg");
    nieuweFoto.setAttribute("class", "selfie");
    document.body.appendChild(nieuweFoto);
}
window.addEventListener("load", setup);