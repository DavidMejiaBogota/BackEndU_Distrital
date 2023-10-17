let numero = "1";
if(numero === 1){
    console.log("El numero es 1");
}

let contador = 0;

while(contador <= 10){
    console.log(contador);
    contador++;
}

do {
    console.log(contador);
    contador++;
}while(contador < 4);

console.log(contador);

for (let i = 0; i <=10; i++) {
    if(i%2 ==0){
        console.log(i);
        break
    }
    console.log(`Fin del cliclo for con Break`);
}

for (let j = 0; j<=10; j++) {
    if(j%2 !==0){
        console.log(j);
        continue;
    }
    console.log(j);
}