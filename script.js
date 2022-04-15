/* Algoritmo para dar tu presente el cual se habilita con un código (546281) que se revela al final de la clase  */

let entrada
let código = 546281;
let entradaCódigo
let error = "No se ingresó un código numérico";
let salida = "SALIR"

function solicitarNombre() {
    entrada = prompt("Ingrese su nombre").toUpperCase();
    alert("Hola" + " " + entrada);
}
function solicitarCódigo() {
    entradaCódigo = parseInt(prompt("Ingresar el código")); 
    if (entradaCódigo == código) {
        alert("Su asistencia se pasó correctamente");
    } else if (entradaCódigo != código) {
        alert("Su código es incorrecto, intentelo nuevamente.");
        salida = parseInt(prompt("Vuelva a escribir el código. Si desea salir escriba esa palabra")).toUpperCase(); 
    } else alert(error);
}


solicitarNombre();
do {
    solicitarCódigo();
} while(salida != "SALIR") {
    
}


/* while (entrada != "SALIR") {
    alert("Hola" + " " + entrada + " " + "ingrese el código para obtener el presente");
    let código = parseInt(prompt("ingrese su código de verificación"));
    if (código == 546281) {
        alert("Su asistencia fue pasada correctamente");
    } else {
        error = alert("Error, su código no es correcto");
        salida = prompt("Sí desea salir, sólo escriba esa palabra. Si desea volver a intentarlo, escriba la palabra seguir.").toUpperCase();
    }
    switch (salida) {
        case "SEGUIR":
            entrada = prompt("Ingrese su nombre nuevamente");
            break;
        case "SALIR":
            alert("Usted decidió salir.");
            break;
        default:
            ;
            break;
    }
    entrada = prompt("Si decidio seguir, escriba su nombre nuevamente. De lo contrario, escriba salir.").toUpperCase();
} */


/* do {
        salida = prompt("Sí desea salir, sólo escriba esa palabra. Si desea volver a intentarlo, escriba la palabra seguir.").toUpperCase();
    } while (salida != "SALIR") {
        
    }
    entrada = prompt("Ingrese su nombre nuevamente").toUpperCase() */