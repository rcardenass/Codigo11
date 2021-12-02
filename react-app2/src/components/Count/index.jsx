
import { useState } from "react";
import "./count.css";

function Count(){
const [quantity, setQuantity] = useState(0);

    function handleClickDecrement(){
        // console.log("Decrement...!!!");
        setQuantity(quantity - 1);
        console.log('Decrement!!!', quantity);
    }

    function handleClickIncrement(){
        // console.log("Increment...!!!");
        // let ValorActual = document.getElementById('count');
        setQuantity(quantity + 1);
        console.log('Increment!!!', quantity);
    }    

    return(
        <div className="count">
            <button className="count_menos"
            onClick={handleClickDecrement} 
            >-</button>
            <h2 id="count">12</h2>
            <button className="count_mas"
            onClick={handleClickIncrement}
            >+</button>
        </div>
    );
}

export {
    Count
}