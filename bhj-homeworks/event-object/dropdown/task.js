// находим все значения главного меню
let dropdownValueAll = document.querySelectorAll(".dropdown__value");

// устанавливаем для каждого слушатель
dropdownValueAll.forEach(elem => {
    elem.addEventListener("click", openList);
})

// обработчик, открывающий/закрывающий меню
function openList() {
    document.querySelector(".dropdown__list").classList.toggle("dropdown__list_active"); 
}

// находим каждый пункт меню и устанавливаем на него слушатель
let dropdownItem = document.querySelectorAll(".dropdown__item");
dropdownItem.forEach(item => item.addEventListener("click", itemClick));

// обработчик пунктов меню, меняющий текст главного меню и закрывающий список
function itemClick(el) {
    el.preventDefault();
    let textValue = el.target.textContent.trim();
    let dropdownValue = el.target.closest(".dropdown").querySelector(".dropdown__value");
    dropdownValue.textContent = textValue;
    openList();
}