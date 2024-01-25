/*
Crea una función que muestre en pantalla el área y el perímetro 
de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

function areaYperimetro(radio){
    let pi = 3.14;
    let area = pi*(radio**2);
    let perimetro = 2*pi*radio;
    console.log(`El area del circulo es ${area}`);
    console.log(`El perimetro de un circulo es ${perimetro}`);
}

let radio = 3;
areaYperimetro(radio);
