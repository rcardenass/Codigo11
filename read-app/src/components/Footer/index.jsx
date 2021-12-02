import { Nav } from '../Nav';
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>Todos los derecho reservados</p>
            <Nav 
                link = {[
                    {
                        text: 'Home Footer',
                        href: '#',
                    },
                    {
                        text: 'Nosotros Footer',
                        href: '#',
                    },
                    {
                        text: 'Servicio Footer',
                        href: '#',
                    },
                    {
                        text: 'Contacto Footer',
                        href: '#',
                    },
                ]}
            />
        </footer>
    );
  }

  export {
      Footer
  };