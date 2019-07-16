import React, { Component } from 'react';
import Header from './header';
import Deck from './deck';
class Body extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Deck />
			</React.Fragment>
		);
	}
}

export default Body;
