// CODIGO NO UTILIZADO.




// Se declara una variable tipo array con objetos que dentro contienen las marcas y nombres de los modelos
const cars = [
  {
    marca: "Toyota",
    modelo: ["Corolla", "Yaris", "Hilux"],
  },
  {
    marca: "Ford",
    modelo: ["Fiesta", "Focus", "Raptor"],
  },
  {
    marca: "Volkswagen",
    modelo: ["Golf", "Polo", "Amarok"],
  },
];

// let precioBase = 0;
// let precioFinal = 0;

// seleccionarMarca toma el valor ingresado por el usuario mediante un promt. Se utiliza toLowerCase para que el dato ingresado sea todo en minusculas por mas que el usuario escriba "ToYOTa" === "toyota"
let seleccionarMarca = prompt(
  "Por favor indique cual es la marca de su vehiculo:\n" +
    cars.map((marca) => marca.marca).join(", ")
).toLowerCase();

// searchMarca busca dentro del array de marcas si el dato (marca) ingresada por el usuario existe o no mediante un .find()
let searchMarca = cars.find(
  (marca) => marca.marca.toLowerCase() === seleccionarMarca
);

// Si la marca ingresada por el usuario existe dentro del array "cars" se ejecutara la funcion precioBaseCalculator, de lo contrario retornara el alert()
searchMarca
  ? precioBaseCalculator(seleccionarMarca)
  : alert("La marca seleccionada no es valida");
console.log(precioBase, "Precio base antes de cualquier modificación");

// Al igual que con la marca esta variable muestra los modelos disponibles y obtiene el deseado por el cliente
let seleccionarModelo = prompt(
  "Ingrese el modelo de su vehiculo:\n" +
    searchMarca.marca +
    "\n" +
    searchMarca.modelo.join(", ")
).toLowerCase();

// Busca dentro del array de marcas si el dato (modelo) ingresada por el usuario existe o no mediante un some() y una funcion flecha
let searchModelo = searchMarca.modelo.some(
  (modelo) => modelo.toLowerCase() === seleccionarModelo
);

// Si el modelo ingresado por el usuario existe se pasa por "true" y el codigo se sigue ejecutando con normalidad, de lo contrario se envia un alert()
searchModelo
  ? true
  : alert("El modelo ingresado no se encuentra disponible o no existe");

// Una vez verificado el modelo se pide al usuario que ingrese el año de su vehiculo
let indicarAño = prompt("Ingrese en que año se fabrico su vehiculo");

const añosDeAntiguedad = new Date().getFullYear() - indicarAño; // En esta linea se obtiene la antiguedad del vehiculo
precioBase -= añosDeAntiguedad * 100;

console.log(
  precioBase +
    "Es el precio base menos descuento por antiguedad\n" +
    "Años de antiguedad: " +
    añosDeAntiguedad
);

searchSeguro(
  prompt(
    "Seleccione una opción seguro\nBasico: $300\nIntermedio: $350\nTodo Riesgo: $500"
  ).toLowerCase()
);

console.log(precioFinal + " Precio final del seguro");

alert(`Usted selecciono:\n
  Marca: ${seleccionarMarca}\n
  Modelo: ${seleccionarModelo}\n
  Año: ${indicarAño}\n
  Antiguedad: ${añosDeAntiguedad}\n
  El valor total mensual es de $${precioFinal}`);

// DECLARACIÓN DE FUNCIONES.👇👇
function precioBaseCalculator(marca) {
  if (marca === "toyota") {
    precioBase = 3000;
  } else if (marca === "ford") {
    precioBase = 3500;
  } else if (marca === "volkswagen") {
    precioBase = 4000;
  } else return precioBase;
}

function searchSeguro(seguro) {
  if (seguro == "basico") {
    precioFinal = precioBase + 300;
  } else if (seguro == "intermedio") {
    precioFinal = precioBase + 350;
  } else if (seguro == "todo riesgo" || seguro == "todoriesgo") {
    precioFinal = precioBase + 500;
  } else {
    alert("Por favor ingrese una opcion de plan valida");
  }
}
