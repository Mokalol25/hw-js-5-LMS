let openModal = document.querySelector('.button');

const jsBackdrop = document.querySelector('.backdrop');

openModal.addEventListener('click', toggleModel)
function toggleModel () {
    jsBackdrop.classList.toggle('is-hidden')
}

const closeModal = document.querySelector(".button-close");
closeModal.addEventListener('click', toggleModel)