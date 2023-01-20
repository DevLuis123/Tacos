'use strict';

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
    //total.textContent = aux;
    cuentaTacos = aux;
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
    //total.textContent = aux;
    cuentaTacos = aux;
  }
};

const torta50 = 50;
const torta60 = 60;
const tortaM = 70;

const tortas = function () {
  let tortaAdobada = document.querySelector('.tortaAdobada').value;
  let tortaLonganiza = document.querySelector('.tortaLonganiza').value;
  let tortaCachete = document.querySelector('.tortaCachete').value;
  let tortaChorizo = document.querySelector('.tortaChorizo').value;
  let tortaRes = document.querySelector('.tortaRes').value;
  let tortaSalchicha = document.querySelector('.tortaSalchicha').value;
  let tortaTripa = document.querySelector('.tortaTripa').value;
  let tortaMixto = document.querySelector('.tortaMixto').value;

  let aux = 0;

  if (tortaAdobada || tortaLonganiza > 0) {
    aux += tortaAdobada * torta50;
    aux += tortaLonganiza * torta50;
    //total.textContent = aux;
    cuentaTortas = aux;
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
    //total.textContent = aux;
    cuentaTortas = aux;
  }
  tacos();
};

const quesadilla60 = 60;
const quesadilla70 = 70;
const quesadillaMixta = 80;

const quesadillas = function () {
  let quesadillaAdobada = Number(
    document.querySelector('.quesadillaAdobada').value
  );
  let quesadillaLonganiza = Number(
    document.querySelector('.quesadillaLonganiza').value
  );
  let quesadillaCachete = Number(
    document.querySelector('.quesadillaCachete').value
  );
  let quesadillaChorizo = Number(
    document.querySelector('.quesadillaChorizo').value
  );
  let quesadillaRes = Number(document.querySelector('.quesadillaRes').value);
  let quesadillaSalchicha = Number(
    document.querySelector('.quesadillaSalchicha').value
  );
  let quesadillaTripa = Number(
    document.querySelector('.quesadillaTripa').value
  );
  let quesadillaMixto = Number(
    document.querySelector('.quesadillaMixto').value
  );

  let aux = 0;

  if (quesadillaAdobada || quesadillaLonganiza > 0) {
    aux += quesadillaAdobada * quesadilla60;
    aux += quesadillaLonganiza * quesadilla60;
    //total.textContent = aux;
    cuentaQuesadillas = aux;
  }
  if (
    quesadillaCachete ||
    quesadillaChorizo ||
    quesadillaRes ||
    quesadillaSalchicha ||
    quesadillaTripa ||
    quesadillaMixto > 0
  ) {
    aux += quesadillaCachete * quesadilla70;
    aux += quesadillaChorizo * quesadilla70;
    aux += quesadillaRes * quesadilla70;
    aux += quesadillaSalchicha * quesadilla70;
    aux += quesadillaTripa * quesadilla70;
    aux += quesadillaMixto * quesadillaMixta;
    //total.textContent = aux;
    cuentaQuesadillas = aux;
  }
  tortas();
};

const gringa120 = 120;
const gringa130 = 130;
const gringaM = 140;

const gringas = function () {
  let gringaAdobada = Number(document.querySelector('.gringaAdobada').value);
  let gringaLonganiza = Number(
    document.querySelector('.gringaLonganiza').value
  );
  let gringaCachete = Number(document.querySelector('.gringaCachete').value);
  let gringaChorizo = Number(document.querySelector('.gringaChorizo').value);
  let gringaRes = Number(document.querySelector('.gringaRes').value);
  let gringaSalchicha = Number(
    document.querySelector('.gringaSalchicha').value
  );
  let gringaTripa = Number(document.querySelector('.gringaTripa').value);
  let gringaMixto = Number(document.querySelector('.gringaMixto').value);

  let aux = 0;

  if (gringaAdobada || gringaLonganiza > 0) {
    aux += gringaAdobada * gringa120;
    aux += gringaLonganiza * gringa120;
    //total.textContent = aux;
    cuentaGringas = aux;
  }
  if (
    gringaCachete ||
    gringaChorizo ||
    gringaRes ||
    gringaSalchicha ||
    gringaTripa ||
    gringaMixto > 0
  ) {
    aux += gringaCachete * gringa130;
    aux += gringaChorizo * gringa130;
    aux += gringaRes * gringa130;
    aux += gringaSalchicha * gringa130;
    aux += gringaTripa * gringa130;
    aux += gringaMixto * gringaM;
    //total.textContent = aux;
    cuentaGringas = aux;
  }
  quesadillas();
  total.textContent = 
   cuentaTacos + cuentaTortas + cuentaQuesadillas + cuentaGringas;
};

calc.addEventListener('click', gringas);
