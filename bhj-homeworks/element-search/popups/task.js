// Делаем активным мини-окно
let modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

// Нажатие на "Сделать хорошо" возвращает "Хорошо сделано"
let modalSuccess = document.getElementById("modal_success");

let showSuccess = document.querySelector(".show-success");
showSuccess.onclick = () => {
    modalSuccess.classList.toggle("modal_active");
    modalMain.classList.remove("modal_active");
}

// Нажатие на крестик закрывает мини-окно
let modalClose = document.querySelectorAll(".modal__close_times");

modalClose.forEach(el => {
    el.onclick = DeleteModalActive;
})

function DeleteModalActive (el) {
    let modalActive = document.querySelectorAll(".modal_active");

    modalActive.forEach(element => {
        element.classList.remove("modal_active");
    })
}



