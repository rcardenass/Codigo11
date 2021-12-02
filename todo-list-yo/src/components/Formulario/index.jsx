import { useState } from "react";
import "./formulario.css";

function Formulario(){
    const [tareas, setTareas] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        setTareas((state) => {
            return [
                ...state,
                {
                    tarea: inputValue,
                },
            ];
        });

        setInputValue('');
    }

    return(
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={inputValue} 
                placeholder="Ingrese Tarea" 
                required
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                />
                <button>+ Agregar Tarea</button>
            </form>
        </div>
    );
}

export { Formulario }