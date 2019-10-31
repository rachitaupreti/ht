import React, { useState, useContext } from 'react';
import Customers, { insertCustomer } from '../api/customers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { GlobalContext } from './GlobalContext.jsx';

// CustomerAdd - a component to add a customer to the database

export default function CustomerAdd(props) {
	// We keep the value of the text field, by using the react useState hook
	const [value, setValue] = useState("");
	const previousPage = useContext(GlobalContext).previousPage;

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const addCustomer = () => {
		// Insert the text in the text field into the database.
		insertCustomer(value);

		// Return to the previous page after the addition.
		// The previousPage prop came from App.jsx which passed 
		// it to HTAppBar which then passed it to this component.
		previousPage();
	};

	return (
		<div>
			<TextField id="customer-name"
				label="Customer Name"
				onChange={handleChange}
				onKeyPress={(event) => {
					if (event.key === "Enter") {
						event.preventDefault();
						addCustomer();
					}
				}}
			/>
			<br />
			<br />
			<Button variant="contained" color="primary"
				onClick={(event) => { addCustomer(); }}>
				Add
			</Button>
		</div>
	);
}
