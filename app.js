const top20 = document.getElementById("top20");
const welcomeTo = document.querySelector("#welcome-to");
let lastScrollY = window.scrollY;


// Function to hide welcome-to 
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        welcomeTo.classList.add("welcome-to-hidden");
    } else {
        welcomeTo.classList.remove("welcome-to-hidden");
    }
    lastScrollY = window.scrollY;
});

// To top button

const toTop = document.getElementById("to-top");

window.onscroll = function () {
    if (window.scrollY >= 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
}