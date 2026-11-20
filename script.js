
document.addEventListener("DOMContentLoaded", function () {

    // Smooth navigation for all section links
    const links = document.querySelectorAll('nav a, .logo');

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigating to:", link.getAttribute("href"));
        });
    });

    console.log("Annabel Reyes Portfolio Loaded Successfully!");

});
