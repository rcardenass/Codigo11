// import axios from "axios";
// import React from "react";
// import { useEffect, useState } from "react";
import "./filamaterial.css";

function Filamaterial(){
    // const [materiales, setMateriales]  = useState([]);
    // // const [tableMateriales, settableMAteriales] = useState([]);

    // const peticionGet = async() => {
    //     await axios.get("link.................")
    //     .then(response => {
    //         setMateriales(response.data);
    //         settableMAteriales(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }

    // useEffect(() => {
    //     peticionGet();
    // },[]);

    return(
        <>
            {/* {materiales &&
             materiales.map((material) => ( */}
                {/* <tr key={material.id}>
                     <th style={{width: '20px'}}>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="select"
                        />
                    </th>
                    <th scope="row">{material.sku}</th>
                    <td>{material.name}</td>
                    <td>{material.grpart}</td>
                </tr> */}
                {/* ))}   */}
        </>
    );
}

export { Filamaterial };
