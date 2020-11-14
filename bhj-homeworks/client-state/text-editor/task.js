let textValue = document.querySelector("#editor");

textValue.addEventListener("input", element => localStorage.text = JSON.stringify(element.target.value));

window.addEventListener("load", getText);

function getText() {
    try {
        textValue.value = JSON.parse(localStorage.text);
    } catch(e) {
        return null;
    }
}

let button = document.querySelector(".clear__button");
button.addEventListener("click", ()=> {
    textValue.value = "";
    localStorage.clear();
})