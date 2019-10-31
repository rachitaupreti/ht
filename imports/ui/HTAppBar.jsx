import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import HomePage from './HomePage';
import CustomerList from './CustomerList';
import CustomerAdd from './CustomerAdd';
import { GlobalContext } from './GlobalContext.jsx';

// HTAppBar - AppBar component for the project

const Pages = [
	{ id: 1, name: 'Home', value: <HomePage /> },
	{ id: 2, name: 'Customer List', value: <CustomerList /> },
	{ id: 3, name: 'Customer Add', value: <CustomerAdd /> }
];

export default function HTAppBar() {

	const setPage = useContext(GlobalContext).setPage;

	const makeButton = (page) => {
		return(
			<Button key={page.id} color="inherit"
				onClick={() => setPage(page.value)}>
				{page.name}
			</Button>
		);
	};
	const pages = Pages.map(
		page => makeButton(page)
	);

	// We create a Button for each page we have and add an onClick function
	// which calls the setPage function we passed to the GlobalContext from App.jsx
	return(
		<div>
			<AppBar position="static">
				<Toolbar>
					{pages}
				</Toolbar>
			</AppBar>
		</div>
	);
}
