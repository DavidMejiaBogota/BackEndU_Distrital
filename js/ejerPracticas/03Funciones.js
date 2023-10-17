function miFunction(a, b){
    console.log(`Suma: ${a+b}`);
}

function suma(num1, num2){
    let resultado;
    resultado = num1 + num2;
    return resultado;
}

const p =a => a +100;
console.log(p(10));

let x = (function(a, b){
    return a + b + 100;
});

// Declaración de una función llamada 'sumar' que toma dos parámetros 'valor1' y 'valor2'
function sumar(valor1, valor2) {
    // Realiza la operación de suma y guarda el resultado en una variable 'resultado'
    let resultado = valor1 + valor2;
  
    // Devuelve el resultado
    return resultado;
  }

  // Ejemplo de uso de la función 'sumar'
let numero1 = 5;
let numero2 = 3;
let resultadoSuma = sumar(numero1, numero2);
console.log("La suma es: " + resultadoSuma); // Esto imprimirá "La suma es: 8" en la consola

function restar(valor1, valor2){
    let resultado = valor1 - valor2;
    return resultado;  
}

let resultadoResta = restar(numero1, numero2);
console.log("Resta: " + resultadoResta);

function deUSaPesos(dolar, pesos){
    let cambio = dolar * pesos;
    return cambio;
}

let cambio = deUSaPesos(4317, 3);

console.log(cambio);

function areaTriagular(base, altura){
    let area = (base * altura) /2;
    return area;
}

let baseTriagular = 4;
let alturaTriagular = 4;
let areaTriangulo = areaTriagular(baseTriagular, alturaTriagular); 

console.log("El área del triángulo es: " + areaTriangulo);

const relacion = function(a, b){
    if (a > b) {
        return 1;
    }else if (a < b) {
        return -1;
    }else {
        return 0;
    }
};

console.log(relacion(5, 3));
console.log(relacion(3, 5)); 
console.log(relacion(4, 4));


(function(num){
    num%2==0 ? console.log("par") : console.log("impar")
    })(3);

(function(num){
    if (num%2==0) {
        console.log("par");
    }else {
        console.log("impar");
    }
})(2);