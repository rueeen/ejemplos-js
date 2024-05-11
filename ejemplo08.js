// Creando listas o tambien llamaddos en js ARRAYS

let nombre = []; //Lista vacia

let numeros = [10, 20, 5, 33, 22];
//  indices     0   1  2   3   4

console.log(numeros[3]); //33
console.log(numeros['2']); //5 js agarra indices como str

console.log(numeros['cuatro']); //undefined no existe el indice cuatro
console.log(numeros['02']); //undefined no existe el indice '02' pero si el '2'
console.log(numeros[5]); //undefined no existe indice 5

let frutas = ['manzana', 'naranja', 'tomate', 'piña', 'uva'];

console.log(frutas.length);
console.log(frutas[frutas.length - 1]); // 5 - 1 ->  4

console.table(frutas);