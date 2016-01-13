var React = require('react');
var SearchGithub = require('./SearchGithub');
// var ReactDOM = require('react-dom');

var Main = React.createClass({

	render: function(){
		return (
			<div className="main-container">
				<nav className="navbar navbar-default" role="naviation">
					<div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
						<SearchGithub />
					</div>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Main;

// ReactDOM.render(<Main />, document.getElementById('app'));