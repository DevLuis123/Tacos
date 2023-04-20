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
  location.reload();
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

const totalBtn = document.querySelector('.refresh');
const totalText = document.querySelector('.total2');
const ventana = document.querySelectorAll('.btnMain');
const inputs = document.querySelectorAll('.active');
const tacos = document.querySelectorAll('.tacos');
const tortas = document.querySelectorAll('.tortas');
const quesadillas = document.querySelectorAll('.quesadillas');
const gringas = document.querySelectorAll('.gringas');
//const bara = document.querySelectorAll('.ado');
const dogoyburger = document.querySelectorAll('.dogoyburger');
const extras = document.querySelectorAll('.extras');

const bebidasSinAlchol = document.querySelectorAll('.bebidasNA');
const alcholicas = document.querySelectorAll('.alcholicas');

const setLocalStorageTotal = function (total, noMesa) {
  localStorage.setItem(`mesa${noMesa}T`, JSON.stringify(total));
};

const getLocalStorageTotal = function (total, noMesa) {
  return localStorage.getItem(`mesa${noMesa}T`, total);
};

let array = [];

const getLocalStorageConsumido = function (noMesa, comida) {
  return JSON.parse(localStorage.getItem(`mesa${noMesa}${comida}`));
};

const borarLocal = function (noMesa) {
  removeItem(`mesa${noMesa}`);
};

//console.log(mesa);

let venta = [];
let ventaTacos = [];
let ventaTortas = [];
let ventaQuesadillas = [];
let ventaGringas = [];
let ventaExtras = [];
let ventaDogosBurger = [];
let ventabebidas = [];
let ventabebidasAlcholicas = [];

const resetArrays = function () {
  ventaTacos = [];
  ventaTortas = [];
  ventaQuesadillas = [];
  ventaGringas = [];
  ventaExtras = [];
  ventaDogosBurger = [];
  ventabebidas = [];
  ventabebidasAlcholicas = [];
};
//25
const cuentasTa = function (comida) {
  let aux = 0;

  comida.forEach(function (element) {
    if (element.classList.contains('ado')) {
      aux += element.value * 15;
    } else {
      aux += element.value * 20;
    }
  });
  return aux;
};

//75
const cuentasTo = function (comida) {
  let aux = 0;

  comida.forEach(function (element) {
    if (element.classList.contains('ado')) {
      aux += element.value * 55;
    } else {
      aux += element.value * 65;
    }
  });
  return aux;
};

//85
const cuentasQ = function (comida) {
  let aux = 0;

  comida.forEach(function (element) {
    if (element.classList.contains('ado')) {
      aux += element.value * 70;
    } else {
      aux += element.value * 80;
    }
  });
  return aux;
};

//140
const cuentasG = function (comida) {
  let aux = 0;

  comida.forEach(function (element) {
    if (element.classList.contains('ado')) {
      aux += element.value * 120;
    } else {
      aux += element.value * 130;
    }
  });
  return aux;
};

const pricesExt = [5, 2, 15, 10, 40];

const cuentasE = function (comida) {
  let aux = 0;
  for (let i = 0; i < comida.length; i++) {
    aux += comida[i].value * pricesExt[i];
  }
  return aux;
};

const mapPrice = new Map([
  [0, 50],
  [1, 60],
  [2, 20],
  [3, 25],
  [4, 15],
  [5, 50],
  [6, 35],
]);

const cuentasDH = function (comida) {
  let aux = 0;
  for (let i = 0; i < comida.length; i++) {
    aux += comida[i].value * mapPrice.get(i);
  }
  return aux;
};

//Mapa
const bebidasMap = new Map([
  [0, 'Bebida 355ml'],
  [1, 'Bebida 600ml'],
  [2, 'Agua Ciel'],
  [3, 'Jugo del Valle 250ml'],
  [4, 'Agua Fresca Chica'],
  [5, 'Agua Fresca Grande'],
]);

const bebidasPrice = new Map([
  [0, 22],
  [1, 28],
  [2, 15],
  [3, 15],
  [4, 15],
  [5, 30],
]);

//Bebidas
const cuentasBebidas = function (comida) {
  let aux = 0;
  for (let i = 0; i < comida.length; i++) {
    aux += comida[i].value * bebidasPrice.get(i);
  }
  return aux;
};

//Bebidas Alcholicas

const mapAlcholicas = new Map([
  [0, 'Laton'],
  [1, 'Coronita Light'],
  [2, 'Corona Familiar'],
]);

const mapAlcholicasPrice = new Map([
  [0, 35],
  [1, 30],
  [2, 60],
]);

const cuentasAlcholicas = function (comida) {
  let aux = 0;
  for (let i = 0; i < comida.length; i++) {
    aux += comida[i].value * mapAlcholicasPrice.get(i);
  }
  return aux;
};

