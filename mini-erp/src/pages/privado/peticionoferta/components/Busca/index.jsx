import "./busca.css";

function Busca(){
    return(
        <div className="busca">
            <label for="basic-url" class="form-label">Material</label>
            <div class="input-group mb-3 col-3">
              <input
                type="text"
                class="form-control"
                id="busca"
                placeholder="Buscar"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="busca_proveedor"
              >
                Buscar
              </button>
            </div>
        </div>
    );
}

export { Busca }