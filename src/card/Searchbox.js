import React from 'react';

const Searchbox=({searchChange})=>{
	return(
			<div>
				<input style={{height:"50px", width:"200px"}} className="bg-light-green"
					type="search"
					placeholder="type something"
					onChange={searchChange}
				/>
			</div>
		);
}

export default Searchbox;