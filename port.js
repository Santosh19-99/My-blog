// const changeText = document.querySelector("button");
// changeText.onclick = helloText

// function helloText(){
// changeText.innerText = "Try Again"
// }

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

