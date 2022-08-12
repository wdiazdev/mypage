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