import React from 'react';
// import App from '../App.js';
import img1 from '../img/img1.png';

class Card extends React.PureComponent{
	render(){
		const {id,name,email,color}=this.props;
		return(
			<div className="card bg-light-green tc grow br3 pa3 shadow-5 relative" style={{height:'420px', margin:"12px"}}>
				<div className="imgbox">
					<img src={img1} alt="hello" className="br-100 w4 h4"/>
				</div>
				<div className="content">
					<h2 style={{color:color}}>{name}</h2>
					<h4>{email}</h4>
					<p>A paragraph is a series of related sentences developing a central idea, called the topic.
					Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a 
					group of sentences that supports one central, unified idea. Paragraphs add one idea at a 
					time to your broader argument.</p>
				</div>
				<div className="w4 h4 br-100 bg-dark-green absolute bottom-1 left-1 o-50 f1 flex items-center justify-center">{id}</div>
			</div>
		);
	}
}
export default Card;