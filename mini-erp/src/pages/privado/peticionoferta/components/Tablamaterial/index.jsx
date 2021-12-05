import "./tablamaterial.css";

function Tablamaterial(props) {
  const { children } = props;

  return (
    <div className="tablamaterial">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr style={{ width: "20px" }}>
            <th scope="col">#</th>
            <th scope="col">SKU</th>
            <th scope="col">Material</th>
            <th scope="col">Grupo Articulo</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export { Tablamaterial };
