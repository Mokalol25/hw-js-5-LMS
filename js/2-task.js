// const radioButton = document.querySelectorAll("input");
const form = document.querySelector("form");
// radioButton.addEventListener("change", (event) => {
//         document.body.style.backgroundColor = event.target.value
// })

form.addEventListener("click", (event) => {
    document.body.style.backgroundColor = event.target.value
})