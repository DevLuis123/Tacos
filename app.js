const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const button = document.querySelector('.close-modal');

const remove = function () {
  modal.classList.remove('hidden'); //Remove the class that we put it but
  // We not add a point because we dont select anything
  overlay.classList.remove('hidden'); //Remove the class that we put it but
};

const modale = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

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
//let refresh = document.getElementById('refresh');
//refresh.addEventListener('click', _ => {
//  location.reload();
//});

const totalBtn = document.querySelector('.refresh');
const totalText = document.querySelector('.total2');
const ventana = document.querySelectorAll('.btnMain');
const inputs = document.querySelectorAll('.active');
const tacos = document.querySelectorAll('.tacos');
const tortas = document.querySelectorAll('.tortas');
const quesadillas = document.querySelectorAll('.quesadillas');
const gringas = document.querySelectorAll('.gringas');
//const bara = document.querySelectorAll('.ado');

const productos = {
  tacos: {
    adobada: 15,
    longaniza: 15,
    res: 20,
    cachete: 20,
    tripa: 20,
    salchicha: 20,
    chorizo: 20,
    mixto: 25,
  },
  tortas: {
    adobada: 50,
    longaniza: 50,
    res: 60,
    cachete: 60,
    tripa: 60,
    salchicha: 60,
    chorizo: 60,
    mixto: 70,
  },
  quesadillas: {
    adobada: 60,
    longaniza: 60,
    res: 70,
    cachete: 70,
    tripa: 70,
    salchicha: 70,
    chorizo: 70,
    mixto: 80,
  },
  gringas: {
    adobada: 120,
    longaniza: 120,
    res: 130,
    cachete: 130,
    tripa: 130,
    salchicha: 130,
    chorizo: 130,
    mixto: 140,
  },
};

const setLocalStorageConsumido = function (
  tacoArray,
  tortasArray,
  quesadillasArray,
  gringaArray,
  noMesa
) {
  localStorage.setItem(`mesa${noMesa}Tacos`, JSON.stringify(tacoArray));
  localStorage.setItem(`mesa${noMesa}Tortas`, JSON.stringify(tortasArray));
  localStorage.setItem(`mesa${noMesa}Ques`, JSON.stringify(quesadillasArray));
  localStorage.setItem(`mesa${noMesa}Gringa`, JSON.stringify(gringaArray));
};

const setLocalStorageTotal = function (total, noMesa) {
  localStorage.setItem(`mesa${noMesa}T`, JSON.stringify(total));
};

const getLocalStorageTotal = function (total, noMesa) {
  return localStorage.getItem(`mesa${noMesa}T`, total);
};

let array = [];

const getLocalStorageConsumido = function (noMesa, comida) {
  return JSON.parse(localStorage.getItem(`mesa${noMesa}${comida}`));

  // } else if (`${comida}` = 'Tortas') {
  //   array = localStorage.getItem(`mesa${noMesa}Tortas`);
  //   return array;
  // } else if (`${comida}` = 'Ques') {
  //   array = localStorage.getItem(`mesa${noMesa}Ques`);
  //   return array;
  // } else if (`${comida}` = 'Gringa') {
  //   array = localStorage.getItem(`mesa${noMesa}Gringa`);
  //   return array;
  // }
};

const borarLocal = function (noMesa) {
  removeItem(`mesa${noMesa}`);
};

let venta = [];
let ventaTacos = [];
let ventaTortas = [];
let ventaQuesadillas = [];
let ventaGringas = [];

const resetArrays = function () {
  ventaTacos = [];
  ventaTortas = [];
  ventaQuesadillas = [];
  ventaGringas = [];
};

const cuentasTa = function (comida) {
  let aux = 0;

  comida.forEach(function (element) {
    if (element.classList.contains('ado')) {
      aux += element.value * productos.tacos.adobada;
    } else {
      aux += element.value * productos.tacos.cachete;
    }
  });
  return aux;
};

const cuentasTo = function (comida) {
  let aux = 0;

  comida.forEach(function (element) {
    if (element.classList.contains('ado')) {
      aux += element.value * productos.tortas.adobada;
    } else {
      aux += element.value * productos.tortas.cachete;
    }
  });
  return aux;
};

const cuentasQ = function (comida) {
  let aux = 0;

  comida.forEach(function (element) {
    if (element.classList.contains('ado')) {
      aux += element.value * productos.quesadillas.adobada;
    } else {
      aux += element.value * productos.quesadillas.cachete;
    }
  });
  return aux;
};
const cuentasG = function (comida) {
  let aux = 0;

  comida.forEach(function (element) {
    if (element.classList.contains('ado')) {
      aux += element.value * productos.gringas.adobada;
    } else {
      aux += element.value * productos.gringas.cachete;
    }
  });
  return aux;
};

const totalC = function () {
  return (
    cuentasTa(tacos) +
    cuentasTo(tortas) +
    cuentasQ(quesadillas) +
    cuentasG(gringas)
  );
};

const guardarCantidad = function () {
  tacos.forEach(function (element) {
    ventaTacos.push(element.value);
  });
  tortas.forEach(function (element) {
    ventaTortas.push(element.value);
  });
  quesadillas.forEach(function (element) {
    ventaQuesadillas.push(element.value);
  });
  gringas.forEach(function (element) {
    ventaGringas.push(element.value);
  });
};

// ventana.forEach(mesa => {
//   if (mesa.classList.contains('mesa1')) {
//     totalBtn.addEventListener('click', function (e) {
//       e.preventDefault();
//       guardarCantidad();
//       setLocalStorageConsumido(ventaTacos, 1);
//       totalText.textContent = totalC();

//       resetArrays();
//       venta = [];
//     });
//   }
// });

const setearInputsFromLS = function (arrayk, comida) {
  if (arrayk !== null) {
    for (let i = 0; i < arrayk.length; i++) {
      comida[i].value = arrayk[i];
      //arrayk[i] = comida[i];
    }
  } else {
    arrayk = 0;
  }
};

const logicaMesa = function (noMesa) {
  let nuevoValor = noMesa;

  if (noMesa === nuevoValor) {
    console.log('La variable es igual al valor recibido');
    noMesa = nuevoValor;
  } else {
    console.log('La variable no es igual al valor recibido');
  }

  setearInputsFromLS(getLocalStorageConsumido(noMesa, 'Tacos'), tacos);
  setearInputsFromLS(getLocalStorageConsumido(noMesa, 'Tortas'), tortas);
  setearInputsFromLS(
    getLocalStorageConsumido(`${noMesa}`, 'Ques'),
    quesadillas
  );
  setearInputsFromLS(getLocalStorageConsumido(`${noMesa}`, 'Gringa'), gringas);
  totalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    guardarCantidad();

    setLocalStorageConsumido(
      ventaTacos,
      ventaTortas,
      ventaQuesadillas,
      ventaGringas,
      noMesa
    );
    resetArrays();
    venta = [];
    totalText.textContent = totalC();
  });
};

for (let i = 0; i < showModal.length; i++) {
  const mesas = document.querySelector('.mesas');

  showModal[i].addEventListener('click', remove);
  showModal[i].addEventListener('click', function () {
    mesas.textContent = `Mesa ${i + 1}`;
    if (showModal[i].classList.contains(`mesa${i + 1}`)) {
      logicaMesa(i + 1);
    }
  });
}

//setearInputsFromLS(arrayTo, tortas);
//setearInputsFromLS(arrayQues, quesadillas);
//setearInputsFromLS(arrayGrin, gringas);
