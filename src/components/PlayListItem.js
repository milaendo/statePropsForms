import React, { Component } from 'react';

class PlayListItem extends React.Component{
	render(){
		return(
			<div className='display'>
			  <button>update</button>
			  <ul>
			  	<li> new stuff 1 </li>
			  	<li> new stuff 2 </li>
			  </ul>
			</div>
		)
	}
}

export default PlayListItem