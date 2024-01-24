// Elemento Hoisting donde hace el elemento de las variables de las funciones al inicio para que queden disponibles
let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
    /* 
    es un método para acceder a los elementos del html, donde se le dice a la cantidad de elementos que hay
    donde se le pasa un nombre (de etiqueta en este caso), donde se le atribuye a una variable (siendo un objeto) donde 
    se pueden realizar diferentes cosas
    Es parte del DOM: Document Object Model
    */
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        // El usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja(); // se llama la función para limpiar la caja
    }
    return;
}

function limpiarCaja() {
    // El numeral se usa para que el querySelector sepa que se obtiene un elemento por el id
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = ''; // se usa para indicar que está vacío
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", "Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números, generar nuevo número secreto, Inicializar el número de intentos
    condicionesIniciales();
    // deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
