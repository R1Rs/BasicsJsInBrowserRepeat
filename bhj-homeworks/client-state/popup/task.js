let modal = document.querySelector(".modal");
let modalClose = document.querySelector(".modal__close");

window.addEventListener("load", () => {
    if (document.cookie.length == "0") { // если кук нет, то показываем окно и записываем куку
    modal.classList.add("modal_active");
    document.cookie = "client=true; expires=Tue, 19 Jan 2038 03:14:07 GMT"; // ставим срок жизни, иначе при закрытии браузера кука удалится
}
}
);
modalClose.addEventListener("click", () => modal.classList.remove("modal_active"));
