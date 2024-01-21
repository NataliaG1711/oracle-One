//Elemento Hoisting donde hace el elemento de las variables de las funciones al inicio para que queden disponibles


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
/*es un método para acceder a los elementos del html, donde se le dice a la cantidad de elementos que hay
donde se le pasa un nombre ( de etiqueta en este caso), donde se le atribuye a una variable (siendo un objeto) donde 
se pueden realizar diferentes cosas

Es parte del DOM: Document Object Model
*/
elementoHTML.innerHTML = texto; 
}

function userAttempt(){
    alert("click desde el boton");
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");