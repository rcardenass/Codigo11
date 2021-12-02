import "./nav.css";

function Nav(props) {
    const {
            links = [
            {
                text: 'Home',
                href: '#'
            },
            {
                text: 'Nosotros',
                href: '#'
            },
            {
                text: 'Servicios',
                href: '#'
            },
            {
                text: 'Contacto',
                href: '#'
            },
        ],
    } = props;

    return (
        <nav className="nav">
            <ul>
                {links.map((link) => (
                    <li>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export {
    Nav
};