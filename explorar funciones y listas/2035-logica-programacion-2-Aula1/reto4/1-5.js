//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

console.log(listaGenerica);

/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos:
 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

 let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

 //Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

 lenguajesDeProgramacion.push('Java', 'Ruby','GoLang');

 //Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" por separado.

 function mostrarLenguajesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguajesSeparadamente();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguajesReversoSeparadamente() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguajesReversoSeparadamente();

  

 