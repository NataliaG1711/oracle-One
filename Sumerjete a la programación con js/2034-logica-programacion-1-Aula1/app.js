
let secretNumber = Math.floor(Math.random() * 21);
let userNumber = 0;
let attempts = 1;
let maxAttempts = prompt("¿Cuál quiere que sea el número máximo de intentos?");

while (userNumber != secretNumber) {
    userNumber = prompt("Ingrese un número entre el 0 y el 20");
    console.log(userNumber);

    if (userNumber == secretNumber) {
        // Se usan las comillas invertidas y ese formato para concatenar. Se llama template String
        alert(`¡Adivinaste! El número era ${secretNumber}. Lo hiciste en ${attempts} ${attempts == 1 ? "intento" : "intentos"}.`);
    } else {
        if (userNumber > secretNumber) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        attempts ++;
        //alert(`No adivinaste. El número era ${secretNumber}`);

        if (attempts > maxAttempts) {
            alert(`Llegaste al número máximo de ${maxAttempts} intentos`);
            break;
        }

    }
}


