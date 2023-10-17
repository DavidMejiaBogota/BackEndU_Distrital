const persona = {
    nombre : "Norbey",
    apellido: "Muñoz",
    edad: 100,
    hablar: function() {
        msj = `Hola, mi nombre es ${this.nombre}`;
        return msj;
    }
}

console.log(persona.hablar());
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona);

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

persona.tel = 123456789;
console.log(persona);

persona.nombre = "Juan";
console.log(persona);

delete persona.tel;
console.log(persona);

let personaArray = Object.values(persona);
console.log(personaArray);
