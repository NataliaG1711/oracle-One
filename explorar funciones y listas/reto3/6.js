//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numero){
    for(let i = 1; i <=10; i++){
        let resultado = numero*i;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}

let numero = 9;

tablaMultiplicar(numero);