import { LinkVer } from "../Ver";
import { LinkEditar } from "../Editar";
import "./fila.css";

function Fila(){
    return(
        <div className="fila">
            <tr>
                <th scope="row">1</th>
                <td>Mouse</td>
                <td>Tecnologia</td>
                <td>0000000001</td>
                <td style="width: 30px">
                    <LinkVer />
                </td>
                <td style="width: 30px">
                    <LinkEditar />
                </td>                  
            </tr>
        </div>
    );
}

export { Fila }