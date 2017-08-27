import React, { Component } from 'react';

class PlayListForm extends React.Component{
	constructor(){
		super()
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
	render(){
		return(
			<div className='form'>
				<form>
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
			    	<textarea onChange={this.handleSongChange}value={this.state.notes}rows='4' cols='50'/>
			    </div>
			    </form>
			    <button>Submit</button>
			</div>
		)
	}
}

export default PlayListForm