import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Grid } from './components/Grid';
import { Card } from './components/Card';
import './app.css';

function App(){
    const products = [
        {
            photo: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2021/05/como-conservar-la-fruta-picada.jpg',
            name: 'manzana',
            price: '3.50',
        },
        {
            photo: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2021/05/como-conservar-la-fruta-picada.jpg',
            name: 'uva',
            price: '3.50',
        },
        {
            photo: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2021/05/como-conservar-la-fruta-picada.jpg',
            name: 'platano',
            price: '3.50',
        },
        {
            photo: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2021/05/como-conservar-la-fruta-picada.jpg',
            name: 'fresa',
            price: '3.50',
        },
        {
            photo: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2021/05/como-conservar-la-fruta-picada.jpg',
            name: 'maracuya',
            price: '3.50',
        },
        {
            photo: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2021/05/como-conservar-la-fruta-picada.jpg',
            name: 'tuna',
            price: '3.50',
        },
    ];

    return (
        <div className="app">
            <Header />
            <Main>
                <Grid>
                    {products.map((product) => (
                        <Card 
                            photo={product.photo}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </Grid>
            </Main>
            <Footer />
        </div>
    );

}

export { App };