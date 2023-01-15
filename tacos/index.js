'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const button = document.querySelector('.close-modal');

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

button.addEventListener('click', modale);

overlay.addEventListener('click', modale);

//KEYS
//Key down is fired as soon as we just press down the key
//key up only happens when we lift or finger off the keyboard
// key press is fired continuosly as we keep our finger on a certain key

//Con el evento keydown esperamos un argumento en la funcion
//la cual viene siendo la tecla que presionemos y condicionamos a la tecla que queremos
//en este la tecla esc y verificar si la clase hidden esta o no en la clase modal sino se la añadmimos  con la funcion hecha

document.addEventListener('keydown', function (e) {
  console.log(e.key); //para ver que el nombre de la tecla presionada
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modale(); //llamamos a la funcion para añadirle la clase
  }
});

//Funcion para recargar la pagina 
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})