
import "./solicitudPedido.css";
import { useState } from 'react';
import {FormGroup,ModalFooter,Button,Modal,ModalBody,ModalHeader} from "reactstrap";

function PageSolicitudPedido(){
    
    const dataMateriales =[
        {id:1, Material:"Laptop", Cantidad:6, Centro:1010 , Almacen:10, precioUnitario:1000, Total:6000, Estado:"Pendiente"},
        {id:2, Material:"Goma", Cantidad:12, Centro:2010 , Almacen:11,precioUnitario:1500,Total:18000,Estado:"Pendiente"},
        {id:3, Material:"Tirata", Cantidad:3, Centro:1010 , Almacen:10,precioUnitario:3000,Total:9000,Estado:"Pendiente"},
        {id:4, Material:"Teclado", Cantidad:1, Centro:1010 , Almacen:12,precioUnitario:500,Total:500,Estado:"Pendiente"},
    ];

    const [data, setData] = useState(dataMateriales);   
    const [modalInsertar,setModalInsertar] = useState(0);
    const [modalEditar,setModalEditar] = useState(0);
    const [modalEliminar,setModalEliminar] = useState(0);
    const [materialSeleccionado,setMaterialSeleccionado] = useState({
        id:'',
        Material:'',
        Cantidad:'',
        Centro:'',
        Almacen:'',
        precioUnitario:'',
        Total:'',
        Estado:'',
    });
    const seleccionarMaterial =(elemento,caso)=>{
        setMaterialSeleccionado(elemento);
        (caso==='Editar')?setModalEditar(true):setModalEliminar(true);
    }
    const handleChange=e=>{
        const{name,value}=e.target;
        setMaterialSeleccionado(prevState=>({
            ...prevState,
            [name]:value
        }));
    }
    const editar=()=>{
        var dataNueva=data;
        dataNueva.map(material=>{
            if(material.id===materialSeleccionado.id){
                material.Material=materialSeleccionado.Material;
                material.Cantidad=materialSeleccionado.Cantidad;
                material.Centro=materialSeleccionado.Centro;
                material.Almacen=materialSeleccionado.Almacen;
                material.precioUnitario=materialSeleccionado.precioUnitario;
                material.Total=materialSeleccionado.Total;
                material.Estado=materialSeleccionado.Estado;
            }
        });
        setData(dataNueva);
        setModalEditar(false);
    }
    const eliminar=()=>{
        setData(data.filter(material=>material.id!==materialSeleccionado.id));
        setModalEliminar(false);
    }
    const abrirModalInsertar=()=>{
        setMaterialSeleccionado(null);
        setModalInsertar(true);
    }
    const insertar=()=>{
        var valorInsertar=materialSeleccionado;
        valorInsertar.id=data[data.length-1].id+1;
        var dataNueva=data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        setModalInsertar(false);
    }

    return(
        <div className="detallesSolicitudPedido">
            <h2>Solicitud de pedido</h2>
            <Button color="success" onClick={()=>abrirModalInsertar()}>Insertar Nuevo Pedido</Button>
            <div className="detallesDatos">
                <div className="proveedor">
                    <label>Proveedor</label>
                    <select id="proveedores" name="proveedores">
                        <option value="" selected="selected">- selecciona -</option>
                        <option value="proveedor1">Opcion1</option>
                        <option value="proveedor2">Opcion2</option>
                        <option value="proveedor3">Opcion3</option>
                        <option value="proveedor4">Opcion4</option>
                    </select>

                </div>
                <div className="fecha" >
                    <label>Fecha de entrega</label>
                    <input type="date" value="2021-12-04" min="2021-01-01" max="2022-12-31" />
                </div>
                <div className="peticionOferta">
                    <label>Petición de oferta</label>
                    <input type="text" id="peticionOferta" value="0001" readonly/>
                </div>
            </div>

            <div className="detallesProductos">
                    

                <label>Pedidos</label>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col" >Material</th>
                            <th scope="col" >Cantidad</th>
                            <th scope="col" >Centro</th>
                            <th scope="col" >Almacen</th>
                            <th scope="col" >P.U</th>
                            <th scope="col" >Total</th>
                            <th scope="col" > Estado</th>
                            <th scope="col" > Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((elemento)=>(
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.Material}</td>
                                <td>{elemento.Cantidad}</td>
                                <td>{elemento.Centro}</td>
                                <td>{elemento.Almacen}</td>
                                <td>{elemento.precioUnitario}</td>
                                <td>{elemento.Total}</td>
                                <td>{elemento.Estado}</td>
                                <td>
                                    <Button color="primary" onClick={()=>seleccionarMaterial(elemento,'Editar')} >Editar</Button>{"   "}
                                    <Button color="danger" onClick={()=>seleccionarMaterial(elemento,'Eliminar')}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* // * MODAL INSERTAR */}
            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Insertar Material</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input 
                        className="form-control" 
                        readonly 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.id} 
                        onChange={handleChange}
                        value={data[data.length-1].id+1} />
                    </FormGroup>
                    <FormGroup>
                        <label>Material:</label>
                        <input 
                        className="form-control" 
                        name="Material" 
                        type="text" 
                        value={materialSeleccionado ? materialSeleccionado.Material:''}
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Cantidad:</label>
                        <input 
                        className="form-control" 
                        name="Cantidad" 
                        type="text" 
                        value={materialSeleccionado ? materialSeleccionado.Cantidad:''} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Centro:</label>
                        <input 
                        className="form-control" 
                        name="Centro" 
                        type="text" 
                        value={materialSeleccionado ? materialSeleccionado.Centro:''} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Almacen:</label>
                        <input 
                        className="form-control" 
                        name="Almacen" 
                        type="text" 
                        value={materialSeleccionado ? materialSeleccionado.Almacen:''} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Precio Unitario:</label>
                        <input 
                        className="form-control" 
                        name="precioUnitario" 
                        type="text" 
                        value={materialSeleccionado ? materialSeleccionado.precioUnitario:''} 
                        onChange={handleChange}  />
                    </FormGroup>
                    <FormGroup>
                        <label>Total:</label>
                        <input 
                        className="form-control" 
                        name="Total" 
                        type="text" 
                        value={materialSeleccionado ? materialSeleccionado.Total:''} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Estado:</label>
                        <input 
                        className="form-control" 
                        name="Estado" 
                        type="text" 
                        value={materialSeleccionado ? materialSeleccionado.Estado:''} 
                        onChange={handleChange} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>insertar()}>Insertar</Button>
                    <Button color="danger" onClick={()=>setModalInsertar(false)}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            {/* // * MODAL EDITAR */}
            <Modal isOpen={modalEditar} >
                <ModalHeader>
                    <div>
                        <h3>Editar Material</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input 
                        className="form-control" 
                        readonly 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.id} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Material:</label>
                        <input 
                        className="form-control" 
                        name="Material" 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.Material}
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Cantidad:</label>
                        <input 
                        className="form-control" 
                        name="Cantidad" 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.Cantidad} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Centro:</label>
                        <input 
                        className="form-control" 
                        name="Centro" 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.Centro} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Almacen:</label>
                        <input 
                        className="form-control" 
                        name="Almacen" 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.Almacen} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Precio Unitario:</label>
                        <input 
                        className="form-control" 
                        name="precioUnitario" 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.precioUnitario} 
                        onChange={handleChange}  />
                    </FormGroup>
                    <FormGroup>
                        <label>Total:</label>
                        <input 
                        className="form-control" 
                        name="Total" 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.Total} 
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Estado:</label>
                        <input 
                        className="form-control" 
                        name="Estado" 
                        type="text" 
                        value={materialSeleccionado && materialSeleccionado.Estado} 
                        onChange={handleChange} />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={()=>editar()} >Grabar</Button>
                    <Button color="danger" onClick={() => setModalEditar(false)} >Cancelar</Button>
                </ModalFooter>
            </Modal>

            {/* // * MODAL ELIMINAR */}
            <Modal isOpen={modalEliminar}>
                <ModalBody>
                    ¿Estas seguro que deseas eliminar el material {materialSeleccionado && materialSeleccionado.Material} ?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={()=>eliminar()}>Si</Button>
                    <Button color="secondary" onClick={()=>setModalEliminar(false)}>No</Button>
                </ModalFooter>
            </Modal>



        </div>

    )
}

export {PageSolicitudPedido};