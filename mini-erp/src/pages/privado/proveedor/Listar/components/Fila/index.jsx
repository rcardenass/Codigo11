import { Ver } from "../Ver";
import { Editar } from "../Editar";
import "./fila.css";

function Fila(){
    return(
        <div className="registro">
            <tr>
                <th scope="row">1</th>
                <td>Ruben  Cardenas</td>
                <td>20605571710</td>
                <td style="width: 30px">
                    <Ver />
                </td>
                <td style="width: 30px">
                    <Editar />
                </td>                  
            </tr>
        </div>
    );
}

export { Fila }