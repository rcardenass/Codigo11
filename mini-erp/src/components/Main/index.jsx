import "./main.css";

function Main(props){
    const {children} = props;

    return(
        <main>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        {children}
                    </div>
                </div>
        </div>
    </main>       
    );
}

export { Main }