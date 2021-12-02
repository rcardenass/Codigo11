import "./main.css";

function Main(props){
    const { children } = props;
    
    return(
        <main className="main">
            <div>
                <h1>Productos</h1>
                <div className="main_product">
                {children}
                </div>
            </div>
        </main>
    );
}

export {
    Main
}