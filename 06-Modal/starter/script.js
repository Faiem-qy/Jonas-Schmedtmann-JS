'use strict';

const modal = document.querySelector('modal');
const overlay = document.querySelector('overlay');
const btnCLoseModal = document.querySelector('.closeModal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden'); //remove/add classes?
    overlay.classList.remove('hidden');?
  });
