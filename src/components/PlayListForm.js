import React, { Component } from 'react';

class PlayListForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			username: '',
			bandname: '',
			song: '',
			notes: ''
		}
	}

	handleNameChange = (e) => {
		this.setState ({
			username: e.target.value
		})	
	}
	handleBandChange = (e) => {
		this.setState ({
			bandname: e.target.value
		})
	}
	handleSongChange = (e) => {
		this.setState ({
			song: e.target.value
		})
	}
	handleNoteChange = (e) => {
		this.setState ({
			notes: e.target.value
		})
	}
	addToList = (e) => {
	    e.preventDefault();
	    this.setState({username: e.target.value, song: e.target.value, bandname: e.target.value, notes: e.target.value});
	    let listItem = JSON.stringify(this.state);

	    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
	      method: "POST",
	      body: listItem,
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	    }
	  }
	  ).then(response => {
	    console.log(response, "yay");

	  }).catch(err => {
	    console.log(err, "boo!");
	  });
	  this.setState({username: '', notes: '', bandname: '', song:''});
	}


	render(){
		return(
			<div className='form'>
				<form onSubmit={this.addToList}>
				<div>
					<label>User Name:</label>
					<br/>
			    	<input onChange={this.handleNameChange} value={this.state.username} type="text" placeholder='Name or User Name'/>
			   	</div>
			   	<div>
			    	<label>Artist/Band Name:</label>
			    	<br/>
			    	<input onChange={this.handleBandChange}value={this.state.bandname}type='text' placeholder='Arist or Band Name'/>
			    </div>
			    <div>
			    	<label>Song Title:</label>
			    	<br/>
			    	<input onChange={this.handleSongChange}value={this.state.song}type='text' placeholder='Song Title'/>
			    </div>
			    <div>
			    	<label>Notes about Song:</label>
			    	<br/>
			    	<textarea onChange={this.handleNoteChange}value={this.state.notes}rows='4' cols='50'/>
			    </div>
			    <button type="submit" className='submit'>Submit</button>
			    </form>
			  
			</div>
		)
	}
}

export default PlayListForm