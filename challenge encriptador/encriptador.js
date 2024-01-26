
/*function encriptar(){
    let texto = document.getElementById("textoUsuario").value;//.toLowerCase(); //El .value se utiliza para obtener el contenido actual del campo de entrada.
    let resultado = ""; //se usa para almacenar el resultado cifrado
    for (let i = 0; i < texto.length; i++) {
        let cadena = texto[i]; 
        if (cadena === 'a') {
            resultado += 'ai';
        } else if(cadena === 'e'){
            resultado += 'enter';
        } else if(cadena === 'i'){
            resultado += 'imes';
        } else if(cadena === 'o'){
            resultado += 'ober';
        }else if(cadena === 'u'){
            resultado += 'ufat';
        }
        else {
            resultado += cadena;
        }
        /*Se itera a través de cada carácter del texto ingresado. Para cada carácter, se verifica la letra y si es alguna,
         se añade al resultado; de lo contrario, se añade el carácter original.
    }
    console.log(resultado);
}
*/

function encriptar() {
    // Obtener el valor del campo de entrada y convertirlo a minúsculas
    let texto = document.getElementById("textoUsuario").value;//.toLowerCase();
    let resultado = ""; // Variable para almacenar el resultado cifrado

    // Mapeo de letras a sus correspondientes secuencias cifradas
    const mapeoCifrado = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    // Iterar sobre cada carácter en el texto ingresado
    for (let i = 0; i < texto.length; i++) {
        // Obtener el carácter actual
        let caracter = texto[i];

        // Verificar si el carácter está en el mapeoCifrado
        if (mapeoCifrado.hasOwnProperty(caracter)) {
            // Si está en el mapeo, agregar la secuencia cifrada al resultado
            resultado += mapeoCifrado[caracter];
        } else {
            // Si no está en el mapeo, agregar el carácter original al resultado
            resultado += caracter;
        }
    }

    // Imprimir el resultado cifrado en la consola
    console.log(resultado);
}

function desencriptar() {
    // Obtener el valor del campo de entrada
    let texto = document.getElementById("textoUsuario").value;
    let resultado = ""; // Variable para almacenar el resultado descifrado

    // Mapeo de secuencias cifradas a sus correspondientes letras originales
    const mapeoDescifrado = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Iterar sobre cada propiedad del objeto mapeoDescifrado
    for (let secuenciaCifrada in mapeoDescifrado) {
        /*
        Se utiliza el método split para dividir el texto cada vez que encuentra la secuencia 
        cifrada, y luego se usa join para unir las partes utilizando la letra descifrada correspondiente.
        */
        texto = texto.split(secuenciaCifrada).join(mapeoDescifrado[secuenciaCifrada]);
    }

    // El resultado ahora está almacenado en la variable 'texto'
    resultado = texto;

    // Mostrar el resultado descifrado en algún lugar de la página (por ejemplo, en un div con id "resultadoDescifrado")
    console.log(resultado);
}
