/*

const themeButton = document.getElementById("theme-button");
const body = document.querySelector("body");
const imgButton = document.querySelector(".img-button")

themeButton.addEventListener("click", () => {
    const darkModeActive = body.classList.contains("dark-mode");
    if (darkModeActive) {
        body.classList.remove("dark-mode");
        imgButton.setAttribute("src", "./src/img/sun.png");
    } else {
        body.classList.add("dark-mode");
        imgButton.setAttribute("src", "./src/img/moon.png");
    }
});

*/

const themeButton = document.getElementById("theme-button");
const body = document.querySelector("body");
const imgButton = document.querySelector(".img-button")

themeButton.addEventListener("click", () => {
    const darkModeActive = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode")

    if (darkModeActive) {
        imgButton.setAttribute("src", "./src/img/sun.png");
    } else {
        imgButton.setAttribute("src", "./src/img/moon.png");
    }
});