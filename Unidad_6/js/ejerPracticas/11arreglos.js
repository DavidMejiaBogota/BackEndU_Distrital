const autos = ["BMW", "Mercedes Bens", "Volvo"];
console.log(autos);

console.log(autos[2]);

for (let contador = 0; contador < autos.length; contador++) {
    console.log(contador + ':' + autos[contador]);
}
for (const ite of autos) {
    console.log(ite);
}

for (let index in autos) {
    console.log(index + ':' + autos[index]);
}

autos.forEach((auto) => {
    console.log(auto);
});

