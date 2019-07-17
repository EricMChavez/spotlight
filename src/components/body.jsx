import React, { Component } from 'react';
import Header from './header';
import Deck from './deck';
import Toolbar from './toolbar';
import Display from './display';
class Body extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Deck />
				<Toolbar />
				<Display />
			</React.Fragment>
		);
	}
}

export default Body;
