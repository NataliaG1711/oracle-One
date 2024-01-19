let rank = parseInt(prompt("Ingrese hasta que número desea jugar: "));
let secretNumber = Math.floor(Math.random() * rank)+1;
let userNumber = 0;
let attempts = 1;
let maxAttempts = prompt("¿Cuál quiere que sea el número máximo de intentos?");


while (userNumber != secretNumber) {
    userNumber =parseInt(prompt(`Ingrese un número entre el 1 y el ${rank}` ));
    
    console.log(typeof(userNumber));
    //typeof se usa para saber cuál es el tipo de dato
    if (userNumber == secretNumber) {
        // Se usan las comillas invertidas y ese formato para concatenar. Se llama template String
        alert(`¡Adivinaste! El número era ${secretNumber}. Lo hiciste en ${attempts} ${attempts == 1 ? "intento" : "intentos"}.`);
    }  //el signo de interrogación representa if y los dos puntos else (Operador ternario)
        else {
            if (userNumber > secretNumber) {
                alert("El número secreto es menor");
        }   else {
                alert("El número secreto es mayor");
            }
            attempts ++;
        //alert(`No adivinaste. El número era ${secretNumber}`);

        if (attempts > maxAttempts) {
            alert(`Llegaste al número máximo de ${maxAttempts} intentos. No adivinaste :( El número secreto era ${secretNumber}`);
            break;
        }

    }
}



