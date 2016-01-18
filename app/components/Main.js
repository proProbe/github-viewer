import React from 'react';
import SearchGithub from './SearchGithub';
// var ReactDOM = require('react-dom');

const Main = ({history, children}) => {
	return (
		<div className="main-container">
		<nav className="navbar navbar-default" role="naviation">
		<div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
		<SearchGithub history={history}/>
		</div>
		</nav>
		<div className="container">
		{children}
		</div>
		</div>
		);
}

export default Main;

// ReactDOM.render(<Main />, document.getElementById('app'));