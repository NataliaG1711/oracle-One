alert("Bienvenida  y bievenido a nuestro sitio web!");

let name = prompt("Ingrese su nombre");
let age = prompt("Ingrese su edad");

if (age >= 18 ){
    alert("Hola " + name + " Ya puedes sacar tu licencia de conducir :) " );
}
else{
    alert( name +" No eres mayor de edad, por lo tanto no puedes sacar tu licencia de conducir")
}