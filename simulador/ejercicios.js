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
    constructor(nombre, apellido, edad, telefono, contrasenia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.contrasenia = contrasenia;
    }
    saludar() {
        this.saludar = `Hola, ${this.nombre} ayudanos a registrar tu asistencia.`
    }

}



const alumno1 = new Alumnos("German", "Baez", 20, 1122501012, "rojo");
const alumno2 = new Alumnos("Agustin", "Lazarte", 20, 1122502191, "azul");
const alumno3 = new Alumnos("Fernando", "Rodriguez", 20, 1122503182, "amarillo");
const alumno4 = new Alumnos("Florencia", "Lazarte", 20, 1122504511, "verde");
const alumno5 = new Alumnos("Pilar", "Sosa", 20, 1122505567, "celeste");
const alumno6 = new Alumnos("Luciana", "Lousteau", 20, 1122506111, "naranja");

let planillaAlumnos = [];

planillaAlumnos.push(alumno1, alumno2, alumno3, alumno4, alumno5, alumno6);

// funcion para registrarse, por el momento no la voy a usar porque no tengo manera de que me queden guardados estos datos, solo para el desafio.


function registroAlumnos() {
    let ingresoNombre = prompt("Ingrese su nombre");
    let ingresoApellido = prompt("Ingrese su apellido");
    let ingresoEdad = Number(prompt("Ingrese su edad"));
    let ingresoTelefono = Number(prompt("Ingrese su número de celular"));
    let contraseniaRegistrada = prompt("Ingrese su contraseña");
    let alumnoRegistrado = new Alumnos(ingresoNombre, ingresoApellido, ingresoEdad, ingresoTelefono, contraseniaRegistrada);
    
    planillaAlumnos.push(alumnoRegistrado);
    //console.log(planillaAlumnos);
}



/* do {
    alert(`Hola, resgistre un alumno en la planilla.`);
    registroAlumnos();
    seguir = prompt("desea agregar otro alumno").toLowerCase();
} while (seguir == "si")

console.log(planillaAlumnos);

let buscarAlumno = prompt(`Ingrese el nombre del alumno que desea buscar`);
let busquedaNombre = planillaAlumnos.filter(alumno => alumno.nombre == buscarAlumno)
console.log(busquedaNombre); */




// Funcion para pedir el codigo al alumno/a.

/* function pedirCodigo() {
    let salida
    do {
        let ingresoDeCodigo = prompt(`Ingrese su codigo por favor`);
        if (ingresoDeCodigo != 546281) {
            alert(`Codigo incorrecto, intentelo nuevamente`);
            confirmacion = confirm(`Desea intentarlo nuevamente?`);
            if (confirmacion != true) {
                break;
            }
        } else {
            alert(`Código exitoso`);
            salida = prompt(`Escriba "ESC" para salir`).toUpperCase();
        }
    } while (salida != "ESC") {

    } 
}*/


/* registroAlumnos();
console.log(planillaAlumnos);
pedirCodigo(); */

/* alert(`Hola, ${entradaNombre} ayudanos a registrar tu asistencia.`);
    let entradaContrasenia = prompt(`${entradaNombre} ingrese su contraseña por favor`);
    busquedaContrasenia = planillaAlumnos.find((el) => el.contrasenia == entradaContrasenia);
    console.log(busquedaContrasenia);
} if (busquedaContrasenia == entradaContrasenia) {
    do {
        let confirm = confirm("Lo sentimos, su contraseña es incorrecta. Deseo intentarlo nuevamente?");
    }
        while (confirm == true) {
        
    }
} else {
    
        alert(`Contraseña correcta ${entradaNombre}`)
     */