window.addEventListener("load", init);

let button = document.querySelector(".btn");
let signIn = document.querySelector(".signin");
let welcome = document.querySelector(".welcome");
let userSpan = document.querySelector("#user_id");

button.addEventListener("click", sendForm);

function sendForm(elem) {
    elem.preventDefault();
    let formSignin = document.querySelector("#signin__form");
    let formForSend = new FormData(formSignin);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            answerServer(xhr.response);
        } else if (xhr.status !=200) {
            alert("Не удалось связаться с сервером");
        }
    })
    xhr.send(formForSend);
    formSignin.reset();
}

function answerServer(answer) {
    let answerStatus = JSON.parse(answer).success;
        if (answerStatus) {
        let user = JSON.parse(answer).user_id;
        userSpan.textContent = user;
        document.querySelector(".signin").classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        localStorage.user = user;
    } else {
        alert ("Неверные логин/пароль");
    }
}

function memoryUser(user) {
    if (localStorage.user) {
        welcome.classList.add("welcome_active");
        userSpan.textContent = localStorage.user;
    } else {
        showForm();
    }
}

function showForm() {
    signIn.classList.add("signin_active");
}

function init() {
    memoryUser();
}