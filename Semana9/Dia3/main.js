function createPeaple(people) {
    console.log('people', people);
    console.log('%O', JSON.parse(people).results);
    JSON.parse(people).results.map((person) => {
        const card = document.createElement('article');
        card.innerHTML = `
        <p>Nombre: ${person.name}</p>
        <p>Altura: ${person.height}</p>
        <button>Mostrar filmes</button>
        `;

        card.querySelector('button').onclick = function () {
            console.log('people', people);
            let xhrfil = new XMLHttpRequest();
            xhrfil.open('GET', person.filmms[0]);
            xhrfil.send(null);
            xhrfil.onload = () => {
                console.log(xhrfil, Response);
            };
        };

        document.querySelector('#container').appendChild(card);
    });
}

function getResponse() {
    createPeaple(xhr.response);
}

function getError() {
    alert('Intentelo mas tarde.')
}


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://swapi.dev/api/people');
xhr.send(null);
xhr.onload = getResponse;
xhr.onerror = getError;

document.querySelector('button').onclick = function() {
    console.log('clic!!!');
}

console.log('mas codigo');
console.log('mas codigo 2');

















