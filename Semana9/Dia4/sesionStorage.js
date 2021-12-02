//SESSIONSTORAGE
//La informacion persiste solo en la pestaña actual
sessionStorage.setItem('clave', 1234);          //setear un valor
console.log(sessionStorage.setItem('clave'));   //obtener el valor
console.log(sessionStorage);
sessionStorage.removeItem('clave');             //remover el valor
console.log(sessionStorage);


//LOCALSTORAGE
//La informacionpersiste aunque la pestaña se cierre
localStorage.setItem('clave', 1234);            //setear un valor
console.log(localStorage.setItem('clave'));     //obtener el valor
console.log(localStorage);
localStorage.removeItem('clave');               //remover el valor
console.log(localStorage);


//JSON STRINGIFY
//Guarda en formato json
const numeros = [0, 1, 2, 3, 4];
sessionStorage.setItem('numeros', JSON.stringify(numeros)); //guarda en json
JSON.parse(sessionStorage.getItem('numeros'));              //lo convierte a array

const objeto = {name: 'sebastian'};
sessionStorage.setItem('objeto', JSON.stringify(objeto));   //guarda en json
JSON.parse(sessionStorage.setItem('objeto'));               //lo convierte a objeto