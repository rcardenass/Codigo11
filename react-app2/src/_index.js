import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const header = <header>cualquier texto</header>

function Header() {
  return <header>HEADERº</header>;
}

function Main(props) {
  return <main>{props.children}</main>;
}

function Footer() {
  return <footer>FOOTER</footer>;
}

function Card(props) {
  const { name, lastname, age } = props;

  return (
    <article>
      <h2>
        Nombre Completo: {name} {lastname}
      </h2>
      <h2>{age}</h2>
    </article>
  );
}

function SayHello(props) {
  const { name = 'alejandra', sex = 'm' } = props;

  return (
    <div>
      {name === 'alejandra' ? <h2>Hola Alejandra</h2> : <h2>Hola extraño</h2>}
      {sex == 'f' && <h2>eres mujer</h2>}
    </div>
  );
}



function App(){
const users = [
  {
    name: 'luz',
    lastname: 'pacheco',
    age: 36,
  },
  {
    name: 'alejandra',
    lastname: 'cardenas',
    age: 14,
  },
  {
    name: 'valentina',
    lastname: 'cardenas',
    age: 11,
  },
  {
    name: 'rafaella',
    lastname: 'cardenas',
    age: 3,
  },
];

  return (
    <div className="app">
      <Header />
      <Main>
        {users.map((user) => (
          <Card name={user.name} lastname={user.lastname} age={user.age} />
        ))}

        <SayHello name="alejandra" sex="f" />
        <SayHello sex="f" />
      </Main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
