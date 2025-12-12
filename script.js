// スクロールで fade-up 発火
const sections = document.querySelectorAll(".fade-up");

function fadeUpCheck() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", fadeUpCheck);
fadeUpCheck();