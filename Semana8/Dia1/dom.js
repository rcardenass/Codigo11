const h1 = document.querySelector('h1');
const button = document.querySelector('button');

h1.textContent = 'TEXTO MODIFICADO DESDE JS';
h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.background = 'orange';

h1.onclick = function() {
    this.style.fontSize = `${
        Number(this.style.fontSize.replace('px', '')) + 10
    }px`;
};

h1.onmouseenter = function() {
    console.log('entra');
    this.style.background = 'pink';
};

h1.onmouseout = function() {
  console.log('sale') ;
  this.style.backgroundColor = 'orange';
};

// button.onclick = function() {
//     console.log('click');
//     h1.style.color = 'white';
//     h1.style.fontSize = '50px';
//     h1.style.background = 'green';
// };

function SubmitForm() {
    let form = document.querySelector('form');
    const inpName = document.querySelector('.js_name');
    const inpLastname = document.querySelector('.js_lastname');
    const inpPassword = document.querySelector('.js_password');

    form.onsubmit = function(event) {
        event.preventDefault();
        console.log('nombre', inpName.value);
        console.log('apellido', inpLastname.value);
        console.log('password', inpPassword.value);
    };
}

// SubmitForm();

const h2 = document.querySelector('h2');
console.log('h2', h2);

const link = document.getElementsByTagName('a');
console.log('link', link);



//querySelector
const titulo = document.querySelector('h1');
console.log('titulo', titulo);


//querySelectorAll - me entrega una coleccion de items
const list = document.querySelectorAll('li');
for(let index = 0; index < list.length; index++) {
    list[index].style.color = 'white';
    list[index].style.background = 'purple';
}


/* Selectores relativos */
//Childnodes
const ul = document.querySelector(ul);
//Childnodes
console.log('Childnodes', ul.childNodes);
//Children
console.log('Children', ul.children);

console.log('FirsChild', ul.FirsChild);

console.log('FirsElementChild', ul.FirsElementChild);

console.log('LastChild', ul.LastChild);

console.log('LastElementChild', ul.LastElementChild);

console.log('nextElementSibling', ul.FirsElementChild.nextElementChil.nextElementSibling);

console.log('previusElementSibling', ul.FirsElementChild.nextElementChil.nextElementSibling);

