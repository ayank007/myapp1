import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './card/Card';
import Searchbox from './card/Searchbox';
import SignIn from './card/SignIn';
import Register from './card/Register';
import Navigation from './card/Navigation';
// import '../node_modules/tachyons/css/tachyons.css';
import 'tachyons';

class App extends React.PureComponent{

    constructor() {
    super()
        this.state = {
            id:"5",
            color:"red",
            route:"signin"
        }
    }
    onSearchChange = (event) => {
        let x=event.target.value;
        if(x.length === 0){
            this.setState({
                id:'5',
                color:"red"
            })
        }
        else{
            this.setState({ 
                id: x,
                color:"blue"
            })
        }
    }
    onRouteChange=(route)=>{
        this.setState({
            route:route
        });
    }

    // componentDidMount(){
    //     fetch('http://localhost:3001/')
    //         .then(response => response.json())
    //             .then(console.log)
    // }
    
    render(){
        const {route,id,color}=this.state;
        const name='Ayan Koley';
        const email="agshbkr@gmail.com";
        if(route==='home'){
            return(
                <div>
                    <Navigation onRouteChange={this.onRouteChange} destination={'signin'} value={'Sign Out'} />

                    <div className="w-100 flex items-center justify-center" style={{height:"80px"}}>
                        <Searchbox searchChange={this.onSearchChange}/>
                    </div>
                    <div className="grid items-center justify-center" style={{transition:'1s', display:'grid', gridTemplateColumns : "repeat(auto-fit, minmax(250px, 300px))"}}>
                        <Card id={id} name={name} email={email} className='card' color={color}/>
                        <Card id={id} name={name} email={email} className='card' color={color}/>
                        <Card id={id} name={name} email={email} className='card' color={color}/>
                        <Card id={id} name={name} email={email} className='card' color={color}/>
                        <Card id={id} name={name} email={email} className='card' color={color}/>
                        <Card id={id} name={name} email={email} className='card' color={color}/>
                        <Card id={id} name={name} email={email} className='card' color={color}/>
                    </div>
                </div>
            );
        }else if(route==='signin'){
            return(
                <div>
                    
                    <Navigation onRouteChange={this.onRouteChange} destination={'register'} value={'Register'} />
                    
                    <div className="flex items-center justify-center pt5">
                        <SignIn onRouteChange={this.onRouteChange}/>
                    </div>

                </div>
            );
        }else if (route==='register') {
            return(
                <div>
                    
                    <Navigation onRouteChange={this.onRouteChange} destination={'signin'} value={'Sign In'} />
                    
                    <div className="flex items-center justify-center pt5">
                        <Register onRouteChange={this.onRouteChange}/>
                    </div>

                </div>
            );
        }

    }
}

export default App;
