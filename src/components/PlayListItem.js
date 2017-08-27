import React, { Component } from 'react';

class PlayListItem extends React.Component{
	render(){
		return(
			<div className='display'>
			  <button className='update'>update list</button>
			<div className='listWrap'>
			  <div>User:</div>
			  <div>Artist/Band:</div>
			  <div>Title:</div>
			  <div>Notes:</div>
			</div>
			</div>
		)
	}
}

export default PlayListItem