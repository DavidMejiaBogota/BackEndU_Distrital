
class Figura{ 
    constructor(nombre, color){
        
        this.nombre=nombre;
        this.color=color;
    }

    saludar(){ 
        return `Hola, mi nombre es ${this.nombre} y color es ${this.color}`;
    }
}

const figura1 = new Figura("Figura", "Rojo");
console.log(figura1.saludar());

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
