import React, { Component } from 'react';


class PlayListItem extends Component {
    constructor(props) {
        super(props)
    }
	render(){
		return(
			<div className='display'>
			<div className='listWrap'>
			  <div>User: {this.props.username}</div>
			  <div>Artist/Band: {this.props.bandname}</div>
			  <div>Title:{this.props.song}</div>
			  <div>Notes:{this.props.notes}</div>
			</div>
			</div>
		)
	}
}


export default PlayListItem

