import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import HomePage from './HomePage';
import CustomerList from './CustomerList';
import CustomerAdd from './CustomerAdd';

export default class HTAppBar extends Component {
	render() {
		return(
			<div>
				<AppBar position="static">
					<Toolbar>
						<Button color="inherit"
							onClick={e => this.props.onClick(<HomePage />, e)}>
								Home
						</Button>
						<Button color="inherit"
							onClick={e => this.props.onClick(<CustomerList />, e)}>
								Customer List
						</Button>
						<Button color="inherit" 
							onClick={e => this.props.onClick(<CustomerAdd />, e)}>
								Customer Add
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
