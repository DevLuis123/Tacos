'use strict';
const modal = document.querySelector('.modal');
const button = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModal = document .querySelectorAll('.show-modal');

const remove = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modale = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', remove);
}
button.addEventListener('click',  modale);
overlay.addEventListener('click', modale );