const totalC = function () {
  return (
    cuentasTa(tacos) +
    cuentasTo(tortas) +
    cuentasQ(quesadillas) +
    cuentasG(gringas) +
    cuentasE(extras) +
    cuentasDH(dogoyburger) +
    cuentasBebidas(bebidasSinAlchol) +
    cuentasAlcholicas(alcholicas)
  );
};

const guardarCantidad = function (noMesa) {
  tacos.forEach(function (element) {
    ventaTacos.push(element.value);
    localStorage.setItem(`mesa${noMesa}Tacos`, JSON.stringify(ventaTacos));
  });
  tortas.forEach(function (element) {
    ventaTortas.push(element.value);
    localStorage.setItem(`mesa${noMesa}Tortas`, JSON.stringify(ventaTortas));
  });
  quesadillas.forEach(function (element) {
    ventaQuesadillas.push(element.value);
    localStorage.setItem(`mesa${noMesa}Ques`, JSON.stringify(ventaQuesadillas));
  });
  gringas.forEach(function (element) {
    ventaGringas.push(element.value);
    localStorage.setItem(`mesa${noMesa}Gringa`, JSON.stringify(ventaGringas));
  });
  extras.forEach(function (element) {
    ventaExtras.push(element.value);
    localStorage.setItem(`mesa${noMesa}Ext`, JSON.stringify(ventaExtras));
  });
  dogoyburger.forEach(function (element) {
    ventaDogosBurger.push(element.value);
    localStorage.setItem(`mesa${noMesa}dh`, JSON.stringify(ventaDogosBurger));
  });
  bebidasSinAlchol.forEach(function (element) {
    ventabebidas.push(element.value);
    localStorage.setItem(`mesa${noMesa}b`, JSON.stringify(ventabebidas));
  });
  alcholicas.forEach(function (element) {
    ventabebidasAlcholicas.push(element.value);
    localStorage.setItem(
      `mesa${noMesa}bA`,
      JSON.stringify(ventabebidasAlcholicas)
    );
  });
};

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
  setearInputsFromLS(getLocalStorageConsumido(`${noMesa}`, 'Tacos'), tacos);
  setearInputsFromLS(getLocalStorageConsumido(`${noMesa}`, 'Tortas'), tortas);
  setearInputsFromLS(
    getLocalStorageConsumido(`${noMesa}`, 'Ques'),
    quesadillas
  );
  setearInputsFromLS(getLocalStorageConsumido(`${noMesa}`, 'Gringa'), gringas);
  setearInputsFromLS(getLocalStorageConsumido(`${noMesa}`, 'Ext'), extras);
  setearInputsFromLS(getLocalStorageConsumido(`${noMesa}`, 'dh'), dogoyburger);
  setearInputsFromLS(
    getLocalStorageConsumido(`${noMesa}`, 'b'),
    bebidasSinAlchol
  );
  setearInputsFromLS(getLocalStorageConsumido(`${noMesa}`, 'bA'), alcholicas);
};

// Creamos un mapa para el orden de las carnes
const carnes = new Map([
  [0, 'Adobada'],
  [1, 'Longaniza'],
  [2, 'Cachete'],
  [3, 'Chorizo'],
  [4, 'Res'],
  [5, 'Salchicha'],
  [6, 'Tripa'],
  [7, 'Mixto'],
]);

//Creamos un mapa de extras
const extrasMap = new Map([
  [0, 'Cebollita'],
  [1, 'Dorada'],
  [2, 'Ext Queso'],
  [3, 'Taco de Frijol'],
  [4, 'Quesadilla Sencilla'],
]);

const ticketBtn = document.querySelector('.imprimir');
//const tabla = document.querySelector('.productos');

const anadirTicket = function (noMesa) {
  const tabla = document.querySelector('.productos');

  const tacos = getLocalStorageConsumido(`${noMesa}`, 'Tacos');
  for (let i = 0; i < tacos.length; i++) {
    if (tacos[i] != 0) {
      let fila = tabla.insertRow();
      let celda1 = fila.insertCell();
      celda1.innerHTML = `Taco ${carnes.get(i)}`;
      let celda2 = fila.insertCell();
      celda2.innerHTML = tacos[i];
      let celda3 = fila.insertCell();
      i === 0 || i === 1
        ? (celda3.innerHTML = `$${tacos[i] * 15}`)
        : (celda3.innerHTML = `$${tacos[i] * 20}`);
    }
  }
};
//anadirTicket(5);
const anadirTicket2 = function (noMesa) {
  const tabla = document.querySelector('.productos');

  const tortas = getLocalStorageConsumido(`${noMesa}`, 'Tortas');
  for (let i = 0; i < tortas.length; i++) {
    if (tortas[i] != 0) {
      let fila = tabla.insertRow();
      let celda1 = fila.insertCell();
      celda1.innerHTML = `Torta ${carnes.get(i)}`;
      let celda2 = fila.insertCell();
      celda2.innerHTML = tortas[i];
      let celda3 = fila.insertCell();
      i === 0 || i === 1
        ? (celda3.innerHTML = `$${tortas[i] * 50}`)
        : (celda3.innerHTML = `$${tortas[i] * 60}`);
    }
  }
};

