/*//variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntentos = "intento";

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Ingresa un numero de 1 a 10 por favor:");

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    //Acertaste
    alert(
      `Asertaste, el numero es:  ${numeroUsuario}, lo lograste en ${intentos} ${palabraIntentos}`
    );
    console.log("Correcto");
    intentos = 0;
    break;
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor" + `lleva ${intentos} intentos`);
    } else {
      alert("El numero secreto es mayor" + `lleva ${intentos} intentos`);
    }
    intentos++;
    palabraIntentos = "intentos";
    console.log("Incorrecto");
  }
}
*/

let numeroUno = 1;

while (numeroUno <= 10) {
  console.log(numeroUno);
  numeroUno++;
}

let numeroDos = 10;

while (numeroDos > 0) {
  console.log(numeroDos);
  numeroDos--;
}
