/**
 * Función para redirigir al usuario
 * @param {string} url - El nombre del archivo o ruta de destino
 */
function navegar(url) {
    // Podríamos añadir una animación de salida antes de cambiar de página
    console.log("Navegando hacia: " + url);
    
    // Pequeño retraso para que el usuario sienta el click
    setTimeout(() => {
        window.location.href = url;
    }, 150);
}