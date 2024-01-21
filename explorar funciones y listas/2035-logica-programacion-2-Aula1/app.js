//Elemento Hoisting donde hace el elemento de las variables de las funciones al inicio para que queden disponibles
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    /*es un método para acceder a los elementos del html, donde se le dice a la cantidad de elementos que hay
    donde se le pasa un nombre ( de etiqueta en este caso), donde se le atribuye a una variable (siendo un objeto) donde 
    se pueden realizar diferentes cosas
    Es parte del DOM: Document Object Model
    */
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto; 
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario === numeroSecreto);
    return;
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");