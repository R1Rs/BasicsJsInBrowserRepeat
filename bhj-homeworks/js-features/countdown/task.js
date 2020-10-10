let time = document.getElementById("timer");
let timeNow = time.textContent;

function timeBack() {
    if (time.textContent == 0) {
        alert ("Вы победили в конкурсе");
        clearInterval(timer);
    }   else {
        time.textContent = timeNow --;
    }
}

let timer = setInterval(timeBack, 100);