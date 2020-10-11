// Установка слушателей на все элементы класса .hole
let holeList = document.querySelectorAll(".hole");
for (i = 0; i < holeList.length; i++) {
    holeList[i].onclick = clicker;
}

// Поиск класса с кротом и подсчёт попаданий
let counterDeadMole = document.getElementById("dead");
let counterMisses = document.getElementById("lost");

function clicker(el) {
    if (el.target.classList.contains("hole_has-mole")) {
        counterDeadMole.textContent ++;
        if (counterDeadMole.textContent == "10") {
            alert ("Победа");
        }
    }   else {
        counterMisses.textContent ++;
        if (counterMisses.textContent == "10") {
            alert ("Поздравь крота");
        }
    }
}

