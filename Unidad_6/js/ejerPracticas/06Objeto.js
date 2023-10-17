/*Objetos
Los objetos son conjunto de propiedades, en donde las propiedades tienen asociadas un nombre y un valor*/

const persona={ //Definición del objeto persona
    //Definición de las propiedades
    nombre:"Beatriz",
    apellido:"Colón",
    edad:39,
    soltera:true,
    //Se pueden agregar objetos dentro de objetos
    contacto:{
        email:"beatriz@example.com",
        tel:["123456", "987654", "654321"] 
    },
    //Se pueden agregar funciones dentro de los objetos
    saludar: function(){
        console.log("Hola! :)")
    },
    llamar: function(){
        //this nos permite hacer referencia a la instancia actual
        return `llamame al ${this.contacto.tel}`;
    }
}

/*Para acceder a una propiedad del objeto se hace de la siguiente manera
nombreObjeto.nombrePropiedad*/

console.log(`Hola, mi nombre es ${persona.nombre} y mi edad es ${persona.edad}, mi correo electronico es ${persona.contacto.email}`);

//Para llamar la función dentro del objeto utilizamos el . tambien
console.log(persona.llamar());

/*Se pueden recorrer las propiedades de un objeto utilizando el ciclo for*/

console.log("-----------------Recorrer un objeto----------------------")

//For in: loop que permite recorrer las propiedades de un objeto

const mario={ //Objeto mario
    //Propiedades
    nombre:"Mario",
    apellido:"Mendoza",
    edad:42       
}

//Por cada llave en el objeto mario se imprimira la llave y el valor
for (const key in mario) {
    console.log(`Llave: ${key}, Valor: ${mario[key]}`)

    const carro = {
        marca: "Chevrolet",
        modelo: "69",
        año: 2020,
        color: "rojo",
        descripcion() {
            console.log(`Hola, mi marca es ${this.marca} soy modelo ${this.modelo} y mi color es ${this.color}`);
        }
    }
}