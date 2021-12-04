import "./tablapeticion.css";

function Tablapeticion(props) {
  const { children } = props;

  return (
    <div className="tablapeticion">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">SKU</th>
            <th scope="col">Material</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Proveedor</th>
            <th scope="col" style={{ width: "20px" }}></th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export { Tablapeticion };
