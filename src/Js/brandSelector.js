// const carModels = fetch("/carBrands.json")
// .then((response) => response.json())
// .then((json) => console.log(json));



// const carModels = {
//     toyota: ['Corolla', 'Etios', 'Yaris', 'Hilux'],
//     ford: ['Fiesta', 'Focus', 'Mustang', 'Ranger'],
//     renault: ['Clio', 'Megane', 'Fluence', 'Duster'],
//     volkswagen: ['Golf', 'Polo', 'Vento', 'Passat']
// };

// let vehicleBrand = document.getElementById('brand').value;
// let vehicleModel = document.getElementById('model').value;
// let vehicleYear = document.getElementById('year').value;
// let btnGo = document.getElementById('btn-go');

// document.getElementById('brand').addEventListener('change', function(){
//     const brand = this.value;
//     const modelSelect = document.getElementById('model');

//     // Limpiar las opciones anteriores
//     modelSelect.innerHTML = '<option value="modelo">-- Seleccione --</option>';

//     if (carModels[brand]) {
//         // Añadir nuevas opciones
//         carModels[brand].forEach(model => {
//             const option = document.createElement('option');
//             option.value = model.toLowerCase();
//             option.textContent = model;
//             modelSelect.appendChild(option);
//         });
//     }
// });

// Carga los datos del archivo JSON
let carData = {};
fetch('/nicooniate/carBrands.json')
    .then(response => response.json())
    .then(data => {
        carData = data;
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error)); // si el JSON no se puede cargar arroja un error en la consola

document.getElementById('brand').addEventListener('change', function() {
    const brand = this.value;
    const modelSelect = document.getElementById('model');

    // Limpia las opciones anteriores
    modelSelect.innerHTML = '<option value="modelo">-- Seleccione --</option>';

    // Busca la marca en el archivo JSON
    const selectedBrand = carData.cars ? carData.cars.find(car => car.marca === brand) : null;

    if (selectedBrand) {
        // Añadde como opcion los modelos que corresponden a la marca seleccionada
        selectedBrand.modelo.forEach(model => {
            const option = document.createElement('option');
            option.value = model.toLowerCase();
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
});



