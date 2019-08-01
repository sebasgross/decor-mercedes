import React, {Component} from 'react';

class NavBar extends Component {

// 	constructor(props) {
// 		super(props);
// 		console.log(this.props);
// }

	state = {
		clicked: true,
	};

		
	render(){
			return(
				<div className="navbar">
					{/* <a href="" className="nav-links">Home</a> */}
						<p className="nav-links">About</p>
						<p className="nav-links">Projects</p>
						<p className="nav-links" >Work</p>
				</div>
        )
    }
    
}

export default NavBar