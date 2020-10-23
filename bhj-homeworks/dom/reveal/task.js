let reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", activatedReveal);

function activatedReveal() {
    reveals.forEach(reveal => {
        if (reveal.getBoundingClientRect().top > 0 & reveal.getBoundingClientRect().top < window.innerHeight) {
            reveal.classList.add("reveal_active");
        }   else {
            reveal.classList.remove("reveal_active");
        }
    })
}