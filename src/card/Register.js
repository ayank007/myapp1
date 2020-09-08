import React from 'react';
import {logo} from '../logo.svg';

class Register extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			remail:'',
			rpassword:'',
			rname:''
		}
	}

	onc=(event)=>{
		this.setState({
			rname:event.target.value
		})
	}
	oec=(event)=>{
		this.setState({
			remail:event.target.value
		})
	}
	opc=(event)=>{
		this.setState({
			rpassword:event.target.value
		})
	}

	onSubmit=()=>{
		fetch('https://ayank007myapp1.herokuapp.com/register',{
			mode: 'cors',
			credentials: 'include',
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				name:this.state.rname,
				email:this.state.remail,
				password:this.state.rpassword
			})
		})
		.then(response=>response.json())
		.then(data=>{
			if(data!=='sorry buddy'){
				this.props.onRouteChange('home')
			}
			else{
				console.log('sorry buddy')
			}
		})
		.catch(err=>{
			console.log('error registering')
		})
	}


	render(){
		return(
			<div className="bg-light-blue shadow-5 flex items-center justify-center flex-column" style={{width:"400px", height:"600px"}}>
				<div>
					<h1>First Name</h1>
					<input 
						type="text" 
						className="fname" 
						placeholder="Enter Your First Name" 
						onChange={this.onc}
					/>
				</div>
				
				<div>
					<h1>Last Name</h1>
					<input 
						type="text" 
						className="lname" 
						placeholder="Enter Your Last Name" 
					/>
				</div>
				
				<div>
					<h1>Email Address</h1>
					<input type="email" 
						className="email"
						placeholder="Your Email ID"
						onChange={this.oec} 
					/>
				</div>
				
				<div className="p1 flex items-center justify-center flex-column">
					<h1>Type a Password</h1>
					<input type="password" className="password" placeholder={{logo}}/>
				</div>
				
				<button>Genarate Password</button>
				
				<div className="p2 flex items-center justify-center flex-column">
					<h1>Retype Your Password</h1>
					<input type="password" className="password" onChange={this.opc} />
				</div>
				
				<div>
					<input 
						onClick={this.onSubmit}
						value="Register" 
						type="submit"
					/>
					<button className="Reset" type="Reset">reset</button>
				</div>
			</div>
		);
	}
}

export default Register;