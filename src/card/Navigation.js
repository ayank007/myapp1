import React from 'react';

const Navigation =({onRouteChange, destination, value})=>{
	return(
		<input 
			onClick={()=>onRouteChange(destination)}
			value={value} 
			type="submit"
		/>
	);
}

export default Navigation;