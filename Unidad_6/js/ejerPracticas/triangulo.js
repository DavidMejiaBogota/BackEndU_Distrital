const Figura = require('./Figura.js');
class Triangulo extends Figura{
    constructor(nombre, color, alto, ancho){
        super(nombre, color);
        this.alto=alto;
        this.ancho=ancho;
    }

    saludar(){
        return `Hola, mi nombre es ${this.nombre} y color es ${this.color} mi alto es ${this.alto} y mi ancho es ${this.ancho}`;
    }
    area(){
        return `Casi lo olviddo, mi area es ${this.alto*this.ancho/2} cm2`
    }
}
const figura2 = new Triangulo("Triangulo", "Azul", 10, 15);
console.log(figura2.saludar());
console.log(figura2.area());
