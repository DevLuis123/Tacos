'use strict';

let tacoAdobada = Number(document.querySelector('.tacoAdobada').value);
let tacoLonganiza = document.querySelector('.tacoLonganiza');
let tacoCachete = document.querySelector('.tacoCachete');
let tacoChorizo = document.querySelector('.tacoChorizo');
let tacoRes = document.querySelector('.tacoRes');
let tacoSalchicha = document.querySelector('.tacoSalchicha');
let tacoTripa = document.querySelector('.tacoTripa');
let tacoMixto = document.querySelector('.tacoMixto');

let tortaAdobada = document.querySelector('.tortaAdobada');
let tortaLonganiza = document.querySelector('.tortaLonganiza');
let tortaCachete = document.querySelector('.tortaCachete');
let tortaChorizo = document.querySelector('.tortaChorizo');
let tortaRes = document.querySelector('.tortaRes');
let tortaSalchicha = document.querySelector('.tortaSalchicha');
let tortaTripa = document.querySelector('.tortaTripa');
let tortaMixto = document.querySelector('.tortaMixto');

let quesadillaAdobada = document.querySelector('.quesadillaAdobada');
let quesadillaLonganiza = document.querySelector('.quesadillaLonganiza');
let quesadillaCachete = document.querySelector('.quesadillaCachete');
let quesadillaChorizo = document.querySelector('quesadillaChorizo');
let quesadillaRes = document.querySelector('.quesadillaRes');
let quesadillaSalchicha = document.querySelector('.quesadillaSalchicha');
let quesadillaTripa = document.querySelector('.quesadillaTripa');
let quesadillaMixto = document.querySelector('.quesadillaMixto');

let gringaAdobada = document.querySelector('.gringaAdobada');
let gringaLonganiza = document.querySelector('.gringaLonganiza');
let gringaCachete = document.querySelector('.gringaCachete');
let gringaChorizo = document.querySelector('.gringaChorizo');
let gringaRes = document.querySelector('.gringaRes');
let gringaSalchicha = document.querySelector('.gringaSalchicha');
let gringaTripa = document.querySelector('.gringaTripa');
let gringaMixto = document.querySelector('.gringaMixto');

let total = document.querySelector('.total2');

const taco15 = 15;
const taco20 = 20;
const tacoM = 25;

console.log(typeof tacoAdobada);
let tA = tacoAdobada;

const calc = function () {};

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', function () {
  console.log(tA);
  total.textContent = taco15 * tacoAdobada;
});
