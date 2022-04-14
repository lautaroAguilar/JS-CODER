/* Algoritmo para dar tu presente el cual se habilita con un código (546281) que se revela al final de la clase  */

let entrada = prompt("Ingrese su nombre").toUpperCase();
let código = 546281
let error 
let salida

while (entrada != "SALIR") {
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
            alert("recargue la página");
    }
    entrada = prompt("confirme su decision").toUpperCase();
}


/* do {
        salida = prompt("Sí desea salir, sólo escriba esa palabra. Si desea volver a intentarlo, escriba la palabra seguir.").toUpperCase();
    } while (salida != "SALIR") {
        
    }
    entrada = prompt("Ingrese su nombre nuevamente").toUpperCase() */