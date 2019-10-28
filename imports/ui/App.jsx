import React, { Component } from 'react';
import HomePage from './HomePage';
import HTAppBar from './HTAppBar';
import Container from '@material-ui/core/Container';

class App extends Component {
	state = {
		page: <HomePage />,
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
				<HTAppBar onClick={this.handleChildClick.bind(this)} />
				<br />
				<Container maxWidth="md">
					{this.state.page}
				</Container>
			</div>
		);
	}
}

export default App;
