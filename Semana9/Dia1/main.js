//STRING
const cadena = "ruben";

console.log('longitud', cadena.length);
console.log('concat', cadena.concat('cardenas'));
console.log('includes', cadena.includes('cardenas'));
console.log('endwith', cadena.endsWith('en'));
console.log('startsWith', cadena.startsWith('ru'));
console.log('indexof', cadena.indexOf('e'));
console.log('lastIndexOf', cadena.lastIndexOf('n'));
console.log('replace', cadena.replace('ruben', 'alejandro'));
console.log('slice', cadena.slice(2, 4));
console.log('split', cadena.split('b'));
console.log('toLocaleLowerCase', cadena.toLocaleLowerCase());
console.log('toLocaleUpperCase', cadena.toLocaleUpperCase());
console.log('trim', cadena.trim());


//ARRAY
console.log('--------------------');
console.log('ARRAY!!!!!!!!!!!!!!!');
console.log('--------------------');
const num = [0, 1, 2, 10, 4, 5, 6];
const num1 = [7, 8, 9];

console.log('length', num.length);
console.log('isArray', Array.isArray(num));
console.log('Array.of', Array.of('sebastian'));
console.log('concat', num.concat(num1));
console.log('includes', num.includes(0));
console.log('indexOf', num.indexOf(1));
console.log('join', num.join('/'));
console.log('keys', num.keys('/').next());
console.log('lastIndexOf()', num.lastIndexOf(10));
console.log('reverse()', num.reverse());
console.log('shift()', num.shift());
console.log('slice()', [0, 1, 2, 3, 4].slice(1, 3));
const splitceVar = [0, 1, 2, 3, 4];
console.log('splice()', splitceVar.splice(1, 1));
console.log('splitceVar()', splitceVar);
console.log('unshift()', num.unshift());
console.log('push()', num.push(2));
console.log('pop()', num.pop(2));


//ARAY METODOS
console.log('--------------------');
console.log('ARAY METODOS!!!!!!!!');
console.log('--------------------');

const alumnos = [
    {
        name: 'ruben',
        age: 44,
        sex: 'm',
    },
    {
        name: 'rubjoseen',
        age: 32,
        sex: 'm',
    },
    {
        name: 'melissa',
        age: 24,
        sex: 'f',
    },      
    {
        name: 'cristina',
        age: 14,
        sex: 'f',
    },          
];

const alumnosFullData = alumnos.map((alumno) => {
    return {
        ...alumno,
        grade: '5',
        school: 'miguel de servantes',
    };
});

console.log('alumnos', alumnos);
console.log('alumnosFullData', alumnosFullData);


//FILTER
const alumnosMayores30 = alumnos.filter((alumno) => alumno.age > 30);
console.log('alumnosMayores30', alumnosMayores30);
console.log('alumnos', alumnos);


//FIND
const alumnosRuben = alumnos.find((alumno) => alumno.name === 'ruben');
console.log('alumnosRuben', alumnosRuben);

//FIND INDEX
const alumnosRubenPos = alumnos.findIndex((alumno) => alumno.name === 'melissa')
console.log('alumnosRubenPos', alumnosRubenPos);

//SOME
const existMayor30 = alumnos.some((alumno) => alumno.age > 0);
console.log('existeMayor30', existMayor30);

//EVERY
const todosMayores30 = alumnos.every((alumno) => alumno.age > 30);
console.log('todosMayores30', todosMayores30);

//REDUCE
const numeros = [0, 1, 2, 3, 4, 5, 6];
const resultado = numeros.reduce((acumulado, valorActual) => {
    console.log('acumulado', acumulado);
    console.log('valorActual', valorActual);
    return acumulado + valorActual;
}, 0);

console.log('resultado', resultado);