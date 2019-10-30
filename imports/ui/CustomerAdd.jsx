import React, { Component } from 'react';
import Customers, { insertCustomer } from '../api/customers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// CustomerAdd - a component to add a customer to the database

class CustomerAdd extends Component {
	// We keep the value of the text field in the state
	state = {
		value: "",
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	addCustomer() {
		// Insert the text in the text field into the database.
		insertCustomer(this.state.value);

		// Return to the previous page after the addition.
		// The previousPage prop came from App.jsx which passed 
		// it to HTAppBar which then passed it to this component.
		this.props.previousPage();
	}

	render() {
		return (
			<div>
			<TextField id="customer-name"
				label="Customer Name"
				onChange={this.handleChange.bind(this)}
				onKeyPress={(event) => {
					if (event.key === "Enter") {
						event.preventDefault();
						this.addCustomer();
					}
				}}
			/>
			<br />
			<br />
			<Button variant="contained" color="primary"
					onClick={(event) => { this.addCustomer(); }}>
				Add
			</Button>
			</div>
		);
	}
}

export default CustomerAdd;
