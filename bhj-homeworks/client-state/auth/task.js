window.addEventListener("load", () => {
    document.querySelector(".signin").classList.add("signin_active");
});

let button = document.querySelector(".btn");
button.addEventListener("click", sendForm);

function sendForm(elem) {
    // elem.preventDefault();
    let formSignin = document.querySelector("#signin__form");
    let formForSend = new FormData(formSignin);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formForSend);

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 & xhr.status == 200) {
            console.log(xhr.response)
        }
    })
    formSignin.reset();
}