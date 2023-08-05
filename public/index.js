// This is index.js

const h1 = document.getElementsByTagName("h1")[0]
h1.addEventListener("click", (event) => {
    event.target.style.color = "red"
})
h1.addEventListener("dblclick", (event) => {
    event.target.style.color = "blue"
})
h1.addEventListener("mouseleave", (event) => {
    event.target.style.color = "green"
})