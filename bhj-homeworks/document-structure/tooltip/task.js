let hasTooltip = document.querySelectorAll(".has-tooltip");
hasTooltip.forEach(el => el.addEventListener("click", openTitle));

let status = true;
let elementPositionLeft;
let elementPositionTop;
let element;

function openTitle(el) {
    el.preventDefault();
    element = el.target;
    if (element.lastElementChild) {
        element.removeChild(element.childNodes[1]);
        status = false;
        return;
    }
    elementPositionLeft = element.getBoundingClientRect().left;
    elementPositionTop = element.getBoundingClientRect().top + element.getBoundingClientRect().height;
    element.insertAdjacentHTML("beforeEnd",`<div class="tooltip tooltip_active" style="left: ${elementPositionLeft}px; top: ${elementPositionTop}px">${element.title}</div>`);

    scrollTitle(); 
}
 

function scrollTitle() {

    if (status == false) {
        window.removeEventListener("scroll", scroll)
        return;
    };
    window.addEventListener("scroll", scroll);

   function scroll() {
    elementPositionLeft = element.getBoundingClientRect().left;
    elementPositionTop = element.getBoundingClientRect().top + element.getBoundingClientRect().height;
    element.childNodes[1].style.top = elementPositionTop + "px";
}}