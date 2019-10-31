import React, { useState } from 'react';
import HomePage from './HomePage';
import HTAppBar from './HTAppBar';
import Container from '@material-ui/core/Container';

// The main App.

export default function App() {
	// Here we keep a record of the currect page and the previous page
	const [page, setPage] = useState(<HomePage />);
	const [previous, setPrevious] = useState(<HomePage />);

	// Set a new page 
	const setNewPage = (newPage) => {
		setPrevious(page);
		setPage(newPage);
	};

	// Change to the previous page
	const previousPage = () => {
		setNewPage(previous);
	};

	// We pass the setPage and previousPage function props to HTAppBar
	// so we can call them when we press buttons.
	//
	// The page in Container will automatically change when
	// we change the state in setPage().
	return(
		<div>
			<HTAppBar
				setPage={setNewPage}
				previousPage={previousPage} />
			<br />
			<Container maxWidth="md">
				{page}
			</Container>
		</div>
	);
}
