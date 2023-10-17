let miRegEx = /as?.a/;
//let cadena = `casamentero`;
let msg =`as?.a /n`;

let cadenas = ['casamentero', 'castaño', 'sabina', 'casualidad', 'asa', 'casta', 'asador', 'Castana', 'Java'];

for (i of cadenas) {
    salida = `Contiene ${i} el patrón ${msg} : ${miRegEx.test(i)}`;
    console.log(salida);
}

