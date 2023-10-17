const carro = {
    marca: "Chevrolet",
    modelo: "69",
    año: 2020,
    color: "rojo",
    descripcion() {
        return `Hola, mi marca es ${this.marca} soy modelo ${this.modelo} y mi color es ${this.color}`;
    }
}

console.log(carro.descripcion());