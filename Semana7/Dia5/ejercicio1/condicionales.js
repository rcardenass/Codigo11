const AGE_MAX = 18;
const SEX = 'm';

function Welcome(name) {
    return `Bienvenido al bar ${name}`;
}

function notWelcome(name) {
    return `No ere Bienvenido al bar ${name}`;
}

function notSupportAge(name) {
    return `Eres menor para entrar al bar ${name}`;
}

function ElBar() {
    //debugger;
    let name = prompt('Ingresa tu nombre');
    let age = Number(prompt('Ingresa tu nombre'));
    let sex = prompt('Ingresa tu sexo');

    if (age > AGE_MAX && SEX.toLocaleLowerCase() == SEX) {
        alert(Welcome(name));
    } else if(age < AGE_MAX) {
        alert(notSupportAge(name));
    } else {
        alert(notWelcome(name));
    }
}

//ElBar();

function LaHeladeria() {
    let flavor = prompt('Ingrese el sabor que quieres (fresa, melon, sandia, naranja, kiwi)').toLocaleLowerCase();

    switch (flavor) {
        case 'fresa': {
            alert
        }
    }
}


function SaveName(name) {
    
}


