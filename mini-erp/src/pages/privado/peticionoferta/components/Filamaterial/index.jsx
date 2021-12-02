import "./filamaterial.css";

function Filamaterial(){
    return(
        <>
            <tr>
                <th style={{width: '20px'}}>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="select"
                    />
                </th>
                <th scope="row">0000000001</th>
                <td>Mouse</td>
                <td>Tecnologia</td>
             </tr>
             <tr>
                <th style={{width: '20px'}}>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="select"
                    />
                </th>
                <th scope="row">0000000002</th>
                <td>Lapto GoTech</td>
                <td>Tecnologia</td>
             </tr>    
             </>
    );
}

export { Filamaterial }