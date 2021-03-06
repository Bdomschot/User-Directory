function Body({ users }) {
    return (
        <div className='container'>
            <div className="card" style={{ background: "white", fontFamily: "Ariel", margin: "2rem", borderRadius: "6px" }}>
                <div className="card-body" style={{ display: "flex", flexWrap: "wrap" }}>
                    <h2 className="card-title" style={{ textAlign: "centered", fontWeight: "bold", }}>Employees</h2>
                </div>
                <div className='container flex-wrap'> 
                    <ul className="container mr-md-9">
                        {
                            users.map
                                (user =>
                                    <li key={user.login.uuid} className="card-text ml-md-5 pb-5 m-0 w-40">
                                        <span className='font-weight-bold'>Employee Name: </span>{user.name.title} {user.name.first} {user.name.last}
                                        <br />
                                        <span className='font-weight-bold'>Employee Email: </span> {user.email}
                                        <br />
                                        <span className='font-weight-bold'>Employee Cell </span> {user.cell}
                                        <br />
                                        <img className='rounded-sm' src={user.picture.large} alt="Employee" />
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Body;