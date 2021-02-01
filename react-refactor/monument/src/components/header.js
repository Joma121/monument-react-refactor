import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className="vertical-center">
				<div>
					<h1><Link to="/">Monument</Link></h1>
				</div>
			</header>
		);
	}
}

export default Header