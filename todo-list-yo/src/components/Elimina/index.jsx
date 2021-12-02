import { useState } from "react";
import "./elimina.css";

function Elimina(props){
    const [tareas, setTareas] = useState([]);

    function deleteTarea(tarea, tareas){
        setTareas(tareas.filter((itemTarea) => itemTarea.tarea !== tarea));
    }

    return (
        <button className="elimina"
        onClick={deleteTarea()}
        >Del</button>
    );
}

export { Elimina }