const anadirTicket3 = function (noMesa) {
  const tabla = document.querySelector('.productos');

  const quesadillas = getLocalStorageConsumido(`${noMesa}`, 'Ques');
  for (let i = 0; i < quesadillas.length; i++) {
    if (quesadillas[i] != 0) {
      let fila = tabla.insertRow();
      let celda1 = fila.insertCell();
      celda1.innerHTML = `Quesadilla ${carnes.get(i)}`;
      let celda2 = fila.insertCell();
      celda2.innerHTML = quesadillas[i];
      let celda3 = fila.insertCell();
      i === 0 || i === 1
        ? (celda3.innerHTML = `$${quesadillas[i] * 60}`)
        : (celda3.innerHTML = `$${quesadillas[i] * 70}`);
    }
  }
};

const anadirTicket4 = function (noMesa) {
  const tabla = document.querySelector('.productos');

  const gringa = getLocalStorageConsumido(`${noMesa}`, 'Gringa');
  for (let i = 0; i < gringa.length; i++) {
    if (gringa[i] != 0) {
      let fila = tabla.insertRow();
      let celda1 = fila.insertCell();
      celda1.innerHTML = `Gringa ${carnes.get(i)}`;
      let celda2 = fila.insertCell();
      celda2.innerHTML = gringa[i];
      let celda3 = fila.insertCell();
      i === 0 || i === 1
        ? (celda3.innerHTML = `$${gringa[i] * 60}`)
        : (celda3.innerHTML = `$${gringa[i] * 70}`);
    }
  }
};

const anadirTicket5 = function (noMesa) {
  const tabla = document.querySelector('.productos');

  const ext = getLocalStorageConsumido(`${noMesa}`, 'Ext');
  for (let i = 0; i < ext.length; i++) {
    if (ext[i] != 0) {
      let fila = tabla.insertRow();
      let celda1 = fila.insertCell();
      celda1.innerHTML = `${extrasMap.get(i)}`;
      let celda2 = fila.insertCell();
      celda2.innerHTML = ext[i];
      let celda3 = fila.insertCell();
      celda3.innerHTML = `$${ext[i] * pricesExt[i]}`;
    }
  }
};
//console.log(tabla.innerHTML);

const mapDogosYBurger = new Map([
  [0, 'Hamburguesa Sencillla'],
  [1, 'Hamburguesa con Papas y Queso'],
  [2, 'Hot-Dog Sencillo'],
  [3, 'Hot-Dog con Tocino'],
  [4, 'Salchicha c/s tocino'],
  [5, 'Salchipulpos (100gr, 2 salchichas)'],
  [6, 'Orden de Papas'],
]);

const anadirTicket6 = function (noMesa) {
  const tabla = document.querySelector('.productos');

  const dodoBurger = getLocalStorageConsumido(`${noMesa}`, 'dh');

  for (let i = 0; i < dodoBurger.length; i++) {
    if (dodoBurger[i] != 0) {
      let fila = tabla.insertRow();
      let celda1 = fila.insertCell();
      celda1.innerHTML = `${mapDogosYBurger.get(i)}`;
      let celda2 = fila.insertCell();
      celda2.innerHTML = dodoBurger[i];
      let celda3 = fila.insertCell();
      celda3.innerHTML = `$${dodoBurger[i] * mapPrice.get(i)}`;
    }
  }
};

const anadirTicket7 = function (noMesa) {
  const tabla = document.querySelector('.productos');

  const bebidas = getLocalStorageConsumido(`${noMesa}`, 'b');

  for (let i = 0; i < bebidas.length; i++) {
    if (bebidas[i] != 0) {
      let fila = tabla.insertRow();
      let celda1 = fila.insertCell();
      celda1.innerHTML = `${bebidasMap.get(i)}`;
      let celda2 = fila.insertCell();
      celda2.innerHTML = bebidas[i];
      let celda3 = fila.insertCell();
      celda3.innerHTML = `$${bebidas[i] * bebidasPrice.get(i)}`;
    }
  }
};

