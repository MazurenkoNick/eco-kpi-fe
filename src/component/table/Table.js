function Table(props) {

    return (
        <div className="container">
            <table className="table table-striped table-bordered table-hover">
                {props.children}
            </table>
        </div>
    );
}

export default Table;