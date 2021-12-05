import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { PageMatNuevo } from "./pages/privado/material/Nuevo";
import { PageMatEditar } from "./pages/privado/material/Editar";
import { PageMatVer } from "./pages/privado/material/Ver";
import { PageMatLista } from "./pages/privado/material/Listar";
import { PageProvNuevo } from "./pages/privado/proveedor/Nuevo";
import { PageProvEditar } from "./pages/privado/proveedor/Editar";
import { PageProvVer } from "./pages/privado/proveedor/Ver";
import { PageProvLista } from "./pages/privado/proveedor/Listar";
import { PagePeticionNuevo } from "./pages/privado/peticionoferta/Nuevo";

// import { LayoutPrivate } from "../src/layouts/layout-public";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

import './app.css';


function App() {
  return (
    <div className="app">
      <Router>
        {/* <LayoutPrivate> */}
        <Header />
        <Nav />
        <Main>
          <Switch>
            <Route path="/privado/material/nuevo">
              <PageMatNuevo />
            </Route>
            <Route path="/privado/material/editar/:id">
              <PageMatEditar />
            </Route>  
            <Route path="/privado/material/ver/:id">
              <PageMatVer />
            </Route>   
            <Route path="/privado/material/listar">
              <PageMatLista />
            </Route>                              

            <Route path="/privado/proveedor/nuevo">
              <PageProvNuevo />
            </Route>
            <Route path="/privado/proveedor/editar/:id">
              <PageProvEditar />
            </Route>  
            <Route path="/privado/proveedor/ver/:id">
              <PageProvVer />
            </Route>   
            <Route path="/privado/proveedor/listar">
              <PageProvLista />
            </Route>   

            <Route path="/privado/peticion-oferta/nuevo">
              <PagePeticionNuevo />
            </Route>                                        
          </Switch>
        </Main>
        <Footer />
        {/* </LayoutPrivate> */}
      </Router>
    </div>
  );
}

// export default App;

export { App }