const anadirTicket8 = function (noMesa) {
  const tabla = document.querySelector('.productos');

  const bebidasA = getLocalStorageConsumido(`${noMesa}`, 'bA');

  for (let i = 0; i < bebidasA.length; i++) {
    if (bebidasA[i] != 0) {
      let fila = tabla.insertRow();
      let celda1 = fila.insertCell();
      celda1.innerHTML = `${mapAlcholicas.get(i)}`;
      let celda2 = fila.insertCell();
      celda2.innerHTML = bebidasA[i];
      let celda3 = fila.insertCell();
      celda3.innerHTML = `$${bebidasA[i] * mapAlcholicasPrice.get(i)}`;
    }
  }
};

function imprimirContenido() {
  const contenido = document.querySelector('.ticket').innerHTML;

  // Crear un nuevo documento en una ventana de impresión
  const ventanaImpresion = window.open('', '', 'height=500,width=700');
  ventanaImpresion.document.title = 'TACOS EL CHINO';

  // Crear elementos para el contenido del ticket y añadirlos al cuerpo del documento de impresión
  const body = ventanaImpresion.document.body;

  const titleTicket = document.createElement('h1');
  titleTicket.textContent = 'TACOS EL CHINO ';
  titleTicket.style.textAlign = 'center';
  body.appendChild(titleTicket);

  //
  const addres = document.createElement('p');
  addres.textContent =
    'Vicente Suárez 264, Villas Alameda, 28984 Villa de Álvarez, Col., México';
  addres.style.textAlign = 'center';
  body.appendChild(addres);

  //Obtenemos Fecha
  const today = new Date();
  const dateTime = today.toLocaleString('fr-FR', { hour12: false });
  const timeDate = document.createElement('p');
  timeDate.textContent = `Fecha: ${dateTime}`;
  timeDate.style.textAlign = 'center';
  body.appendChild(timeDate);

  //
  const renglones = document.createElement('p');
  renglones.textContent =
    '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -';
  //Separamos Contenido
  body.appendChild(renglones);

  const ticketContent = document.createElement('div');
  ticketContent.innerHTML = contenido;
  body.appendChild(ticketContent);

  const totalCuenta = document.createElement('h3');
  totalCuenta.textContent = `TOTAL: $${totalC()}`;
  totalCuenta.style.textAlign = 'center';
  body.appendChild(totalCuenta);

  const renglones2 = document.createElement('p');
  renglones2.textContent =
    '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -';
  //Separamos contenido
  body.appendChild(renglones2);

  // Añadir mensaje de revisión de cambio
  const alertMessage = document.createElement('p');
  alertMessage.textContent = '*No se hacen cuentas por separado*';
  alertMessage.style.textAlign = 'center';
  body.appendChild(alertMessage);

  // Añadir mensaje de revisión de cambio
  const cambioMessage = document.createElement('p');
  cambioMessage.textContent = 'Revise su cambio antes de salir';
  cambioMessage.style.fontWeight = 'bold';
  cambioMessage.style.textAlign = 'center';
  body.appendChild(cambioMessage);

  const thanksMessage = document.createElement('h2');
  thanksMessage.textContent = 'Agradecemos su preferencia';
  thanksMessage.style.textAlign = 'center';
  body.appendChild(thanksMessage);

  // Cerrar el documento y enfocarse en la ventana de impresión para imprimir
  ventanaImpresion.document.close();
  ventanaImpresion.focus();
  ventanaImpresion.print();
  ventanaImpresion.close();
}

for (let index of showModal.keys()) {
  showModal[index].addEventListener('click', function () {
    anadirTicket(index + 1);
    anadirTicket2(index + 1);
    anadirTicket3(index + 1);
    anadirTicket4(index + 1);
    anadirTicket5(index + 1);
    anadirTicket6(index + 1);
    anadirTicket7(index + 1);
    anadirTicket8(index + 1);
  });
}

// const tickets = function (noMesa) {
//   anadirTicket(noMesa + 1);
//   anadirTicket2(noMesa + 1);
//   anadirTicket3(noMesa + 1);
//   anadirTicket4(noMesa + 1);
//   anadirTicket5(noMesa + 1);
//   anadirTicket6(noMesa + 1);
// };

ticketBtn.addEventListener('click', imprimirContenido);

for (let i = 0; i < showModal.length; i++) {
  const mesas = document.querySelector('.mesas');

  showModal[i].addEventListener('click', remove);

  showModal[i].addEventListener('click', function () {
    mesas.textContent = `Mesa ${i + 1}`;
    if (showModal[i].classList.contains(`mesa${i + 1}`)) {
      logicaMesa(i + 1);
      totalBtn.addEventListener('click', function (e) {
        e.preventDefault();
        //tickets(i + 1);
        guardarCantidad(i + 1);
        resetArrays();
        venta = [];
        totalText.textContent = `$${totalC()}`;
      });
    }
  });
}
