/**
 * Hay 3 formas de declarar variables
 * let -> variables generales
 * const -> Para valores que no cambiaran en ejecucion
 * var -> No se usa >:(
 *  */

let nombre = 'Perico';
let apellido = "Los palotes";

const pi = 3.14; // esta variable no puede ser modificada en ejecucion

//Tipos de datos
//Tipo cadena string
let variable_str = 'Esto es una cadena de caracteres o STRING';
console.log(typeof variable_str); //string

//Los tipos numericos son number
let num_entero = 3;
let num_flotante = 3.5;

console.log(typeof num_entero, typeof num_flotante) //number number

//Los boolean son o verdadero o falso
let verdadero = true;
let falso = false;

//Casting
let numero = '5';

console.log(numero);

let casting_numero = parseInt(numero);

console.log(casting_numero);
console.log(typeof casting_numero);