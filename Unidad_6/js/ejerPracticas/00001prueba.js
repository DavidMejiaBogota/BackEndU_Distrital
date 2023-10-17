let docenas = 11;
let venta = 1000 * docenas;
let descuento;

if (docenas > 10) { 
    descuento = venta * -0.20 + venta;
}else if (docenas >=  5) {
    descuento = venta * -0.15  + venta;
} else if (docenas >  1) {
    descuento = venta * -0.10  + venta;
}

console.log(descuento);




    //Una tienda comenzó una oferta para ventas al
    //20% Para compras mayores a 10 docenas.***
    //15% Para compras mayores o iguales a 5 docenas. **
    //10% Para compras mayores a 1 docena.
    //Se desea determinar cuál es descuento dado una cantidad de decenas
    //Imprima tambien cual es el valor de la compra si cada docena cuesta 60.000