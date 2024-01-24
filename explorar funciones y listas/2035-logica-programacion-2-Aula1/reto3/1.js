/*
Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/

let altura = 1.72;
let peso = 65;
function IMC(altura, peso) {

    return peso/(altura**2);
}

console.log(IMC(altura,peso));