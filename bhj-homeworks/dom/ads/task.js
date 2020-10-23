function GenerateRandom() {
    let rotators = document.querySelectorAll(".rotator__case");
    rotators.forEach(rotator => rotator.classList.remove("rotator__case_active"));

    randomIndex = Math.floor(Math.random() * rotators.length);
    rotators[randomIndex].classList.add("rotator__case_active");
}

setInterval(GenerateRandom, 1000);

