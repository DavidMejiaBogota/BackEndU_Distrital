let palabra = [
    "edificio",
    "perla",
    "estrella",
    "pescado",
    "salero",
    "biblioteca",
    "guitarra",
    "dinero",
    "musica",
];

function sustantivosF_M(palabra = []) {
    const regex = /a$/i;

    for (const str of palabra) {
        regex.test(str)
        ? console.log(`La palabra ${str} es un sustantivo de femenino`)
        : console.log(`La palabra ${str} es un sustantivo de masculino`);
    }
}

sustantivosF_M(palabra);

///Ejercicio 2

function validEmail() {
    let correo = `norbeyconagua@hotmail.com`;
    let validarEmail = /\w+@\w+\.(.com|edu|gov)*.[a-zA-Z]{2}/;

    if (validarEmail.test(correo)) {
        console.log(`El correo ${correo} es valido`);
        return true;
    } else {
        console.log(`El correo ${correo} es invalido`);
    }
}
validEmail();