// Se crea un arreglo llamado 'arreglo' que contiene los elementos "1", "2" y "3".
const arreglo  = ["1", "2", "3"];

// Se crea un segundo arreglo llamado 'arreglo_dos' que contiene los elementos "A", "B" y "C".
const arreglo_dos = ["A","B","C"];

// Se utiliza el método 'concat' para combinar los elementos de los dos arreglos.
// El resultado es un nuevo arreglo llamado 'arreglo_3', que incluye todos los elementos de 'arreglo' seguidos por los de 'arreglo_dos'.
const arreglo_3 = arreglo.concat(arreglo_dos);

// Se imprime el contenido del arreglo 'arreglo_3' en la consola.
// El resultado será: ["1", "2", "3", "A", "B", "C"]
console.log(arreglo_3);
