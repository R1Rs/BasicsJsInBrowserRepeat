let img = document.querySelector(".clicker__cookie");
let sumClick = document.querySelector("span").innerText;

function clicker() {
    sumClick ++;
    document.querySelector("span").innerText = sumClick;
    img.width == 200 ? img.width = 150 : img.width = 200;
}

img.onclick = clicker;

