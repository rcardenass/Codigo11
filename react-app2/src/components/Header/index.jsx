import { Button } from "../Button"
import { Cart } from "../Cart"
import "./header.css";

function Header(){
    return (
        <header className="header">
            <h1>Shopping Cart</h1>
            <div>
                <Button />
                <Cart />
            </div>
        </header>

    );
}

export { 
    Header
}