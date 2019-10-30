import React, { Component } from 'react';
import Customers, { insertCustomer } from '../api/customers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CustomerAdd extends Component {
	state = {
		value: "",
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	addCustomer() {
		console.log("Add customer: " + this.state.value);
		insertCustomer(
			this.state.value
		);
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
