import { Busca } from "./components/Busca";
import { Tabla } from "./components/Tabla";
import "./listar.css";

function PageMatLista(){
    return(
      <div className="listar">
        <Busca />
        <Tabla />
      </div>
    );
}

export { PageMatLista }