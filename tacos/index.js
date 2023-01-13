'use strict';
const modal = document.querySelector('.modal');
const button = document.querySelector('.show-modal');
const overlay = document.querySelector('.overlay');

const remove = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

button.addEventListener('click', remove);
