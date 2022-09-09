
const cantidadCopas= 2;
let valorIngresado = parseInt(prompt("Bienvenido \n\nEscriba cuantas copas del mundo posee Argentina :"));


while (valorIngresado != cantidadCopas) {
    
    alert("Incorrecto,ingrese un nuevo valor nuevamente.");
    valorIngresado=parseInt(prompt("Escriba cuantas copas del mundo posee Argentina :"));
}

alert("Correcto,Argentina posee 2 copas el mundo.");
