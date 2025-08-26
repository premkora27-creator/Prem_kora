// 🚩 Page Fade-In on load
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

// 🚩 Page Fade-Out before leaving
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) { // only internal links
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const href = this.href;
                document.body.classList.remove("fade-in");
                setTimeout(() => {
                    window.location.href = href;
                }, 600); // match transition time
            });
        }
    });
});