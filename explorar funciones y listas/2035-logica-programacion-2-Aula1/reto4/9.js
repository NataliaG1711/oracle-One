/*Crea una función que devuelva la posición en la
 lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
 */

 function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }