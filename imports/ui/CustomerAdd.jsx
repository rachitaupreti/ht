import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function addCustomer() {
	console.log("add customer");
}

class CustomerAdd extends Component {
	render() {
		return (
			<div>
			<TextField id="customer-name"
				label="Customer Name"
				onKeyPress={(event) => {
					if (event.key === "Enter") {
						event.preventDefault();
						addCustomer();
					}
				}}
			/>
			<br />
			<Button variant="contained" color="primary"
					onClick={(event) => { addCustomer(); }}>
				Add
			</Button>
			</div>
		);
	}
}

export default CustomerAdd;
