const setup = () => {
    window.addEventListener('load', (event) => {
        document.getElementById('element').focus();
    });
}
window.addEventListener("load", setup);