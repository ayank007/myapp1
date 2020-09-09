import React from 'react';
// import {logo} from '../logo.svg';

class SignIn extends React.PureComponent{

	constructor(props){
	super(props)
		this.state={
			semail:'',
			spassword:''
		}
	}

	onEmailChange=(event)=>{
		this.setState({
			semail:event.target.value
		})
	}
	onPasswordChange=(event)=>{
		this.setState({
			spassword:event.target.value
		})
	}
	onSubmit=()=>{
		// const {semail,spassword}=this.state;
		fetch('https://ayank007myapp1.herokuapp.com/signin',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email:this.state.semail,
				password:this.state.spassword
			})
		})
		.then(response=>response.json())
		.then(data=>{
			if (data==='who the fuck are you'){
				console.log('who the fuck are you')
			}
			else if (data==='wrong password buddy'){
				console.log('wrong password buddy')
			}
			else if (data==='jani na kiser error'){
				console.log('jani na kiser error')
			}
			else{
				this.props.onRouteChange('home')
				console.log('welcome')
			}
		})
		.catch(err=>{
			console.log('error signing')
		})

	}

	render(){
// const SignIn =({onRouteChange})=>{
		// const {onRuoteChange}=this.props;s
		return(
			<div className="bg-light-blue shadow-5 flex items-center justify-center flex-column" style={{width:"400px", height:"600px"}}>
				
				<div><h1>Email Address</h1><input type="email" className="email" placeholder="Your Email ID" onChange={this.onEmailChange}/></div>
				<div className="p1 flex items-center justify-center flex-column">
					<h1>Enter Your Password</h1>
					<input type="password" className="password" onChange={this.onPasswordChange} />
				</div>
				
				<div>
					<input 
						onClick={this.onSubmit}
						value="Sign in" 
						type="submit"
					/>
					<button className="Reset" type="Reset">reset</button>
				</div>
			</div>
		);

	}
}

export default SignIn;