let label_toggle = document.getElementById("toggletheme");
let btn_cotizar = document.getElementById("btn-cotizar");


// Funcion para cambiar entre dark-mode y light-mode
function toggleTheme() {
    // Se obtiene el estado actual del tema
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Esta funcion es la que aplica el dark-mode o el modo normal
    if (isDarkMode) {
        document.body.classList.remove("dark-mode");
        btn_cotizar.classList.remove("btn-c-dark-mode");
        localStorage.setItem("darkMode", "false");
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        
    } else {
        document.body.classList.add("dark-mode");
        btn_cotizar.classList.add("btn-c-dark-mode");
        localStorage.setItem("darkMode", "true");
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

// Esta funcion obtiene el theme actual de la pagina, ya sea dark-mode o no
function loadTheme() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        btn_cotizar.classList.add("btn-c-dark-mode");
        label_toggle.classList.add("dark-mode");
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

// Se asigna la función toggleTheme al evento click del botón con ID "theme"
document.getElementById("toggletheme").addEventListener("click", toggleTheme);

// Carga el tema al cargar la página
window.addEventListener("load", loadTheme);
