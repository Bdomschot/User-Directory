
function Search( props ){
        return (
        <div>
            <input placeholder="Search by last name"
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                id="search"
            ></input>
            <button className="btn m-3" style={{ background: "light" }} onClick={props.handleFormSubmit}>Search</button>
            {" "}
            <button type="text" className="btn m-3" style={{ background: "light" }} onClick={props.lastNameSort}>Sort all Employees by Last Name</button>
        </div>
        )
}

export default Search;