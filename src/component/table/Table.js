function Table(props) {

    const tableStyle = {
        fontSize: '14px', // Adjust the font size as needed
    };

    return (
        <div>
            <table className="table table-striped table-bordered table-hover" style={tableStyle}>
                {props.children}
            </table>
        </div>
    );
}

export default Table;