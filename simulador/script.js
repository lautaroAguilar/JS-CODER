/* Algoritmo para dar tu presente el cual se habilita con un código (546281) que se revela al final de la clase  */

/* let entrada
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
 */

//Creamos la planilla de alumnos

class Alumnos {
    constructor(nombre, apellido, edad, telefono, ) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = edad;
        this.telefono = telefono;
    }
    saludar() {
        this.saludar = `Hola, ${this.nombre} ayudanos a registrar tu asistencia.`
    }

}

let planillaAlumnos = [];

function logeoAlumnos() {
    let ingresoNombre = prompt("Ingrese su nombre").toUpperCase();
    let ingresoApellido = prompt("Ingrese su apellido").toUpperCase();
    let ingresoEdad = Number(prompt("Ingrese su edad"));
    let ingresoTelefono = Number(prompt("Ingrese su número de celular"));
    let alumnoLogeado = new Alumnos(ingresoNombre, ingresoApellido, ingresoEdad, ingresoTelefono);
    planillaAlumnos.push(alumnoLogeado);
    console.log(planillaAlumnos);
}

// Funcion para pedir el codigo al alumno/a.

function pedirCodigo() {
    let salida
    do {
        let ingresoDeCodigo = prompt(`Ingrese su codigo por favor`);
        if (ingresoDeCodigo != 546281) {
            alert(`Codigo incorrecto, intentelo nuevamente`);
            confirm(`Desea intentarlo nuevamente?`)
        } else {
            alert(`Código exitoso`);
            salida = prompt(`Escriba "ESC" para salir`).toUpperCase();
        }
    } while (salida != "ESC") {

    }
}
// 

logeoAlumnos();
console.log(planillaAlumnos);
pedirCodigo();