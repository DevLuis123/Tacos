'use strict';

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
const calc = document.querySelector('.refresh');

const taco15 = 15;
const taco20 = 20;
const tacoM = 25;
// let aux = 0;
let cuentaTacos = 0;
let cuentaTortas = 0;
let cuentaQuesadillas = 0;
let cuentaGringas = 0;

const tacos = function () {
  let tacoAdobada = Number(document.querySelector('.tacoAdobada').value);
  let tacoLonganiza = Number(document.querySelector('.tacoLonganiza').value);
  let tacoCachete = Number(document.querySelector('.tacoCachete').value);
  let tacoChorizo = Number(document.querySelector('.tacoChorizo').value);
  let tacoRes = Number(document.querySelector('.tacoRes').value);
  let tacoSalchicha = Number(document.querySelector('.tacoSalchicha').value);
  let tacoTripa = Number(document.querySelector('.tacoTripa').value);
  let tacoMixto = Number(document.querySelector('.tacoMixto').value);

  let aux = 0;

  if (tacoAdobada || tacoLonganiza > 0) {
    aux += tacoAdobada * taco15;
    aux += tacoLonganiza * taco15;
    total.textContent = aux;
  }
  if (
    tacoCachete ||
    tacoChorizo ||
    tacoRes ||
    tacoSalchicha ||
    tacoTripa ||
    tacoMixto > 0
  ) {
    aux += tacoCachete * taco20;
    aux += tacoChorizo * taco20;
    aux += tacoRes * taco20;
    aux += tacoSalchicha * taco20;
    aux += tacoTripa * taco20;
    aux += tacoMixto * tacoM;
    total.textContent = aux;
  }
};

const torta50 = 50;
const torta60 = 60;
const tortaM = 70;

const tortas = function () {
  let tortaAdobada = document.querySelector('.tortaAdobada');
  let tortaLonganiza = document.querySelector('.tortaLonganiza');
  let tortaCachete = document.querySelector('.tortaCachete');
  let tortaChorizo = document.querySelector('.tortaChorizo');
  let tortaRes = document.querySelector('.tortaRes');
  let tortaSalchicha = document.querySelector('.tortaSalchicha');
  let tortaTripa = document.querySelector('.tortaTripa');
  let tortaMixto = document.querySelector('.tortaMixto');

  let aux = 0;

  if (tortaAdobada || tortaLonganiza > 0) {
    aux += tortaAdobada * torta50;
    aux += tortaLonganiza * torta50;
    total.textContent = aux;
  }
  if (
    tortaCachete ||
    tortaChorizo ||
    tortaRes ||
    tortaSalchicha ||
    tortaTripa ||
    tortaMixto > 0
  ) {
    aux += tortaCachete * torta60;
    aux += tortaChorizo * torta60;
    aux += tortaRes * torta60;
    aux += tortaSalchicha * torta60;
    aux += tortaTripa * torta60;
    aux += tortaMixto * tortaM;
    total.textContent = aux;
  }
};

calc.addEventListener('click', tacos);
// calc.addEventListener('click', tortas);

console.log(total.textContent);
