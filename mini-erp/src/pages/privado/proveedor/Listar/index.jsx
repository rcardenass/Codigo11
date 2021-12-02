import { Busca } from "./components/Busca";
import { Tabla } from "./components/Tabla";
import "./listar.css";

function PageProvLista(){
    return(
      <div className="listar">
        <Busca />
        <Tabla />
      </div>
    );
}

export { PageProvLista }