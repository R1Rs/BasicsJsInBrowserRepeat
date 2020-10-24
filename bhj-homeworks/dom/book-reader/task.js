//ставим слушатель на кнопки

let bookControls = document.querySelectorAll(".font-size");
bookControls.forEach(control => {
  control.addEventListener("click", changeSize);  
})

// определяем на какую кнопку нажал
function changeSize(el) {
    el.preventDefault();
    
    bookControls.forEach(control => control.classList.remove("font-size_active"));
    el.target.classList.add("font-size_active");

    changeContentSize(el.target.dataset.size) //передаем размер шрифта у кнопки
}

// меняем размер шрифта
function changeContentSize(size) {  // сопоставляем полученный размер шрифта
    let bookSize = document.querySelector(".book__content");
    bookSize.classList.remove("book_fs-big", "book_fs-small")
    if (size == "small") {
        bookSize.classList.add("book_fs-small")
    } else if (size == "big") {
        bookSize.classList.add("book_fs-big");
    }
}