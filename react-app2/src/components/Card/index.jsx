import { Count } from "../Count"
import "./card.css";

function Card(props){
    const { photo, name, price } = props;

    return(
        <article className="card">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <h4>kilo S/{price}</h4>
            <Count />
        </article>
    );
}

export {
    Card
}