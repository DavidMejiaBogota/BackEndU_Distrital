const Figura = require("./Figura.js");
class Circulo extends Figura{
    constructor(nombre, color, radio){
        super(nombre, color);
        this.radio=radio;
    }

    saludar(){
        return `Hola, soy un  ${this.nombre} y color es ${this.color} mi radio es ${this.radio}`;
    }
}
const figura3 = new Circulo("Circulo", "Verde", 10);
console.log(figura3.saludar());