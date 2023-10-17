// Expresiones regulares

expReg1 = /^[0-9]+/; //Debe iniciar con un número entre 0 y 9 y puede estar una o más veces
if (expReg1.test(`0123`) == false) {
    console.log(`Es falso`);
} else {
    console.log(`Es verdadero`);
}

expReg2 = new RegExp(`^[0-9]+`); 
if (expReg2.test(`-123`) == false) {
    console.log(`Es falso`);
} else {
    console.log(`Es verdadero`);
}