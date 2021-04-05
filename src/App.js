import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import API from "./utils/API";
import Search from "./components/Search";

class App extends React.Component {
  
  state = {
    users: [],
    search: "",
  };

  componentDidMount() {

    API.getUsers()
      .then(res => {
        this.setState({ users: res.data.results })
        console.log(res)
      })
      .catch(err => console.log(err));

  }

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    
  };

  handleFormSubmit = event => {

    event.preventDefault();
    console.log(this.state.users)
    const currentStateUser=this.state.users.filter(user => user.name.last.toLowerCase().includes(this.state.search.toLowerCase()) )
    this.setState({users: currentStateUser})

  }; 

  lastNameSort = event => {
    
    event.preventDefault();
    const sortLast =this.state.users.sort((a,b) => a.name.last > b.name.last ? 1 : -1)
    this.setState({users: sortLast})

  };

  render() {
    return (
      <div className="container">
        <Header/>
        <Search  search={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        lastNameSort={this.lastNameSort}/>
        <Body users={this.state.users} />
    </div>
    )
  }
};
export default App;