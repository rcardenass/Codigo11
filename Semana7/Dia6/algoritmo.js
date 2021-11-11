function Ejercicio1() {
    let a = Number(prompt('nro 1: '));
    let b = Number(prompt('nro 2: '));

    let c = a + b;

    let rpta = 'La suma es: ' + String(a) + '+' + String(b) + '=' + String(c);
    return rpta;
}

function Ejercicio2() {
    let a = Number(prompt('Examen 1: '));
    let b = Number(prompt('Examen 2: '));
    let c = Number(prompt('Examen 3: '));
    let d = Number(prompt('Examen 4: '));

    let promerdio = (a + b + c + d) / 4;

    let rpta = 'El promedio de notas: ' + String(promerdio);
    return rpta;
}

function Ejercicio3() {
    let a = Number(prompt('Base: '));
    let b = Number(prompt('Altura: '));

    let c = a * b;

    let rpta = 'El Area del Rectangulo es: ' + String(c);
    return rpta;
}

function Ejercicio4() {
    let a = Number(prompt('Base: '));
    let b = Number(prompt('Altura: '));

    let c = (a * b) / 2;

    let rpta = 'El Area del Triangulo es: ' + String(c);
    return rpta;
}

function Ejercicio5() {
    let radio = Number(prompt('Radio: '));
    const pi = 3.1416;

    let c = (pi * Math.pow(radio, 2));

    let rpta = 'El Area del Circulo es: ' + String(c);
    return rpta;
}

function Ejercicio6() {
    let a = Number(prompt('Costo x Hra: '));
    let b = Number(prompt('Hras trabajadas: '));

    let c = a * b;

    let rpta = 'El salario Semanal es: ' + String(a) + '*' + String(b) + '=' + String(c);
    return rpta;
}

function Ejercicio7() {
    let a = Number(prompt('Ingrese Metros: '));
    const b = 39.3701;
    let c = a * b;

    let rpta = 'La tela en Pulgadas es: ' + String(a) + '*' + String(b) + '=' + String(c);
    return rpta;
}

function Ejercicio8() {
    let a = Number(prompt('Ingrese Soles: '));
    const b = 3.99;
    let c = a * b;

    let rpta = 'La cantidad en Dolares es: ' + String(a) + '*' + String(b) + '=' + String(c);
    return rpta;
}

function Ejercicio9() {
    let a = Number(prompt('Ingrese anio Nacimieno: '));
    let b = Number(prompt('Ingrese mes Nacimieno: '));
    let c = Number(prompt('Ingrese dia Nacimieno: '));
    let fn = String(a) + '/' + String(b)  + '/' + String(c);


    let fecha_nac = new Date(fn);
    let anio1 = fecha_nac.getFullYear();

    let hoy = new Date();
    let anio2 = hoy.getFullYear();

    let edad = anio2 - anio1;

    let rpta = 'La Edad es: ' + String(edad);
    return rpta;
}

function Ejercicio10() {
    let nom1 = String(prompt('Ingrese Nombre 1: '));
    let edad1 = Number(prompt('Ingrese Edad 1: '));

    let nom2 = String(prompt('Ingrese Nombre 2: '));
    let edad2 = Number(prompt('Ingrese Edad 2: '));

    let nom3 = String(prompt('Ingrese Nombre 3: '));
    let edad3 = Number(prompt('Ingrese Edad 3: '));    

  if(edad1 < edad2){
    
  }

    let rpta = 'La cantidad en Dolares es: ' + String(a) + '*' + String(b) + '=' + String(c);
    return rpta;
}











//document.write(Ejercicio1());
//document.write(Ejercicio2());
//document.write(Ejercicio3());
//document.write(Ejercicio4());
document.write(Ejercicio9());