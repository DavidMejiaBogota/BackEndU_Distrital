/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------")

const numeros=[1,2,3]
let uno=numeros[0],
dos=numeros[1],
tres=numeros[2]

console.log(uno,dos,tres)

//Con destrucrturacion

console.log("--------------Con destructuración-------------------")

const [one, two, three]=numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one,two,three)

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona={
    nombre: "Ana",
    apellido: "Santos",
    edad: 23
}

const {nombre, apellido, edad}=persona; //deben tener el mismo nombre del la llave del objeto

console.log(nombre,apellido,edad)

// ejercicio 1

const semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]; 
const [diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete]=semana;

console.log(diaUno,diaDos,diaTres,diaCuatro,diaCinco,diaSeis,diaSiete);

for (let i = 0; i < 10; i++) {
    console.log(`Hola! soy un ciclo for y voy en el número ${i}`);
}

// ejercicio 2

const mascota = {
    Nombre: "Paco",
    Edad: "10",
    Tamanio: "Grande",
    Color: "Negro",
}

const {Nombre, Edad, Tamanio, Color} = mascota;

console.log(Nombre, Edad, Tamanio, Color);
