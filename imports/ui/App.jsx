import React, { Component } from 'react';
import HomePage from './HomePage';
import HTAppBar from './HTAppBar';
import Container from '@material-ui/core/Container';

// The main App.

class App extends Component {
	// Here we keep a record of the currect page and the previous page
	state = {
		page: <HomePage />,
		previous: <HomePage />
	}

	// Set a new page, 
	setPage(newPage) {
		this.setState({
			previous: this.state.page,
			page: newPage,
		});
	}

	// Change to the previous page
	previousPage() {
		this.setPage(this.state.previous);
	}

	render() {
		// We pass the setPage and previousPage function props to HTAppBar
		// so we can call them when we press buttons.
		//
		// The page in Container will automatically change when
		// we change the state in setPage().
		return(
			<div>
				<HTAppBar
					setPage={this.setPage.bind(this)}
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
