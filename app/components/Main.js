// app/components/Main.js

import React from 'react'
import { Link } from 'react-router';

export default class Main extends React.Component {
	render () {
		return (
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link className="navbar-brand" to="/">{ this.props.name }</Link>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/pizzerias">Pizzerias</Link></li>
						</ul>
		        	</div>
				</div>
			</nav>
		)
	}
}

Main.propTypes = {
	name: React.PropTypes.string.isRequired
}