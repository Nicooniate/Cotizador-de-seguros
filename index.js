// se declara una variable tipo array con objetos que dentro contienen las marcas y nombres de los modelos

var cars = [{
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
}]

var precioBase = 0;
var precioFinal = 0;

// seleccionarMarca toma el valor ingresado por el usuario mediante un promt. Se utiliza toLowerCase para que el dato ingresado sea todo en minusculas por mas que el usuario escriba "ToYOTa" === "toyota"
var seleccionarMarca = prompt("Por favor indique cual es la marca de su vehiculo:\n" + cars.map(marca => marca.marca).join(", ")).toLowerCase();

// searchMarca busca dentro del array de marcas si el dato (marca) ingresada por el usuario existe o no mediante un .find()
var searchMarca = cars.find(marca => marca.marca.toLowerCase() === seleccionarMarca);

// Si la marca ingresada por el usuario es valida se guarda en searchMarca, de lo contrario la variable queda vacia y esto devolvera una alerta diciendo que la marca seleccionada no es valida
if(!searchMarca) {
  alert("La marca seleccionada no es valida")
} else {
  // En caso de que la marca exista el codigo se seguira ejecutando
  precioBaseCalculator(seleccionarMarca);

  var seleccionarModelo = prompt("Ingrese el modelo de su vehiculo:\n" + searchMarca.marca + "\n" + searchMarca.modelo.join(", ")).toLowerCase();

  var indicarAño = prompt("Ingrese en que año se fabrico su vehiculo");

  const añosDeAntiguedad = new Date().getFullYear() - indicarAño; // en esta linea se obtiene la antiguedad del vehiculo
  precioBase -= (añosDeAntiguedad * 100);
  
  console.log(precioBase + "Es el precio base menos descuento por antiguedad " + "Años de antiguedad: " + añosDeAntiguedad)
  
  var seleccionarSeguro = searchSeguro(prompt("Seleccione una opción seguro\nBasico\nIntermedio\nTodo Riesgo").toLowerCase());
  
  alert(`Usted selecciono:\n
  Marca: ${seleccionarMarca}\n
  Modelo: ${seleccionarModelo}\n
  Año: ${indicarAño}\n
  El valor total mensual es de $${precioFinal}`)
  
  console.log(precioFinal + " Precio final del seguro")
}


  // DECLARACIÓN DE FUNCIONES.👇👇
  function precioBaseCalculator(marca){
    if(marca === "toyota"){
      precioBase = 3000
    } else if(marca === "ford"){
      precioBase = 3500
    } else if(marca === "volkswagen"){
      precioBase = 4000
    } else
    return precioBase;
  };

  function searchSeguro(seguro){  if(seguro == "basico"){
    precioFinal = precioBase + 300
  } else if (seguro == "intermedio"){
    precioFinal = precioBase + 350
  } else if (seguro == "todo riesgo" || seguro == "todoriesgo"){
    precioFinal = precioBase + 500
  } else {
    alert("Por favor ingrese una opcion de plan valida")
  }
};