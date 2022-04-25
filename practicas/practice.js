/* OBJETOS */
/* clase que cree objetos a partir de un constructor */
/* class Autos {
    constructor(marca, color, modelo, año) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.año = año;
    }

}
const cronos = new Autos("Fiat", "Rojo", "Cronos", 2019);
const toro = new Autos("Fiat", "Negro", "Toro", 2021);
const strada = new Autos("Fiat", "gris", "Strada", 2018);
 */

/* ARRAYS */

/* class Alumno {
    constructor(nombre, apellido, edad, añoIngreso, asistencias) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.añoIngreso = añoIngreso;
        this.asistencias = asistencias;
    }

    saludar() {
        console.log("Hola, soy" + " " + nombre + " " + apellido);
    }

}

const alumnos = [];

alumnos.push(new Alumno("Germán", "Bergara", 21, 2014, 14));


console.log(alumnos[0]).saludar(); */

const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, )

console.log(total)