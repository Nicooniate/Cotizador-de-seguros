// Carga los datos del archivo JSON

let carData = {};
fetch('/carBrands.json')
    .then(response => response.json())
    .then(data => {
        carData = data;
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

document.getElementById('brand').addEventListener('change', function() {
    const brand = this.value;
    const modelSelect = document.getElementById('model');

    // Limpia las opciones anteriores
    modelSelect.innerHTML = '<option value="modelo">-- Seleccione --</option>';

    // Busca la marca en el archivo JSON
    const selectedBrand = carData.cars ? carData.cars.find(car => car.marca === brand) : null;

    // Añade como opción los modelos que corresponden a la marca seleccionada
    if (selectedBrand) {
        selectedBrand.modelo.forEach(model => {
            const option = document.createElement('option');
            option.value = model.toLowerCase();
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
});





