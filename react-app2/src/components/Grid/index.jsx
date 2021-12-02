import "./grid.css";

function Grid(props){
const { children } = props;

    return (
        <div className="grid">
            {children}
        </div>
    );
}

export {
    Grid
}