import React, { Component } from 'react';


class PlayListItem extends Component {
    constructor(props) {
        super(props)
    }
	render(){
		return(
			<div className='display'>
			<div className='listWrap'>
			  <div>User: {this.props.song.username}</div>
			  <div>Artist/Band: {this.props.song.bandname}</div>
			  <div>Title:{this.props.song.song}</div>
			  <div>Notes:{this.props.song.notes}</div>
			</div>
			</div>
		)
	}
}


export default PlayListItem

