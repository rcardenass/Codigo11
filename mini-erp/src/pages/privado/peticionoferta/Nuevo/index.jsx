import { useEffect, useState } from "react";
import axios from "axios";
import { Busca } from "../components/Busca";
import { Tablamaterial } from "../components/Tablamaterial";
import { Filamaterial } from "../components/Filamaterial";
import { Agregamaterial } from "../components/Agregamaterial";
import { Tablapeticion } from "../components/Tablapeticion";
import { Filapeticion } from "../components/Filapeticion";
import { Enviarpeticion } from "../components/Enviarpeticion";
import "./nuevo.css";

function PagePeticionNuevo() {
  const [materiales, setMateriales] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [materialesSeleccionados, setMaterialesSeleccionados] = useState([]);

  function getMateriales() {
    axios
      .get("http://localhost:3000/materiales")
      .then(({ data: materiales }) => {
        setMateriales(materiales);
      })
      .catch(() => {
        console.error("error de carga");
      });
  }

  function getProveedores() {
    axios.get("http://localhost:3000/proveedores").then(({ data }) => {
      setProveedores(data);
    });
  }

  function savePeticionOferta(payload) {
    axios.post("http://localhost:3000/peticion_oferta", payload).then(() => {
      alert("La peticion se realizo");
      window.location.reload();
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    savePeticionOferta(materialesSeleccionados);
    console.log("disparar evento de envio!!", materialesSeleccionados);
  }

  useEffect(() => {
    /**TRAEMOS DATA/ */
    getMateriales();
    getProveedores();
  }, []);

  return (
    <div className="page-peticion-oferta-nuevo p-2">
      {/* <Busca />
      <Tablamaterial>
        <Filamaterial />
      </Tablamaterial>
      <Agregamaterial />
      <Tablapeticion>
        <Filapeticion />
      </Tablapeticion>
      <Enviarpeticion /> */}
      <h1 className="mt-3 mb-3">Crear Peticion de Oferta</h1>
      <div className="busca">
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
      {!!materiales.length ? (
        <div className="tabla-material">
          <table class="table table-striped table-hover table-bordered">
            <thead>
              <tr style={{ width: "20px" }}>
                <th scope="col">#</th>
                <th scope="col">SKU</th>
                <th scope="col">Material</th>
                <th scope="col">Grupo Articulo</th>
              </tr>
            </thead>
            <tbody>
              {materiales.map((material) => {
                return (
                  <tr key={material.id}>
                    <th style={{ width: "20px" }}>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="select"
                        onChange={() => {
                          setMaterialesSeleccionados((state) => {
                            return [
                              ...state,
                              { ...material, cantidad: 1, proveedor: "" },
                            ];
                          });
                          setMateriales((state) => {
                            return state.filter(
                              (item) => item.id !== material.id
                            );
                          });
                        }}
                      />
                    </th>
                    <th scope="row">{material.sku}</th>
                    <td>{material.name}</td>
                    <td>{material.grpart}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">NO HAY MATERIALES</div>
      )}
      <br />
      <br />
      {!!materialesSeleccionados.length ? (
        <form className="tabla-peticion" onSubmit={onSubmit}>
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
            <tbody>
              {materialesSeleccionados.map((material, id) => {
                return (
                  <tr key={material.id}>
                    <th>{material.sku}</th>
                    <td>{material.name}</td>
                    <td>
                      <div class="input-group-sm">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Cantidad"
                          value={material.cantidad}
                          onChange={(e) => {
                            setMaterialesSeleccionados((state) => {
                              state[id].cantidad = e.target.value;
                              return [...state];
                            });
                          }}
                          required
                        />
                      </div>
                    </td>
                    <td>
                      <select
                        class="form-control"
                        value={material.proveedor}
                        onChange={(e) => {
                          setMaterialesSeleccionados((state) => {
                            state[id].proveedor = e.target.value;
                            return [...state];
                          });
                        }}
                        required
                      >
                        <option value="">Seleccionar proveedor</option>
                        {proveedores.map((proveedor) => {
                          return (
                            <option value={proveedor.id} key={proveedor.id}>
                              {proveedor.empresa}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td style={{ width: "20px" }}>
                      <i
                        class="bi bi-trash-fill"
                        onClick={() => {
                          setMateriales((state) => {
                            return [...state, material];
                          });
                          setMaterialesSeleccionados((state) => {
                            return state.filter(
                              (item) => item.id != material.id
                            );
                          });
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type="submit" class="btn btn-primary col-md-12">
            Enviar
          </button>
        </form>
      ) : (
        <div class="alert alert-info">No hay materiales seleccionados</div>
      )}
    </div>
  );
}

export { PagePeticionNuevo };