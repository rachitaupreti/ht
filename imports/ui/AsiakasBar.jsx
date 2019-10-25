import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import CustomerList from './CustomerList';
import Test from './Test';

export default class AsiakasBar extends Component {
	render() {
		return(
			<div>
				<AppBar position="static">
					<Toolbar>
						<Button color="inherit"
							onClick={e => this.props.onClick(<CustomerList />, e)}>
								Asiakas Lista
						</Button>
						<Button color="inherit" 
							onClick={e => this.props.onClick(<Test />, e)}>
								Test
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
