/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------")
const a= Array(100).fill(false) 
console.log(a)

const colores =["Rojo", "Azul", "Gris"]
console.log(colores)

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------")
colores.push("Verde")
console.log(colores)

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------")
colores.pop()
console.log(colores)

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------")
const copiaColores =colores.slice();
console.log(copiaColores)

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------")
console.log(colores.length)

let myNumbers=[];


//ejercicio 1
for (let i = 1; i <= 100; i++) {

    myNumbers.push(i)  
}
console.log(myNumbers)

//ejercicio 2

for (let i = 2; i <= 100; i+=2) {

    myNumbers.push(i)  
}
console.log(myNumbers)
let order1 = [23, 12, 5];
console.log(order1.sort());

let order=[23, 5, 12];

console.log(order.sort((a,b)=>a-b))

//Ejercicio 3
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    altura: 1.80,
    peso: 80,
}

const {nombre, apellido, edad, altura, peso} = persona;

console.log(nombre, edad, apellido, edad, altura, peso);

const semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]; 
