let numeros = [1, 2, 3, 4, 5];
 
let eliminado = numeros.pop(2); //Elimina solo el ultimo

console.log(eliminado); //5
console.table(numeros); //[1, 2, 3, 4]

eliminado = numeros.shift(2);

console.log(eliminado); //1
console.table(numeros); //[2, 3, 4]

//modificar un elemento del array
numeros[1] = 20;
console.table(numeros); //[2, 20, 4]

//CUIDADO CON ESTO
numeros[20] = 3;
console.table(numeros); //[2, 20, 4, , , , , , , , , , ,3]

console.log(numeros.length) //21

//Recorriendo arraey
let nombres = ['Prico', 'Maria', 'Periquin', 'Mike']

//recorriendo por for y sus indices
for(let i = 0; i < nombres.length; i++){
    console.log('El indice es ' + i + ' y su valor es ' + nombres[i]);
    console.log(`El indice es ${i} y su valor es ${nombres[i]}`);
}

//recorriendo por foreach
nombres.forEach(function(i){
    console.log(`Imprimiendo por valor ${i}`);
});