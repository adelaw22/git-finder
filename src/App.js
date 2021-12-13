import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';


class App extends Component {
  state= {
    users:[],
    loading: false
  }
  
  async componentDidMount(){
     this.setState({loading:true});

     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

     this.setState({users: res.data, loading: false});
  }

  //Search github users
  searchUsers=  async text=>{
      
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <Search searchUsers={this.searchUsers}/> 
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  } 

}

export default App;
