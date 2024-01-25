/*
Crea una función que convierta un valor en dólares, pasado como 
parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor
del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/
let dolar = 50;
function conversion(dolar){

    return dolar * 3954
}

console.log(`la conversión de ${dolar} ${(dolar == 1) ? "dolar" : "dolares"} es de ${conversion(dolar)} pesos colombianos `);