import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import HomePage from './HomePage';
import CustomerList from './CustomerList';
import CustomerAdd from './CustomerAdd';

// HTAppBar - AppBar component for the project

export default class HTAppBar extends Component {
	// We create a Button for each page we have and add an onClick function
	// which calls the setPage function we passed from App.jsx
	//
	// For the CustomerAdd component we also pass along the previousPage function
	render() {
		return(
			<div>
				<AppBar position="static">
					<Toolbar>
						<Button color="inherit"
							onClick={e => this.props.setPage(<HomePage />, e)}>
								Home
						</Button>
						<Button color="inherit"
							onClick={e => this.props.setPage(<CustomerList />, e)}>
								Customer List
						</Button>
						<Button color="inherit" 
							onClick={e => this.props.setPage(<CustomerAdd previousPage={this.props.previousPage}/>, e)}>
								Customer Add
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
