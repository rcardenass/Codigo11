






//const
const pi = 3.1416;
console.log(pi);

//TIPOS DE DATOS
let user = 'Ruben'; //string
let age = 35; //number
let isMan = true; // boolean - verdadero o falso
let isMan2 = false;
let account = null; //null
let married; //undefinet
let hash = Symbol(123456); // Symbol -- valor unico
let alumno = {
    sexo: 'f',
    edad: 35,
    grado: 5,
}; // object

console.log(user, typeof user);
console.log(age, typeof age);
console.log(isMan, typeof isMan);
console.log(isMan2, typeof isMan2);
console.log(account, typeof account);
console.log(married, typeof married);
console.log(hash, typeof hash);
console.log(alumno, typeof alumno);

let age2 = 30;
let age3 = '30';
console.log(age2, typeof age2);
console.log(age2, String(age2).replace('30', 200));
//console.log(age2, typeof age2);
//console.log(age2, typeof age2);