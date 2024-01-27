
function encriptar(){
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
         se añade al resultado; de lo contrario, se añade el carácter original.*/
    }
    console.log(resultado);
    document.getElementById("salidaTexto").innerText = resultado;
    limpiarCaja();
}

function desencriptar(){
    let texto = document.getElementById("textoUsuario").value;
    let resultado = "";

    for(let i = 0; i < texto.length; i++){
        let cadena = texto[i]
        if(cadena === "a"){
            resultado = resultado + "a"
            i = i+1;
        }
        else if(cadena === "e"){
            resultado = resultado + "e"
            i = i+4;
        }
        else if(cadena === "i"){
            resultado = resultado + "i"
            i = i+3;
        }
        else if(cadena == "o"){
            resultado = resultado + "o"
            i = i+3;
        }
        
        else if(cadena == "u"){
            resultado = resultado + "u"
            i = i+3;
        }
        else{
            resultado = resultado + cadena;
        }
        
    }
    console.log(resultado) ;
    document.getElementById("salidaTexto").innerText = resultado;
    limpiarCaja();
}
    

function limpiarCaja(){
    let valorCaja = document.getElementById("textoUsuario");
    valorCaja.value ="";

}

function limpiarTextArea(){
    let valorTextArea = document.getElementById("salidaTexto");
    valorTextArea.value = "";
}

function copiar(){
    let textarea = document.getElementById("salidaTexto");

            // Seleccionar el contenido del textarea
            textarea.select();

            // Copiar el texto al portapapeles
            document.execCommand("copy");

            // Deseleccionar el textarea
            textarea.setSelectionRange(0, 0);
            //limpiarTextArea();
            // Mostrar un mensaje o realizar cualquier acción adicional
            //alert("Texto copiado: " + textarea.value);
    
}