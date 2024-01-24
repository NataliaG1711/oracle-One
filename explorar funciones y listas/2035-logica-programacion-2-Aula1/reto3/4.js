/*
Crea una función que muestre en pantalla el área y el perímetro de una sala 
rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
*/

function area(altura, anchura) {
 return altura*anchura;
}

function perimetro(altura, anchura){
    return (2*(altura * anchura));
}

let altura = 14;
let anchura = 7;
console.log("El área es: " + area(altura, anchura));
console.log("El perímetro es: " + perimetro(altura, anchura));