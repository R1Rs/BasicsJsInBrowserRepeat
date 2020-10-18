// Ищем все ссылки и привязываем к ним событие по клику

let links = document.querySelectorAll(".menu__link");
links.forEach(element => {
    element.onclick = clickMenu;
});

// находим родителя у ссылки, затем проверяем есть ли у него вложенное меню и если есть, то делаем его активным и неактивным при повторном клике
function clickMenu(el) {
    let link = el.target;
    let linkParent = link.parentElement;
    let menuSub = linkParent.querySelectorAll(".menu_sub");
    if (menuSub.length > 0) {
        menuSub.forEach(element => {
            element.classList.toggle("menu_active");
        })
        return false;
    }
}

