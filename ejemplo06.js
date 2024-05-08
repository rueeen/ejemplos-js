//ESTRUCTURAS DE CONTROL

//Ciclo while, do while y for

//while se ejecuta mientras la condicion a evaluar sea verdadera

let n = 0;

while (n < 10){
    console.log(n);
    //Una instruccion que cambie el valor de verdad de la condicio
    n++;
}

let m = 10;
//Aqui siempre se ejecuta el ciclo al menos 1 vez
do{
    console.log(m);
    //Una instruccion que cambie el valor de verdad de la condicio
    m--;
}while(m > 0)


let respuesta = prompt('Ingrese si para continuar')
while (respuesta === 'si'){
    respuesta = prompt('Ingrese si para continuar')
}

do{
    respuesta = prompt('Ingrese si para continuar')
}while(respuesta === 'si')

//for necesita de una variable de control en este caso i
//una condicion i < 10
//incremento i++ -> i = i + 1
for(let i=1; i <= 10; i++){
    console.log(i); //1, 2, 3, ... , 10
}