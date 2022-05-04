// obtengo los calores del form para crear objetos con ellos

let contenedor = document.getElementById(`contenedor-form`);
let formulario = document.getElementById(`formulario`);


formulario.addEventListener(`submit`, (e) => {
    e.preventDefault();
    //obtenemos los valores de los inputs 
    const inputs = e.target.querySelectorAll(`input`);
    
    class Alumnos {
        constructor(nombre, apellido, fechaDeNacimiento, nacionalidad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.fechaDeNacimiento = fechaDeNacimiento;
            this.nacionalidad = nacionalidad;

        }
            
    }
    //mando al alumno a la planilla
    let planillaAlumnos = [];

    let alumno = new Alumnos(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    
    planillaAlumnos.push(alumno);

    console.log(planillaAlumnos);
    let contenedor = document.getElementById(`contenedor-form`);

    let h1 = document.createElement("h1");
    h1.innerText = `Hola ` + alumno.nombre + ` esta es tu ficha`;
    contenedor.append(h1);
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
    contenedor.append(ul);
});

