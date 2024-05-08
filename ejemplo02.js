//Operaciones
let a = 5;
let b = 3;
let c = '5';
let d = 'tres';

//operador +
let resultado = a + b;
console.log(resultado); //8
//un str con + CONCATENA
resultado = a + c;
console.log(resultado); //55
console.log(typeof resultado); //string

//operador -
resultado = a - b;
console.log(resultado); //2

resultado = a - c;
console.log(resultado) //0
console.log(typeof resultado); //number

resultado = a - d;
console.log(resultado) //Not a Number
console.log(typeof resultado); //number

resultado = parseInt(d);
console.log(resultado)

//operador *
resultado = a * b;
console.log(resultado); //15

resultado = a * c;
console.log(resultado); //25

resultado = a * d;
console.log(resultado); //NaN

resultado = c * c;
console.log(resultado); //25

resultado = d * d;
console.log(resultado); //NaN

a++; // le suma 1 6
b--; // 2
resultado = 0;
resultado += a;
a += 2; // 8
console.log(resultado)
