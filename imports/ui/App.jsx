import React, { Component } from 'react';
import CustomerList from './CustomerList';
import AsiakasBar from './AsiakasBar';

class App extends Component {
	state = {
		page: <CustomerList />,
	}

	setPage(newPage) {
		this.setState({
			page: newPage,
		});
	}

	handleChildClick(childData, event) {
		this.setPage(childData);
	}

	render() {
		return(
			<div>
				<AsiakasBar onClick={this.handleChildClick.bind(this)} />
				<br />
				{this.state.page}
			</div>
		);
	}
}

export default App;
