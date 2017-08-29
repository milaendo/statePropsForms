import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'
import PlayListItem from './PlayListItem'
import PlayList from './PlayList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <div className='wrapper'>
          <PlayListForm />
          <PlayList /> 
        </div>
      </div>
    );
  }
}

export default App;
