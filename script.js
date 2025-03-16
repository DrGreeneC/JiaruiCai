document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".contentnavbar");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show-menu");
    });

    // Highlight the current page in navigation
    const links = document.querySelectorAll(".contentnavbar a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
