// ★ ローディング（1秒後に消える）
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
    }, 1000);
});

// ★ フェードイン（スマホでも確実に動く）
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-section").forEach(el => {
        observer.observe(el);
    });
});