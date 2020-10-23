let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab__content");

tabs.forEach(tab => {
    tab.addEventListener("click", findIndex)
})

// находим индекс
function findIndex(elem) {
    let tab = elem.target;
    let arrayFromTabs = Array.from(tabs);
    let index = arrayFromTabs.indexOf(tab)
    closeContent();
    openContent(index);
}

// закрываем все активные
function closeContent() {
    tabs.forEach(tab => tab.classList.remove("tab_active"));
    tabContents.forEach(tab => tab.classList.remove("tab__content_active"));
}

// открываем нужный по индексу
function openContent(index) {
    tabs[index].classList.add("tab_active");
    tabContents[index].classList.add("tab__content_active");
}

