const input = document.querySelector("#valudation-input");
console.log(input)
input.addEventListener("blur", (event) => {
    console.log(input.getAttribute("data-lenght"))
    if(input.value.length <= input.getAttribute("data-lenght")) {
        // input.classList.add("valid")
        // input.classList.remove("invalid")
        input.style.border = "3px solid #4caf50"
    }
    else {
        // input.classList.add("invalid")
        // input.classList.remove("valid")
        input.style.border = "3px solid #f44336"
    }
})