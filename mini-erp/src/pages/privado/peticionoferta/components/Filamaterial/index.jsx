// import axios from "axios";
// import React from "react";
import "./filamaterial.css";

function Filamaterial() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  return (
    <>
      <tr>
        <th style={{ width: "20px" }}>
          <input class="form-check-input" type="checkbox" id="select" />
        </th>
        <th scope="row">0000000001</th>
        <td>Mouse</td>
        <td>Tecnologia</td>
      </tr>
    </>
  );
}

export { Filamaterial };
