//ESTRUCTURAS DE CONTROL

// instruccion if

let edad = parseInt(prompt('Ingrese su edad')) //Esto siempre devuelve string, con parseInt lo tranformarmos en entero

console.log(typeof edad); //imprime number

if(edad >= 18){
    //bloque del if, se ejecuta si es verdadero
    console.log('Usted es mayor de edad');
}
else{
    //bloque falso
    console.log('Usted es menor de edad');
}

//Ingrese 2 numeros, imprimir si son iguales o el mayor de ellos
n = parseFloat(prompt('Ingrese un numero'));
m = parseFloat(prompt('Ingrese otro numero'));

if(n === m){
    console.log('Son iguales');
}
//Podemos tener cuantos else if queramos
else if(n > m){
    console.log(n, 'es mayor que', m);
}
else{
    console.log(m + 'es mayor que' + n)
}