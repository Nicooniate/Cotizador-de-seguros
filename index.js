//Nombramos los tipos de seguro y sus valores con variables constantes.
const basico = "$10.000 Mensuales";
const intermedio = "$20.000 Mensuales";
const Todoriesgo = "$30.000 Mensuales";


//Se inicia una funcion llamada priceplan la cual por un IF muestra la opcion seleccionada por el usuario.
function priceplan(plan) {
  if (plan == 1) {
    alert(basico);
  } else if (plan == 2) {
    alert(intermedio);
  } else if (plan == 3) {
    alert(Todoriesgo);
  } else {
    alert("Seleccione un plan disponible."); // En caso de que el usuario seleccione un plan que no exista se muestra este mensaje.
  }
}

//La funcion selectedplan ejecuta un prompt para que el usuario a traves de los numeros 1, 2 o 3 seleccione el plan que desee
function selectedplan() {
  let planselected = prompt( //Se guarda en una variable la seleccion del usuario
    "Seleccione un plan de los tres disponibles:\n1. Basico\n2. Intermedio\n3. Todo riesgo"
  );
  priceplan(planselected) // se ejecuta la funcion antes creada (priceplan) sobre el prompt (Seleccion del usuario) para mostrar los valores.
}

selectedplan()//Se invoca la funcion selectedplan para que funcione el codigo.