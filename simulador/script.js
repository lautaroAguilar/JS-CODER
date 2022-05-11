//contenedores
const container = document.getElementById(`container`);
const containerText = document.getElementById(`container-text`);
const containerButton = document.getElementById(`button-container`);
//botones
const button1 = document.getElementById(`button-1`);
const button2 = document.getElementById(`button-2`);

button1.addEventListener(`click`, (e) => {
    e.preventDefault();

    eliminarBotoneraYBienvenidos();
    crearFormulario();
    obtenerValoresInputsEnviarlosAlArrayYStorage();
});
//button2.addEventListener(`click`,);

// ÁREA DE CREACIÓN DE FUNCIONES
function eliminarBotoneraYBienvenidos() {
    containerText.remove();
    containerButton.remove();

}
//FN crearFormulario
let form = ``;

function crearFormulario() {
    //creo el form
    form = document.createElement(`form`);
    container.append(form);
    form.className = `form-registro`;
    //creo los inputs y los agrego al form
    let input1 = document.createElement(`input`);
    let input2 = document.createElement(`input`);
    let input3 = document.createElement(`input`);
    let input4 = document.createElement(`input`);
    form.append(input1);
    form.append(input2);
    form.append(input3);
    form.append(input4);
    //les doy una class
    input1.className = `input`;
    input2.className = `input`;
    input3.className = `input`;
    input4.className = `input`;
    //les doy un ID
    input1.setAttribute(`id`, "input1");
    input2.setAttribute(`id`, "input2");
    input3.setAttribute(`id`, "input3");
    input4.setAttribute(`id`, "input4");
    //les doy su placeholder
    input1.setAttribute(`placeholder`, "Nombre");
    input2.setAttribute(`placeholder`, "Apellido");
    input3.setAttribute(`placeholder`, "Nacionalidad");
    input4.setAttribute(`placeholder`, "Fecha de nacimiento");
    //creo los botones y los agrego al form
    let botonReseteo = document.createElement(`button`);
    let botonRegistro = document.createElement(`button`);
    botonReseteo.className = `boton`;
    botonRegistro.className = `boton`;
    botonReseteo.setAttribute(`id`, `boton-reseteo`);
    botonRegistro.setAttribute(`id`, `boton-registro`);
    botonReseteo.innerText = `Resetear`;
    botonRegistro.innerText = `Registrarme`;
    form.append(botonReseteo);
    form.append(botonRegistro);

}

//FN obtenerValoresInputsYEnviarlosAlArray

//obtengo los inputs
let inputs = document.getElementsByClassName(`input`);
//creo el array de objetos Alumnos
let planillaAlumnos = [];
let alumno = ``;
let alumnosEnJSON = ``;

function obtenerValoresInputsEnviarlosAlArrayYStorage() {
    form.addEventListener(`submit`, (e) => {
        e.preventDefault();

        class Alumnos {
            constructor(nombre, apellido, nacionalidad, fechaDeNacimiento) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.nacionalidad = nacionalidad;
                this.fechaDeNacimiento = fechaDeNacimiento;
            }

        }

        alumno = new Alumnos(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
        planillaAlumnos.push(alumno);
        //console.log(planillaAlumnos);
        alumnosEnJSON = localStorage.setItem(`alumnos_registrados`, JSON.stringify(planillaAlumnos));
        //mostramos la ficha del alumno registrado
        mostrarFicha();
    })
}

//FN mostrar ficha
function mostrarFicha() {

    let h1 = document.createElement("h1");
    h1.innerText = `Hola ` + alumno.nombre + ` esta es tu ficha`;
    container.append(h1);
    let ul = document.createElement(`ul`);

    let li1 = document.createElement(`li`);
    li1.innerText = `Nombre:` + alumno.nombre;
    let li2 = document.createElement(`li`);
    li2.innerText = `Apellido:` + alumno.apellido;
    let li3 = document.createElement(`li`);
    li3.innerText = `Fecha de nacimiento:` + alumno.fechaDeNacimiento;
    let li4 = document.createElement(`li`);
    li4.innerText = `Nacionalidad:` + alumno.nacionalidad;

    ul.append(li1, li2, li3, li4);
    container.append(ul);
}