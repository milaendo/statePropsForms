import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'
import PlayListItem from './PlayListItem'

class App extends Component {

  constructor(){
    super()
    this.state = {
      given:[],
      posted:[]
    }
  }
  render() {
    return (
      <div className="App">
      <NavBar />
        <div className='wrapper'>
          <PlayListForm />
          <PlayListItem /> 
        </div>
      </div>
    );
  }
}

export default App;
