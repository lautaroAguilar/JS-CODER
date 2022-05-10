//contenedores
const container = document.getElementById(`container`);
const containerText = document.getElementById(`container-text`); 
const containerButton = document.getElementById(`button-container`);
//botones
const button1 = document.getElementById(`button-1`);
const button2 = document.getElementById(`button-2`);

//button1.addEventListener(`click`,);
//button2.addEventListener(`click`,);

// ÁREA DE CREACIÓN DE FUNCIONES
function eliminarBotoneraYBienvenidos() {
    containerText.remove();
    containerButton.remove();
    
}

function crearFormulario() {
    //creo el form
    let form = document.createElement(`form`);
    container.append(form);
    form.className = `form-registro`;
    //creo los inputs y los agrego al form
    let input1 = document.createElement(`input`);
    let input2 = document.createElement(`input`);
    let input3 = document.createElement(`input`);
    let input4 = document.createElement(`input`);
    let formRegistro = document.getElementsByClassName(`form-registro`);
    input1.setAttribute(`placeholder`, "Nombre");
    input2.setAttribute(`placeholder`, "Apellido");
    input3.setAttribute(`placeholder`, "Nacionalidad");
    input4.setAttribute(`placeholder`, "Fecha de nacimiento");  
    form.append(input1);
    form.append(input2);
    form.append(input3);
    form.append(input4);
    //creo los botones y los agrego al form
    let botonReseteo = document.createElement(`a`);
    let botonRegistro = document.createElement(`a`);
    botonReseteo.className = `boton`;
    botonRegistro.className = `boton`;
    botonReseteo.innerText = `Resetear`;
    botonRegistro.innerText = `Enviar`;
    form.append(botonReseteo);
    form.append(botonRegistro);

}

//eliminarBotoneraYBienvenidos();
//crearFormulario();
console.log(container);