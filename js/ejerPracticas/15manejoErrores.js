/*Manejo de errores.
El manejo de errores con Javascript se realiza por medio de la declaración try…catch, el try es utilizado para definir un bloque de instrucciones que deben ser ejecutadas y en caso de que se presente algún error, se ejecutan las instrucciones definidas en el bloque catch.
*/

//Ejemplo sin error

console.log("-----------------Ejemplo sin error----------------------")

try {
    //Si no hay ningun error se ejecuta el bloque try
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${suma}`);
} catch (err) {
    //Si encuentra un error ejecuta el siguiente codigo
    console.log('Hay un error!');
}

//Ejemplo con error

console.log("-----------------Ejemplo con error----------------------")

try {
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${resultado}`);
    //Variable resultado no definida
} catch (err) {
    console.log('Hay un error!');
}

/*Finally: Es el bloque de código que siempre se ejecuta al finalizar el try..catch*/

console.log("-----------------Bloque finally----------------------")

try {
    console.log("En el try se agrega el codigo a evaluar")
    noExiste; //genera un error porque noExiste no esta definida
    console.log("Segundo mensaje en el try")
} catch (error) {
    console.log("Catch captura cualquier error que surga en el try")
    console.log(error) //imprime el error
} finally {
    console.log("Finally se ejecuta siempre al final de un bloque try-catch")
}

//Personalizacion de mensajes de error

console.log("-----------------Personalización mensajes de error----------------------")

try {
    let numero='y'
    if(isNaN(numero)){ //El metodo isNaN() evalua si la variable es de tipo numererico o no
        //Definición del nuevo mensaje de error  throw new Error()
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero*numero)
} catch (error) {
    console.log(`Se produjo el siguiente ${error}`)
}


//Ejercicio 1
/*Según lo anterior haga un código reciba números con manejo de errores. Si el valor ingresado
no es numérico debe enviar el mensaje:
“¡Cuidado! No se reciben datos no numéricos.”
Siempre al finalizar de ejecutar el código debe mostrar el mensaje:
“Análisis de datos terminado.”
*/
try{
    let number1 = `y`
    if(isNaN(number1)){
        throw new Error("Cuidado! No se reciben datos no numericos");
    }
} catch(error){
    console.log(`${error}`)
} finally{
    console.log("Análisis de datos terminado")
}

//Ejercicio 2
/*
Realice un código que realice una calculadora científica con las siguientes operaciones:
a. Suma
b. Resta
c. Multiplicación
d. División.
e. Potencia.
f. Raíz cuadrada.
Que tenga manejos de errores para las operaciones teniendo en cuenta que:
-La división por cero no es posible.
-La calculadora solo acepta entradas numéricas.
*/

function calculadoraCientifica (operacion, numero_1, numero_2) {
    try{
        //verificar si las entradas son númericas
        if (isNaN(numero_1) || isNaN(numero_2)) {
            throw new Error("Las entradas deben ser numéricas");
        }
        switch (operacion) {
            case "suma":
                return numero_1 + numero_2;
                break;
            case "resta":
                return numero_1 - numero_2;
                break;
            case "multiplicacion":
                return numero_1 * numero_2;
                break;
            case "division":
                if (numero_2 === 0) {
                    throw new Error("No se puede dividir por cero");
                }
                return numero_1 / numero_2;
                break;   
            case "potencia":
                return numero_1 ** numero_2;
                break;
            case "raiz":
                if (numero_1 < 0) {
                    throw new Error("No se puede calcular la raíz de un número negativo");
                }
                return Math.sqrt(numero_1);
                break;
            default:
                throw new Error("Operación no válida");
            
        return resultado;
        }
    } catch (error) {
         return error.message;
    }
}

console.log(calculadoraCientifica('suma', 5, 3)); // Suma
console.log(calculadoraCientifica('division', 8, 0)); // División por cero
console.log(calculadoraCientifica('raiz', -4, 2)); // Raíz de número negativo