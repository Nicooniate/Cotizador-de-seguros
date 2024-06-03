const carModels = {
    toyota: ['Corolla', 'Etios', 'Yaris', 'Hilux'],
    ford: ['Fiesta', 'Focus', 'Mustang', 'Ranger'],
    renault: ['Clio', 'Megane', 'Fluence', 'Duster'],
    volkswagen: ['Golf', 'Polo', 'Vento', 'Passat']
};

let vehicleBrand = document.getElementById('brand').value;
let vehicleModel = document.getElementById('model').value;
let vehicleYear = document.getElementById('year').value;
let btnGo = document.getElementById('btn-go');

document.getElementById('brand').addEventListener('change', function(){
    const brand = this.value;
    const modelSelect = document.getElementById('model');

    // Limpiar las opciones anteriores
    modelSelect.innerHTML = '<option value="modelo">-- Seleccione --</option>';

    if (carModels[brand]) {
        // Añadir nuevas opciones
        carModels[brand].forEach(model => {
            const option = document.createElement('option');
            option.value = model.toLowerCase();
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
});





