// Ejemplo 9: Uso del reduce (para sumar: el acc inicia en cero y va tomando el valor
//del siguiente elemento de la lista y se suma al anterior guardado, hasta recorrer toda la lista)
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)