import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import HomePage from './HomePage';
import CustomerList from './CustomerList';
import CustomerAdd from './CustomerAdd';
import { GlobalContext } from './GlobalContext.jsx';

// HTAppBar - AppBar component for the project

export default function HTAppBar() {

	const setPage = useContext(GlobalContext).setPage;

	// We create a Button for each page we have and add an onClick function
	// which calls the setPage function we passed to the GlobalContext from App.jsx
	return(
		<div>
			<AppBar position="static">
				<Toolbar>
					<Button color="inherit"
						onClick={() => setPage(<HomePage />)}>
						Home
					</Button>
					<Button color="inherit"
						onClick={() => setPage(<CustomerList />)}>
						Customer List
					</Button>
					<Button color="inherit"
						onClick={() => setPage(<CustomerAdd />)}>
						Customer Add
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
