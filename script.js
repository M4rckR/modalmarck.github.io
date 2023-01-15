'use strict';
const button = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const cerrar = document.querySelector('.close-modal');

const openModal = function() {
    for(let i = 0; i< button.length;i++) {
        button[i].addEventListener('click', () => {
            modal.classList.remove('hidden')
            overlay.classList.remove('hidden')
        })
    }
    
}

const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

if(modal.classList.contains('hidden')) {
    openModal();
}


cerrar.addEventListener('click', () => closeModal())
overlay.addEventListener('click', () => closeModal())
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        closeModal()
    }
})


