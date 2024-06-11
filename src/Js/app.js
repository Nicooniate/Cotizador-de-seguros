
let brandSelector = document.getElementById('brandSelector');
let modelSelector = document.getElementById('modelSelector');
let yearSelector = document.getElementById('yearSelector');
let typeSelector = document.getElementById('typeSelector');



let buttonCotizar = document.getElementById('btn-go');

function btnCotizar(){
    // Obtenes los valores pasados por el usuario (Marca, modelo y año)
    let brand = document.getElementById('brand').value.toLowerCase();
    let model = document.getElementById('model').value.toLowerCase();
    let year = document.getElementById('year').value.toLowerCase();
    let type = document.getElementById('type').value.toLowerCase();
    
    // Invocamos la funcion calcularSeguro y guardamos el resultado dentro de la variable para luego mostrarlo en el HTML
    let valorSeguro = calcularSeguro(brand, model, year, type);
    
    // Mostramos el resultado en el HTML
    if(valorSeguro > 3499){document.getElementById('resultado').innerText = 'El valor del seguro es: $' + valorSeguro;
        const newClient = {
            "marca" : brand,
            "modelo" : model,
            "año" : year,
            "seguro" : type
        }
        localStorage.setItem('clientStorage', JSON.stringify(newClient), console.log("Cliente guardado en base de datos"));
    }else
        {document.getElementById('resultado').innerText = 'Por favor complete el formulario'}
        
        


}

function calcularSeguro (brand, model, year, type){
    // Verificamos que el usuario haya ingresado todos los datos
    (brand != '-- seleccione --') ? true : brandSelector.innerHTML = 'Seleccione una marca disponible';
    (model != '-- seleccione --') ? true : modelSelector.innerHTML = 'Seleccione un modelo disponible';
    (year != '-- seleccione --') ? true : yearSelector.innerHTML = 'Indique el año de su vehiculo';
    (type != '-- seleccione --') ? true : typeSelector.innerHTML = 'Seleccione un plan de seguro';
    
    console.log("Brand:", brand.toUpperCase());
    console.log("Model:", model.toUpperCase());
    console.log("Year:", year);
    console.log("Type:", type.toUpperCase());
    
    let precioBase = 0;
    let precioSeguro = 0;
    let finalPrice = 0;
    
    if(brand === "toyota") { precioBase = 3000}
    else if(brand === "ford") {precioBase = 3500}
    else if(brand === "renault") {precioBase = 2500}
    else if(brand === "volkswagen") {precioBase = 3500}
    
    console.log("Precio base:", precioBase);
    
    if(type === "basico"){precioSeguro = 2000}
        else if(type === "intermedio") {precioSeguro = 2500}
        else if(type === "todo riesgo") {precioSeguro = 3500}


    console.log("Precio seguro:", precioSeguro);


    finalPrice = precioBase + precioSeguro
console.log("El precio antes de calcular años es: ", finalPrice);

    const añosDeAntiguedad = new Date().getFullYear() - year;
    finalPrice -= añosDeAntiguedad * 100;

console.log("El precio despues de calcular años es: ", finalPrice);

return finalPrice;
}



buttonCotizar.addEventListener('click', btnCotizar);