import { Fila } from "../Fila";
import "./tabla.css";

function Tabla(){
    return(
        <div className="resultado">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Proveedor</th>
                  <th scope="col">Ruc</th>
                  <th scope="col" style="width: 60px" colspan="2"></th>
                </tr>
              </thead>
              <tbody>
                <Fila />
              </tbody>
            </table>
        </div>
    );
}

export { Tabla }