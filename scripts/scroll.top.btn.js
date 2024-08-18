document.addEventListener("scroll", function () {
    const button = document.getElementById("scrollTopBtn");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
