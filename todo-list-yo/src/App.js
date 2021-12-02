import { Formulario } from './components/Formulario';
import { Tarea } from './components/Tarea';
import { Elimina } from './components/Elimina';
import './app.css';

function App() {
  return (
    <div className="app">
      <Formulario />
      <Tarea>
        <Elimina />
      </ Tarea>

    </div>
  );
}

export { App };
