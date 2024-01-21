//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let headline = document.querySelector("h1");

headline.innerHTML = "Hora del desafio";

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function Console(){
    console.log("El botón fue clicado");
}

/*
Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
 Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
*/

function Prompt(){
    let city = prompt("Ingrese el nombre de una ciudad de brasil");
    alert(`Estuve en ${city} y me acordé de ti`);
}

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function Alert(){
    alert("Definitivamente no amo js");
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function Sum(){
    let num1 = parseInt(prompt("Ingresa un número"));
    let num2 = parseInt(prompt("Ingresa otro número"));
    let resultado = num1 + num2;
    
    alert(`La suma entre ${num1} y ${num2} es: ${resultado}`);

}

