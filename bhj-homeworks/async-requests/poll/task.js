// повышенная сложность с отображением результатов

// отправляем запрос
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.responseType = "json";
xhr.addEventListener("readystatechange", answer);

let title = document.querySelector(".poll__title");
let pollAnswer = document.querySelector(".poll__answers");

// при успешной отправке - добавляем кнопки с полученными в запросе значениями
function answer() {
    if (xhr.readyState == 4 & xhr.status == 200) {
        title.textContent = xhr.response.data.title;
        let answers = xhr.response.data.answers;
        let id = xhr.response.id;
        for (prop in answers) {
            pollAnswer.insertAdjacentHTML("afterbegin", `<button class="poll__answer">${answers[prop]}</button>`)
        }
        clickAnswer(id); // передаем id полученного запроса в функцию отправки голосования на сервер

    }
}

// передаем голосование на сервер
function clickAnswer(id) {
    let button = document.querySelectorAll(".poll__answer");
    let arrButton = Array.from(button);
    arrButton.forEach(elem => elem.addEventListener("click", ()=> {
        alert("Спасибо, ваш голос засчитан!")
        let answer = arrButton.indexOf(elem);
    
        // при клике на кнопку создаём отправку результата на сервер
        let xhr2 = new XMLHttpRequest();
        xhr2.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
        xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr2.send(`vote=${id}&answer=${answer}`) // указываем номер массива и выбранный вариант 
        xhr2.responseType = "json";
        xhr2.addEventListener("readystatechange", ()=> {
            if (xhr2.readyState == 4 & xhr2.status == 200) {
            let stat = xhr2.response.stat;   // получаем статистику по указанным данным
            pollAnswer.innerHTML = ""; // убираем все кнопки
            
            for (prop in stat) {      // перерисовываем страницу для отображения результатов
                pollAnswer.insertAdjacentHTML("afterbegin", `<div>${stat[prop].answer}: ${stat[prop].votes}</div>`)
            }
            }
        })
}));
}