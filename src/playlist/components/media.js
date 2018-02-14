import React, {PureComponent}  from 'react';
//import React, {Component} from 'react';
import './media.css';
import PropTypes from 'prop-types';


class Media extends PureComponent{

	//ECMAS 6 Enlazar eventos DOM
	// constructor(props){   //cambios de estado
	// 	super(props)
	// 	this.state={
	// 		autor:props.autor
	// 	}
	// }

	//ECMAS 7	Enlazar eventos DOM (array function)
	state={
		autor:'Roxana Judith'
	}
	//ECMAS 6 Enlazar eventos DOM
	// constructor(props){
	// 	super(props)
	// 	this.handleClick=this.handleClick.bind(this);
	// }
	// handleClick(event){
	// 	console.log(this.props.title);
	// }

	//ECMAS 7	Enlazar eventos DOM (array function)
	handleClick = (event)=>{
		// console.log(this.props.title);
		// this.setState({   //cambios de estado
		// 	autor:'Ricardo Celis'
		// })
		this.props.openModal(this.props)
	}
	render(){
		const styles ={
			container:{
				
				color:'#44546b',
				curso:'pointer',
				width:260,
				border:'1px solid red'
			}
		}
		return(			 
			 /*                 METODO HARD CODER
			 //<div style={styles.container}>
			 <div className="Media">
			 <div className="Media-cover">
			 	<img 
			 	  src="./images/covers/bitcoin.jpg"
			 	  alt=""
			 	  width={260}
			 	  height ={160}
			 	  className="Media-image"
			 	  />
			 	  <h3 className="Media-title">Porque aprender React?</h3>
			 	  <p className="Media-autor">RoxanaJudith</p>
			 </div>			 
			 </div>
			 */
			 <div className="Media" onClick={this.handleClick}>
			 <div className="Media-cover">
			 	<img 
			 	  src={this.props.cover}
			 	  alt=""
			 	  width={240}
			 	  height ={160}
			 	  className="Media-image"
			 	  />
			 	  <h3 className="Media-title">{this.props.title}</h3>
			 	  {/*<p className="Media-autor">{this.props.autor}</p>*/} 
			 	  <p className="Media-autor">{this.props.autor}</p> {/*cambio de estado*/}

			 </div>			 
			 </div>

			)
	}
}

Media.propTypes={
	image:PropTypes.string,
	title:PropTypes.string,
	autor:PropTypes.string,
	type:PropTypes.oneOf(['video','audio'])
}
export default Media;