const carro = {
    marca: "Chevrolet",
    modelo: "69",
    año: 2020,
    color: "rojo",
    descripcion() {
        for (let propiedad in carro) {
            return [propiedad] ;
        }
        
    }

    
}

console.log(carro.descripcion());