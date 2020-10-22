let sliderNext = document.querySelector(".slider__arrow_next");
let sliderPrev = document.querySelector(".slider__arrow_prev");

let sliders = document.querySelectorAll(".slider__item");
let arrayFromSliders = Array.from(sliders);

sliderNext.onclick = sliderGoNext;
sliderPrev.onclick = sliderGoPrev;

let indexActiveSlider = 0;

function changeActiveSlider() {
    let activeSlider = arrayFromSliders.find(activeItem => activeItem.classList.contains("slider__item_active"));
    indexActiveSlider = arrayFromSliders.indexOf(activeSlider);
    activeSlider.classList.remove("slider__item_active");
}

function sliderGoNext() {
    changeActiveSlider();
    indexActiveSlider ++;
    
    if (indexActiveSlider == arrayFromSliders.length) {
        indexActiveSlider = 0;
    }
    arrayFromSliders[indexActiveSlider].classList.add("slider__item_active");
}

function sliderGoPrev() {
    changeActiveSlider();
    indexActiveSlider --;

    if (indexActiveSlider < 0) {
        indexActiveSlider = arrayFromSliders.length - 1;
    }
    arrayFromSliders[indexActiveSlider].classList.add("slider__item_active");
}


