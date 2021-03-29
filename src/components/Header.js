function Header(props) {
    return (
        <div className="jumbotron" style={{ background: "white", fontFamily: "ariel", fontWeight: "bolder", textAlign: "center" }}>
            <h1 className="display-4">Employee Directory</h1>
            <p>Find Employees in the Company </p>
            <input placeholder="Search by last name"
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                id="search"
            ></input>
            <button className="btn m-3" style={{ background: "light" }} onClick={props.handleFormSubmit}>search</button>
        </div>
    )
};

export default Header;