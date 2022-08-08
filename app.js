const toTop = document.getElementById("to-top");


window.onscroll = function () {
    if (window.scrollY >= 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
}
