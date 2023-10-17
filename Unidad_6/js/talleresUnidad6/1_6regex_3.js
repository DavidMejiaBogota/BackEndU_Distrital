let miRegex = /^[A-C]\w+\ses\s\w+/;
let cadenas = ['Juan es guapo', 'Adriano no es feo', 'Adriano deja de ser guapo', 'Adriano ya es guapo', 'No es ahora', 'Ahora es no', 'Adriano es gupao'];
for (i of cadenas) {
    sal = `¿Contiene ${i} el patrón: ${miRegex.test(i)}`;
    console.log(sal);
}