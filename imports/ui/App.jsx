import React, { Component } from 'react';
import HomePage from './HomePage';
import HTAppBar from './HTAppBar';
import Container from '@material-ui/core/Container';

class App extends Component {
	state = {
		page: <HomePage />,
		previous: <HomePage />
	}

	setPage(newPage) {
		this.setState({
			previous: this.state.page,
			page: newPage,
		});
	}

	handleChildClick(childData, event) {
		this.setPage(childData);
	}

	previousPage() {
		this.setPage(this.state.previous);
	}

	render() {
		return(
			<div>
				<HTAppBar
					onClick={this.handleChildClick.bind(this)}
					previousPage={this.previousPage.bind(this)} />
				<br />
				<Container maxWidth="md">
					{this.state.page}
				</Container>
			</div>
		);
	}
}

export default App;
