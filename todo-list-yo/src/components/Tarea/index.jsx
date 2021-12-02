import { Elimina } from '../Elimina';
import "./tarea.css";

function Tarea(props){
    const { tarea, onTarea = () => {} } = props;

    return(
        <div className="tarea">
            <span>{tarea}</span>
            <Elimina 
                tarea={tarea}
            />
        </div>
    );
}

export { Tarea }