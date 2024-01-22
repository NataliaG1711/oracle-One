//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

let num1 = 8;

let num2 = 10;

function mayor(num1, num2){

    if(num1>num2){
        return num1;
    }
    else{
        return num2
    }

}

console.log(mayor(num1,num2));