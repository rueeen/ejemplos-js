//Eventos de carga
document.addEventListener('DOMContentLoaded', function () {
    console.log('Evento 1');
});

//Espera la carga de todo el document
window.addEventListener('load', function () {
    console.log('Evento 2');
});

window.onload = () => {
    console.log('Evento 3');
}

console.log('Evento 4');

