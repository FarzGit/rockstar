// script.js
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function() {
    var currentScrollPos = window.pageYOffset;
    var backToTopButton = document.getElementById("backToTopButton");
    
    if (prevScrollpos > currentScrollPos) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
    
    prevScrollpos = currentScrollPos;
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
