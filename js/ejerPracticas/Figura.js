
class Figura{ 
    constructor(nombre, color){
        
        this.nombre=nombre;
        this.color=color;
    }

    saludar(){ 
        return `Hola, mi nombre es ${this.nombre} y color es ${this.color}`;
    }
}
module.exports = Figura;