// const changeText = document.querySelector("button");
// changeText.onclick = helloText

// function helloText(){
// changeText.innerText = "Try Again"
// }

const toggleBtn = document.querySelector(".toggle-button");
const dropdown = document.querySelector(".dropdown");

toggleBtn.addEventListener("click", ()=>{
    dropdown.classList.toggle('top-16');
})