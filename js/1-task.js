let openModal = document.querySelector('[show-modal]');

const jsBackdrop = document.querySelector('.backdrop');

openModal.addEventListener('click', toggleModel)
function toggleModel () {
    jsBackdrop.classList.toggle('is-hidden')
}

const closeModal = document.querySelector(".button-close");

openModal.addEventListener('click', toggleModel)