import React from 'react';
import Media from './media.js';
import './playlist.css';
//import Play from '../../icons/components/play';

// class Playlist extends Component{
// 	render(){
// 		const playlist = this.props.data.categories[0].playlist
// 		console.log(this.props.data);
// 		return(
// 			<div className="Playlist">
// 				{
// 					playlist.map((item)=>{
// 						//En ECMA 6
// 						//return <Media title={item.title} key={item.id}/>
// 						//En ECMA 7
// 						return <Media {...item} key={item.id}/>
// 					})
// 				}				
// 			</div>
// 			)
// 	}
// }

//Componente funcional
function Playlist (props){	
		//const playlist = props.data.categories[0].playlist
		//console.log(props.data);
		return(
			<div className="Playlist">			
				{
					props.playlist.map((item)=>{						
						return <Media handleClick={props.handleOpenModal} {...item} key={item.id}/>
					})
				}			
				
			</div>
			)
	
}

export default Playlist;